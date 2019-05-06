# mock测试

[toc]
### [为什么使用mock](http://mockjs.com/)

### [如何使用mock](./demo/mock.html)   
    ps:可查看demo文件夹中案例


### [语法糖：模拟数据](http://mockjs.com/examples.html)
```js
Mock.mock({
  'rows|1-5': [{    // 随机1-5条数据
    "id|+1": 1,  // +1自增
    "increment": "@increment(100)",  // 自增
    "flag": "@id",  // 随机id
    "userName": '@cname',     //模拟中文名称
    "age|1-100": 100,          //模拟年龄(1-100)
    "color": "@color",    //模拟色值
    "date": '@now()',  //模拟时间
    "url": "@url()",     //模拟url
    "content": "@cparagraph(1,2)", //模拟文本1-2行
    "status": '@pick(["已审", "待审", "审批中"])'   // 随机展示一个
  }]
})
```


```js
// 设置请求时间  ---loading
Mock.setup({ timeout: 300-1000 });  
```

### 实战：
#### 1.没有参数
```js
import Mock from 'mockjs'

Mock.mock(url,template)
```
#### 2.有参数
```js
import Mock from 'mockjs'

// 应用分类
Mock.mock(/category\/getAppArrange/, (params) => {
  // params.body
})
```
### [mock参数详解](https://github.com/nuysoft/Mock/wiki/Mock.mock())


[api](http://mockjs.com/0.1/#)









