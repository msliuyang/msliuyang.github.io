[TOC]

##编写技术文档—markdown的使用

<!-- 脚注[^1]
[^1]: 脚注 -->

[^1]: markdown简介
[^2]: markdown语法
[^3]: vscode工具编辑预览markdown

### markdown简介[^1]
>Markdown 是一个 Web 上使用的文本到HTML的转换工具，可以通过简单、易读易写的文本格式生成结构化的HTML文档。
&nbsp;      
>markdown &emsp; 的目标是实现「易读易写」



### markdown语法[^2]
  - 标题（#）共6级
  - 列表 （* - + 无序 ）(1.有序)
  - 引用（>）
  - 内联代码 `code`
  - 代码区块（```js{.line-numbers}      ```）
  - 分隔线（---  *** ___）
  - 换行缩进  &nbsp;&emsp;
  - 链接 [http://www.baidu.com](百度)    ctrl+l
  - 强调（**粗体**）（_斜体_）（~~删除线~~） <u>下划线
  - 脚注
  - 图片 
  ![@测试图片 {100}](./test-images/aa.png "测试图片")
<!-- <img src="./test-images/aa.png" width="25%" height="25%"  align=center /> -->
  - 待办
    - [x] 表格设计
    - [ ] 表单设计
  - 表格

Column A | Column B | Column C
---------|:----------:|---------:
 A1 | B1 | C1
 A2 | B2 | C2
 A3 | B3 | C3


  - 流程图
```flow
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 判断确认？
  
st->op->cond
cond(yes)->e
cond(no)->op
```

```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
**[vega-lite](https://vega.github.io/vega-lite/examples/)** 
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "description": "A simple bar chart with embedded data.",
  "data": {
    "values": [
      {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
      {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
}
```

**文件目录结构  tree命令**
```js
D:.
│  浙江省财政厅需求文档格式要求.md
│
└─2018年
    │  .gitkeep
    │
    ├─10月
    │      .gitkeep
    │
    ├─8月
    │      .gitkeep
    │
    └─9月
        │  .gitkeep
        │  jsplumb.vue
        │  markdown培训.md
        │  shencq-test.md
        │  test.md
        │  【技术支持部】_刘洋_jsplumb【流程设计器】使用笔记.md
        │  【研发三部】_皮李斯洋_flyway数据库版本管理工具.md
        │
        └─test-images
                .gitkeep
                aa.png
                IMG_20150115_125855 (2).jpg
                IMG_20150125_173749.jpg


```


### vscode工具编辑预览markdown[^3]
    - Markdown Preview Enhanced



[在线mk](https://markable.in/)

[在线mk](https://dillinger.io/)

[mkpad](http://www.markdownpad.com/)






_single underscores_
__double underscores__
*single asterisks*
**double asterisks**

Markable.in
Dillinger.io





---
主题：编写技术文档—markdown的使用
1.培训主要目的
  快速熟悉markdown基本语法
  使用markdown编写技术文档

2.技术简介
    markdown简介
    markdown基本语法
      - 标题
      - 列表
      - 引用
      - 代码区块
      - 分隔线
      - 段落和换行
      - 链接
      - 强调
      - 代码
      - 图片
      - ...

3.使用vscode工具编辑预览markdown



主题：流程设计器【jsplumb】插件的使用
1.培训主要目的
  了解流程设计器【jsplumb】插件的使用
  英文网站下如何高效查找api以及根据api怎么快速上手实现案例
  避免在使用过程中遇到的一些坑


2.技术简介
  jsplumb安装
  jsplumb使用
    - 导入
    - 初始化
    - 实例

3.jsplumb重点属性讲解
    - Anchor：锚点
    - Connector：连接器
    - Endpoint：端点
    - overlays：箭头

[http://example.com/](http://example.com/)


