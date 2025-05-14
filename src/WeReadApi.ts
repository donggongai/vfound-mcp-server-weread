import * as crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';


// 加载.env文件中的环境变量，将其注入到Node.js的process.env对象中，方便后续代码使用环境变量
dotenv.config();

// 首页地址
const WEREAD_URL = "https://weread.qq.com/";
// 获取有阅读笔记的书籍清单接口
const WEREAD_NOTEBOOKS_URL = "https://weread.qq.com/api/user/notebook"; 
// 获取指定书籍的信息接口
const WEREAD_BOOK_INFO_URL = "https://weread.qq.com/web/book/info"; // web>api
// 获取指定书籍的划线记录接口
const WEREAD_BOOKMARKLIST_URL = "https://weread.qq.com/web/book/bookmarklist"; 
// 获取指定书籍的章节信息接口
const WEREAD_CHAPTER_INFO_URL = "https://weread.qq.com/web/book/chapterInfos"; 
// 获取指定书籍的想法/笔记列表接口
const WEREAD_REVIEW_LIST_URL = "https://weread.qq.com/web/review/list"; // web>api
// 获取指定书籍的阅读进度信息接口
const WEREAD_READ_INFO_URL = "https://weread.qq.com/web/book/getProgress"; 
// 书架同步接口
const WEREAD_SHELF_SYNC_URL = "https://weread.qq.com/web/shelf/sync";

interface ChapterInfo {
  chapterUid: number;
  chapterIdx: number;
  updateTime: number;
  readAhead: number;
  title: string;
  level: number;
}

// 获取命令行参数
interface CommandArgs {
  WEREAD_COOKIE?: string;
  CC_URL?: string; 
  CC_ID?: string;
  CC_PASSWORD?: string;
}

export class WeReadApi {
  private cookie: string = "";
  private axiosInstance: any;
  private initialized: boolean = false;
  private commandArgs: CommandArgs = {};

  constructor() {
    this.parseCommandArgs();
    this.initAsync().catch(error => {
      console.error("初始化WeReadApi失败:", error);
    });
  }

  // 解析命令行参数
  /**
   * 解析命令行参数并将其存储到 `this.commandArgs` 中。
   */
  private parseCommandArgs(): void {
    try {
      // 获取Node.js进程的命令行参数数组
      const args = process.argv;
      // 查找命令行参数数组中 '--args' 的索引位置
      const argsIndex = args.findIndex(arg => arg === '--args');
      
      // 检查是否找到了 '--args' 且其后还有参数
      if (argsIndex !== -1 && argsIndex + 1 < args.length) {
        try {
          // 将 '--args' 后面的参数解析为JSON对象并赋值给 `this.commandArgs`
          this.commandArgs = JSON.parse(args[argsIndex + 1]);
        } catch (error) {
          // 若解析失败，打印错误信息
          console.error("解析命令行参数失败:", error);
        }
      }
    } catch (error) {
      // 若处理命令行参数过程中出现错误，打印错误信息
      console.error("处理命令行参数时出错:", error);
    }
  }

  private async initAsync(): Promise<void> {
    if (this.initialized) return;
    
    try {
      this.cookie = await this.getCookie();
      this.axiosInstance = axios.create({
        headers: {
          'Cookie': this.cookie,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
        },
        timeout: 60000  // 设置60秒超时
      });
      this.initialized = true;
    } catch (error) {
      console.error("初始化失败:", error);
      throw error;
    }
  }

