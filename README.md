# 微信读书 MCP Server

本项目初始代码fork自`ChenyqThu/mcp-server-weread`，在此感谢！

微信读书的MCP（Model Context Protocol）服务工具，支持将微信读书的书籍信息、笔记和划线、想法、书评等数据提供给支持MCP的大语言模型客户端，如Trae。

## 功能特点

1. **书籍与笔记浏览**
   - 获取用户书架信息
   - 获取用户带笔记的书籍列表
   - 获取指定书籍的详细信息
2. **笔记内容获取与处理**
   - 获取特定书籍的所有笔记（划线、想法、书评）
   - 按章节组织笔记内容
   - 基于关键词搜索笔记内容
3. **阅读数据获取**
   - 获取用户最近阅读记录
   - 获取用户的阅读进度
4. **AI 辅助分析**
   - 通过LLM客户端分析用户的笔记内容，分析用户阅读习惯和用词习惯等
   - 对笔记内容进行主题聚类，生成标签，可用于后续检索

## 支持的功能

1. **get_bookshelf** - 获取用户书架上所有书籍的信息
   - 返回书籍基本信息，包括书名、作者、译者和分类等

2. **search_books** - 通过关键词检索用户书架上的书籍
   - 支持模糊匹配和精确匹配
   - 可选是否包含详细信息
   - 可设置最大结果数量

3. **get_book_marks_and_reviews** - 获取指定书籍的所有划线和笔记
   - 支持按章节组织结果
   - 支持筛选划线样式
   - 返回结构化的数据以便于LLM理解

## 使用示例

在支持MCP的AI客户端（如`Trae`）中，您可以：

1. 请求："查看我微信读书书架里面的书籍，并分类汇总"
2. 请求："帮我找关于余华的书"
3. 请求："帮我找一下我笔记中关于心理学的书"
4. 请求："获取我最近读过的书"

## 安装与使用

### 环境准备

1. 确保您的系统已安装 Node.js (v16+)
2. 克隆本仓库：`git clone https://github.com/yourusername/vfound-mcp-server-weread.git`
3. 进入项目目录：`cd vfound-mcp-server-weread`
4. 安装依赖：`npm install`（下载慢可以用：npm install --registry=https://registry.npmmirror.com）

### 获取Cookie

微信读书的Cookie可以通过以下步骤获取：

1. 在浏览器中登录[微信读书网页版](https://weread.qq.com/)
2. 按F12（或右键检查）打开开发者工具，切换到Network标签页
3. 刷新页面，在请求列表中找到weread.qq.com的请求
4. 在Headers中找到Cookie字段，复制其完整内容
5. 将复制的内容添加到MCP Json 或 .env文件的WEREAD_COOKIE变量中

### 安装教程

详见：[Weread MCP Server 使用指南](https://chenge.ink/article/post20250505)

### 与客户端集成

客户端的集成大同小异，这里以Trae为例

1. 打开Trae

2. 找到右侧的MCP配置

   添加MCP Servers

![图片.png](http://test.11315.com/ueditorgroup/test/ueditor/jsp/upload/image/2025/04/23/1745373073392094270.png) 

找到右侧的AI侧栏设置图标，点击，在下拉列表里选择MCP，点击"添加 MCP server "，

![图片.png](http://test.11315.com/ueditorgroup/test/ueditor/jsp/upload/image/2025/04/23/1745373180132053045.png) 

这时会出现MCP市场，点击“手动配置”

![图片.png](http://test.11315.com/ueditorgroup/test/ueditor/jsp/upload/image/2025/04/23/1745373240128096761.png) 

3. 配置MCP，使用以下JSON配置：

其中WEREAD_COOKIE为你的微信读书cookie，填入你的实际值

```json
{
	"mcpServers": {
       "微信读书": {
         "command": "npx",
         "args": ["-y", "mcp-server-weread"],
         "env": {
           // 方式1：使用Cookie Cloud（推荐）
           "CC_URL": "https://cc.chenge.ink",  // Cookie Cloud的URL
           "CC_ID": "您的ID",                   // Cookie Cloud的ID
           "CC_PASSWORD": "您的密码"            // Cookie Cloud的密码
           
           // 或方式2：直接提供Cookie
           // "WEREAD_COOKIE": "您的微信读书Cookie"
         }
       }
	}
}
```

或者本地源代码安装的也可以直接调用js

```json
{
  "mcpServers": {
    "mcp-server-weread": {
      "command": "node",
      "args": [
        "F:/mcp/mcp-server-weread/build/index.js"
      ],
      "env": {
			// 方式1：使用Cookie Cloud（推荐）
           	"CC_URL": "https://cc.chenge.ink",  // Cookie Cloud的URL
           	"CC_ID": "您的ID",                   // Cookie Cloud的ID
           	"CC_PASSWORD": "您的密码"            // Cookie Cloud的密码
           
           	// 或方式2：直接提供Cookie
           	// "WEREAD_COOKIE": "您的微信读书Cookie"
      }
    }
  }
}
```

## CookieCloud 配置说明
为了解决 Cookie 频繁过期，需要重新获取并更新环境变量的问题。本项目支持 [CookieCloud](https://github.com/easychen/CookieCloud) 服务来自动同步和更新 Cookie。CookieCloud 是一个开源的跨浏览器 Cookie 同步工具，支持自建服务器。

### 配置步骤
安装浏览器插件
Edge商店：[CookieCloud for Edge](https://microsoftedge.microsoft.com/addons/detail/cookiecloud/bffenpfpjikaeocaihdonmgnjjdpjkeo)
Chrome商店：[CookieCloud for Chrome](https://chromewebstore.google.com/detail/cookiecloud/ffjiejobkoibkjlhjnlgmcnnigeelbdl)

### 配置 CookieCloud 插件
1、先登录 微信读书网页版 https://weread.qq.com ,确保生成有效 Cookie

2、安装CookieCloud浏览器插件

- Edge商店：[CookieCloud for Edge](https://microsoftedge.microsoft.com/addons/detail/cookiecloud/bffenpfpjikaeocaihdonmgnjjdpjkeo)

- Chrome商店：[CookieCloud for Chrome](https://chromewebstore.google.com/detail/cookiecloud/ffjiejobkoibkjlhjnlgmcnnigeelbdl)

![图片.png](http://test.11315.com/ueditorgroup/test/ueditor/jsp/upload/image/2025/05/09/1746770992206064310.png)

3、配置CookieCloud 插件

1. 服务器地址：使用插件作者自建的服务器 https://cc.chenge.ink 或填入自建服务器地址

2. 点击"自动生成密码"

3. 同步域名关键词中填入"weread"

4. 【可选】配置 Cookie 保活

5. 点击"保存"，然后点击"手动同步"确保配置生效

6. 下图为示例流程，完成配置后复制并保存 服务器地址、用户UUID、加密密码 三个字段，后续配置要用到。


如果需要插件自动保活，可以在保活中填入 https://weread.qq.com，插件会自动刷新 Cookie

 ![image.png](http://test.11315.com/ueditorgroup/test/ueditor/jsp/upload/image/2025/05/09/1746771539733087679.png)



## 使用示例
以下是一些与LLM对话的示例：

**获取书架信息**
```
用户: 帮我查看我的微信读书书架
LLM: 我将获取您的微信读书书架信息。
[LLM调用get_bookshelf工具]
我从您的微信读书书架获取到了208本书籍。以下是部分书籍：
1. 《隐藏的自我》- 大卫·伊格曼
2. 《思考，快与慢》- 丹尼尔·卡尼曼
3. 《人类简史》- 尤瓦尔·赫拉利
...
```

**搜索特定书籍**
```
用户: 帮我找关于心理学的书
LLM: 我将搜索您书架上与心理学相关的书籍。
[LLM调用search_books工具，参数为keyword="心理学"]
在您的书架上，我找到了3本与心理学相关的书籍：
1. 《思考，快与慢》- 丹尼尔·卡尼曼（进度：75%）
2. 《乌合之众》- 古斯塔夫·勒庞（进度：50%）
3. 《心理学与生活》- 理查德·格里格（进度：30%）
您想了解哪一本书的更多信息？
```

**获取笔记和划线**
```
用户: 帮我整理《思考，快与慢》这本书的笔记
LLM: 我将获取《思考，快与慢》的笔记和划线。
[LLM调用search_books工具，找到书籍ID]
[LLM调用get_book_notes_and_highlights工具]
以下是您在《思考，快与慢》中的笔记和划线（按章节组织）：

第一章：系统1和系统2
- 划线：「系统1的运行是无意识且快速的，不怎么费脑力，没有感觉，完全处于自主控制状态。」
- 您的笔记：「系统1负责直觉和快速判断，系统2负责缓慢的理性思考。」

第三章：锚定效应
- 划线：「锚定效应指的是在不确定情境下进行数字估计时，会过度受到事先接触的不相干数字的影响。」
...
```