  private async tryGetCloudCookie(url: string, id: string, password: string): Promise<string | null> {
    if (url.endsWith("/")) {
      url = url.slice(0, -1);
    }
    const reqUrl = `${url}/get/${id}`;
    const data = { password };
    
    try {
      const response = await axios.post(reqUrl, data, { timeout: 30000 });
      
      if (response.status === 200) {
        const responseData = response.data;

        if (responseData.cookie_data) {
          // 打印所有可用的域名
          const domains = Object.keys(responseData.cookie_data);
          
          // 首先尝试 "weread.qq.com" 域名
          if ("weread.qq.com" in responseData.cookie_data) {
            return this.extractCookiesFromDomain(responseData.cookie_data, "weread.qq.com");
          }
          
          // 然后尝试 "weread" 域名
          if ("weread" in responseData.cookie_data) {
            
            // 检查这些Cookie是否真的是weread.qq.com的Cookie
            const wereadCookies = responseData.cookie_data["weread"];
            const validWereadCookies = wereadCookies.filter((cookie: any) => 
              cookie.domain && (cookie.domain === ".weread.qq.com" || cookie.domain === "weread.qq.com")
            );
            
            if (validWereadCookies.length > 0) {
              const cookieItems = validWereadCookies.map((cookie: any) => `${cookie.name}=${cookie.value}`);
              return cookieItems.join("; ");
            } else {
              console.warn(`[CookieCloud] weread域名下的Cookie不属于微信读书`);
            }
          }
          
          // 最后尝试遍历所有域名，寻找包含weread.qq.com域名的Cookie
          console.warn(`[CookieCloud] 尝试从所有域名中查找微信读书Cookie`);
          for (const domain of domains) {
            const cookiesInDomain = responseData.cookie_data[domain];
            if (Array.isArray(cookiesInDomain)) {
              const wereadCookies = cookiesInDomain.filter((cookie: any) => 
                cookie.domain && (cookie.domain === ".weread.qq.com" || cookie.domain === "weread.qq.com")
              );
              
              if (wereadCookies.length > 0) {
                console.warn(`[CookieCloud] 在${domain}域名下找到${wereadCookies.length}个微信读书Cookie`);
                const cookieItems = wereadCookies.map((cookie: any) => `${cookie.name}=${cookie.value}`);
                return cookieItems.join("; ");
              }
            }
          }
        } else {
          console.warn(`[CookieCloud] 响应中没有cookie_data字段`);
        }
      }
      console.warn("[CookieCloud] 从Cookie Cloud获取数据成功，但未找到微信读书Cookie");
    } catch (error: any) {
      console.error("[CookieCloud] 从Cookie Cloud获取Cookie失败:", error.message);
      if (error.response) {
        console.error(`[CookieCloud] 响应状态: ${error.response.status}`);
      }
    }
    
    return null;
  }
  
  // 从指定域名提取Cookie
  private extractCookiesFromDomain(cookieData: any, domain: string): string | null {
    const cookies = cookieData[domain];
    
    if (!Array.isArray(cookies) || cookies.length === 0) {
      return null;
    }
    
    const cookieItems = [];
    for (const cookie of cookies) {
      if (cookie.name && cookie.value) {
        cookieItems.push(`${cookie.name}=${cookie.value}`);
      }
    }
    
    if (cookieItems.length === 0) {
      return null;
    }
    
    return cookieItems.join("; ");
  }

  private async getCookie(): Promise<string> {
    // 优先级：
    // 1. 命令行参数中的WEREAD_COOKIE
    // 2. 命令行参数中的Cookie Cloud配置
    // 3. 环境变量中的Cookie Cloud配置
    // 4. 环境变量中的WEREAD_COOKIE
    
    let cookie: string | null = null;
    
    // 1. 检查命令行参数中的Cookie
    if (this.commandArgs.WEREAD_COOKIE) {
      return this.commandArgs.WEREAD_COOKIE;
    }
    
    // 2. 检查命令行参数中的Cookie Cloud配置
    if (this.commandArgs.CC_URL && this.commandArgs.CC_ID && this.commandArgs.CC_PASSWORD) {
      try {
        cookie = await this.tryGetCloudCookie(
          this.commandArgs.CC_URL,
          this.commandArgs.CC_ID,
          this.commandArgs.CC_PASSWORD
        );
        if (cookie) {
          return cookie;
        }
      } catch (error) {
        console.warn("使用命令行参数中的Cookie Cloud配置获取Cookie失败");
      }
    }
    
    // 3. 尝试环境变量中的Cookie Cloud配置
    const envUrl = process.env.CC_URL;
    const envId = process.env.CC_ID;
    const envPassword = process.env.CC_PASSWORD;
    
    if (envUrl && envId && envPassword) {
      try {
        cookie = await this.tryGetCloudCookie(envUrl, envId, envPassword);
        if (cookie) {
          return cookie;
        }
      } catch (error) {
        console.warn("使用环境变量中的Cookie Cloud配置获取Cookie失败");
      }
    }
    
    // 4. 回退到环境变量中的直接Cookie
    const envCookie = process.env.WEREAD_COOKIE;
    if (!envCookie || !envCookie.trim()) {
      throw new Error("没有找到cookie，请按照文档填写cookie或配置Cookie Cloud");
    }
    
    return envCookie;
  }

  private handleErrcode(errcode: number): void {
    if (errcode === -2012 || errcode === -2010) {
      console.error("微信读书Cookie过期了，请参考文档重新设置。");
    }
  }

/**
 * 该方法用于对一个异步函数进行重试操作，直到函数成功执行或达到最大重试次数。
 * 
 * @template T - 异步函数返回值的类型。
 * @param func - 一个返回 Promise 的函数，该函数是需要重试的操作。
 * @param maxAttempts - 最大重试次数，默认为 3 次。
 * @param waitMs - 每次重试前的基础等待时间（毫秒），默认为 5000 毫秒。实际等待时间会在此基础上加上 0 到 3000 毫秒的随机值。
 * @returns 返回一个 Promise，该 Promise 在函数成功执行时解析为函数的返回值，若所有重试都失败，则抛出错误。
 */
private async retry<T>(func: () => Promise<T>, maxAttempts = 3, waitMs = 5000): Promise<T> {
  // 开始重试循环，从第 1 次尝试开始，直到达到最大重试次数
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // 尝试执行传入的异步函数，并返回其结果
      return await func();
    } catch (error: any) {
      // 如果错误对象包含响应信息，打印响应状态码
      if (error.response) {
        console.error(`响应状态: ${error.response.status}`);
      }
      
      // 如果已经达到最大重试次数，将错误抛出
      if (attempt === maxAttempts) {
        throw error;
      }
      
      // 计算本次重试前的等待时间，基础等待时间加上 0 到 3000 毫秒的随机值
      const randomWait = waitMs + Math.floor(Math.random() * 3000);
      // 打印重试提示信息，告知用户当前是第几次尝试失败以及下次重试的等待时间
      console.warn(`第${attempt}次尝试失败，${randomWait}ms后重试...`);
      // 等待指定的时间后再进行下一次重试
      await new Promise(resolve => setTimeout(resolve, randomWait));
    }
  }
  // 如果所有重试都失败了，抛出一个错误提示信息
  throw new Error("所有重试都失败了");
}

/**
 * 确保 `WeReadApi` 实例已经初始化。
 * 如果实例尚未初始化（`this.initialized` 为 `false`），则调用 `initAsync` 方法进行异步初始化。
 * 该方法通常在执行需要初始化完成后才能进行的操作之前调用，以保证操作的正常执行。
 * 
 * @returns {Promise<void>} 一个 Promise，当实例初始化完成或已经初始化时解析。
 */
private async ensureInitialized(): Promise<void> {
  if (!this.initialized) {
    await this.initAsync();
  }
}
  private getStandardHeaders(): Record<string, string> {
    return {
      'Cookie': this.cookie,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
      'Connection': 'keep-alive',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'upgrade-insecure-requests': '1'
    };
  }

  private async visitHomepage(): Promise<void> {
    try {
      await axios.get(WEREAD_URL, { 
        headers: this.getStandardHeaders(),
        timeout: 30000
      });
    } catch (error: any) {
      console.error("访问主页失败:", error.message);
    }
  }

  private async makeApiRequest<T>(
    url: string, 
    method: 'get' | 'post' = 'get', 
    params: Record<string, any> = {}, 
    data: any = null
  ): Promise<T> {
    await this.ensureInitialized();
    
    // 向所有GET请求添加时间戳避免缓存
    if (method === 'get') {
      params._ = new Date().getTime();
    }
    
    try {
      let response;
      
      if (method === 'get') {
        response = await this.axiosInstance.get(url, { params });
      } else {
        response = await this.axiosInstance.post(url, data, { params });
      }
      
      if (response.data.errcode !== undefined && response.data.errcode !== 0) {
        this.handleErrcode(response.data.errcode);
        throw new Error(`API返回错误: ${response.data.errmsg || 'Unknown error'} (code: ${response.data.errcode})`);
      }
      
      return response.data;
    } catch (error: any) {
      console.error(`API请求失败 (${url}):`, error.message);
      throw error;
    }
  }

  // 获取书架信息，包含所有的书，和分组，阅读进度等信息
  public async getShelf(): Promise<any> {
    await this.ensureInitialized();
    return this.retry(async () => {
      return await this.makeApiRequest<any>(WEREAD_SHELF_SYNC_URL, "get");
    });
  }

// 获取存在笔记的书籍信息，
/** 数据格式:
 {
  "synckey": 1747177544,
  "totalBookCount": 132,
  "noBookReviewCount": 0,
  "books": [
    {},{},……,{}
  ]
} **/
public async getNoteBooks(): Promise<any> {
  await this.ensureInitialized();
  return this.retry(async () => {
    return await this.makeApiRequest<any>(WEREAD_NOTEBOOKS_URL, "get");
  });
}

// 获取有笔记的书的列表,只取结果中的books
public async getNotebooklist(): Promise<any[]> {
  const data = await this.getNoteBooks();
  return data.books || [];
}

  // 获取指定数据的书籍信息
  public async getBookinfo(bookId: string): Promise<any> {
    await this.ensureInitialized();
    return this.retry(async () => {
      return await this.makeApiRequest<any>(WEREAD_BOOK_INFO_URL, "get", { bookId });
    });
  }

  // 获取指定书籍的划线记录，不传bookId则获取所有
  public async getBookmarkList(bookId: string): Promise<any[]> {
    await this.ensureInitialized();
    return this.retry(async () => {
      const data = await this.makeApiRequest<any>(WEREAD_BOOKMARKLIST_URL, "get", { bookId });
      let bookmarks = data.updated || [];
      // 确保每个划线对象格式一致
      bookmarks = bookmarks.filter((mark: any) => mark.markText && mark.chapterUid);
      return bookmarks;
    });
  }

  // 获取指定书籍的阅读进度
  public async getReadInfo(bookId: string): Promise<any> {
    await this.ensureInitialized();
    return this.retry(async () => {
      return await this.makeApiRequest<any>(WEREAD_READ_INFO_URL, "get", { bookId });
    });
  }

  // 获取指定书籍的笔记/想法列表
  public async getReviewList(bookId: string): Promise<any[]> {
    await this.ensureInitialized();
    return this.retry(async () => {
      const data = await this.makeApiRequest<any>(WEREAD_REVIEW_LIST_URL, "get", {
        // 书籍的ID
        bookId,
        // 列表类型，11、4（自己及好友）、2（很多，貌似所有的评论）、3（空）、5（貌似是或者自己及好友有多少人点评过）、6（与11相同）、7（很多，貌似所有）、8（空）、10（空）、12、13、15（空） 
        listType: 11,
        // 最大索引，0 可能表示从列表的起始位置开始获取数据
        maxIdx: 0,
        // 要获取的记录数量，0表示不限制
        count: 0,
        // 列表模式，2(3与其一致)，1多了likesForList，显示笔记/想法的点赞列表，4与1基本一致，likesForList名字换成了likes，内容一致
        listMode: 2,
        // 同步键，用于增量获取
        syncKey: 0,
        // 只查自己的，查全部的话会包含好友的
        mine : 1
      });
      
      let reviews = data.reviews || [];
      // 转换成正确的格式
      reviews = reviews.map((x: any) => x.review);
      
      // 为书评添加chapterUid
      reviews = reviews.map((x: any) => {
        if (x.type === 4) {
          return { chapterUid: 1000000, ...x };
        }
        return x;
      });
      
      return reviews;
    });
  }

  // 获取指定书籍的章节信息
  public async getChapterInfo(bookId: string): Promise<Record<string, ChapterInfo>> {
    await this.ensureInitialized();
    return this.retry(async () => {
      try {
        // 1. 首先访问主页，确保会话有效
        await this.visitHomepage();
        
        // 2. 获取笔记本列表，进一步初始化会话
        await this.getNotebooklist();
        
        // 3. 添加随机延迟，模拟真实用户行为
        const delay = 1000 + Math.floor(Math.random() * 2000);
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // 4. 从cookie中提取关键信息
        let wr_vid = '';
        let wr_skey = '';
        
        // 提取wr_vid和wr_skey
        const vidMatch = this.cookie.match(/wr_vid=([^;]+)/);
        const skeyMatch = this.cookie.match(/wr_skey=([^;]+)/);
        
        if (vidMatch) wr_vid = vidMatch[1];
        if (skeyMatch) wr_skey = skeyMatch[1];
        
        // 5. 请求章节信息 - 模拟浏览器行为
        const url = `${WEREAD_CHAPTER_INFO_URL}`;
        
        // 添加请求参数
        const params: Record<string, any> = {
          _: new Date().getTime()
        };
        
        // 使用包含更多信息的请求头
        const headers = {
          'Cookie': this.cookie,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json, text/plain, */*',
          'Origin': 'https://weread.qq.com',
          'Referer': `https://weread.qq.com/web/reader/${bookId}`,
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
        };
        
        // 使用正确的请求体格式
        const body = JSON.stringify({
          bookIds: [bookId]
        });
        
        // 直接通过axios请求
        const response = await axios({
          method: 'post',
          url: url,
          params: params,
          headers: headers,
          data: body,
          timeout: 60000
        });
        
        const data = response.data;
        
        // 6. 处理结果 - 增加多种可能的响应格式处理
        let update = null;
        
        // 格式1: {data: [{bookId: "xxx", updated: []}]}
        if (data.data && data.data.length === 1 && data.data[0].updated) {
          update = data.data[0].updated;
        } 
        // 格式2: {updated: []}
        else if (data.updated && Array.isArray(data.updated)) {
          update = data.updated;
        }
        // 格式3: [{bookId: "xxx", updated: []}]
        else if (Array.isArray(data) && data.length > 0 && data[0].updated) {
          update = data[0].updated;
        }
        // 格式4: 数组本身就是章节列表
        else if (Array.isArray(data) && data.length > 0 && data[0].chapterUid) {
          update = data;
        }
        
        if (update) {
          // 添加点评章节
          /*  update.push({
            chapterUid: 1000000,
            chapterIdx: 1000000,
            updateTime: 1683825006,
            readAhead: 0,
            title: "点评",
            level: 1
          }); */
          
          // 确保chapterUid始终以字符串形式作为键
          const result = update.reduce((acc: Record<string, ChapterInfo>, curr: ChapterInfo) => {
            // 显式转换为字符串
            const chapterUidStr = String(curr.chapterUid);
            acc[chapterUidStr] = curr;
            return acc;
          }, {});
          
          return result;
        } else if (data.errCode) {
          this.handleErrcode(data.errCode);
          throw new Error(`API返回错误: ${data.errMsg || 'Unknown error'} (code: ${data.errCode})`);
        } else if (data.errcode) {
          this.handleErrcode(data.errcode);
          throw new Error(`API返回错误: ${data.errmsg || 'Unknown error'} (code: ${data.errcode})`);
        } else {
          throw new Error(`获取章节信息失败，返回格式不符合预期`);
        }
      } catch (error: any) {
        console.error(`获取章节信息失败:`, error.message);
        if (error.response) {
          console.error(`状态码: ${error.response.status}`);
        }
        throw error;
      }
    });
  }
}