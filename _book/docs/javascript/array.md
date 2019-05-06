# 数组

[toc]
### 列表单击高亮
> 实现思路：借用中间变量
> > 概述：点击元素后，传递当前元素（或元素某个属性），将当前元素（或元素某个属性）赋给中间变量，在要加class的元素上（使用vue-class表达式）判断当前元素（或元素某个属性）是否等于中间变量
```html
// html
<el-card shadow="never" class="card-list">
  <div slot="header">
    <h2>单击高亮</h2>
  </div>
  <template v-for="item in dataList1">
    <el-row
      :key="item.id"
      type="flex"
      justify="space-between"
      class="card-item"
      :class="{ 'active-item': item.id == actvieItem}"
      @click.native="handleItem1Click(item)"
      >
        <div>
          {{item.title}}
        </div>
        <time>{{ item.date }}</time>
      </el-row>
    </template>
</el-card>
```

```js
// js
data() {
  return {
    dataList1: [{ id: 1001, title: '点我会有高亮效果...', date: new Date() }]
    actvieItem: ''   // 中间变量
  }
}
methods: {
  handleItem1Click(item){
    this.actvieItem = item.id  // 当前元素赋给中间变量
  }
}
```

```css
// css
.card-list .active-item {
  background: #ddd;
}
```
### 列表单击高亮/取消(添加/删除)
> 实现思路：判断当前对象属性值true/false，使用filter方法进行过滤
> >  概述：使用map遍历向当前数据中添加属性，点击元素后，传递当前对象，对当前元素中新增的属性进行取反，在class中或绑定属性中判断该元素属性
```html
// html
<el-card shadow="never" class="card-sort">
  <div slot="header">
    <h2>单击高亮取消</h2>
  </div>
  <template v-for="(item,index) in dataList2">
    <el-tag :key="index" @click.native="handleTagClick(item)" :type="item.actived ? 'danger':''">
        {{item.tag}}
    </el-tag>
  </template>
  <h3>已选：</h3>
  <template v-for="item in selectedDataList2">
    <el-tag :key="item.id" type="success" closable @close="handleDeleteTag(item)">{{item.tag}}</el-tag>
  </template>
</el-card>
```

```js
// js
data() {
  return {
    dataList2: [ {id: 1001, tag: '研发1部' }
              , {id: 1002, tag: '研发2部' }]
    selectedDataList2: []
  }
},
created() {
  
},
methods: {
  getDataList(){
    // this.dataList2 = this.dataList2.map( ({ actived   , ...other }) => ({ ...other, actived : actived || false }))
    this.dataList2 = this.dataList2.map( ({ actived , ...other }) => {
      return { ...other, actived : actived || false }
    })
  }
  handleTagClick(obj){
    obj.actived = !obj.actived
    if(obj.actived){
      this.selectedDataList2.push(obj)
    }else{
      this.selectedDataList2 = this.selectedDataList2.filter( item => item.actived === true)
    }
  },
  handleDeleteTag(obj){
    obj.actived = false
    this.selectedDataList2 = this.selectedDataList2.filter( item => item.id != obj.id)
  }
}
```

### 数组操作
> ```json
> let arr = [ 
>   { "tag": "研发1部", "project": "mosaic", "finish": true },
>   { "tag": "研发2部", "project": "appFactory", "finish": false } 
> ]
> ```

#### `find()`: 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
> 根据项目名称为mosaic在数组中找到当前对象，注意：就算有多个项目名称相同的只会返回找到的第一个元素
> ```js 
>  arr.find( item => item.project === 'mosaic' )   // { "tag": "研发1部", "project": "mosaic" }
>```

#### `findIndex()`: 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
> 查找项目名称为appFactory在数组中的位置
> ```js 
>  arr.findIndex( item => item.project === 'appFactory' )   // 1
>```

#### `every()`:  测试数组的所有元素是否都通过了指定函数的测试
> 所有部门任务是否全部完成，若全部完成，则返回true，否则返回false，此方法可以灵活运用
>```js 
>  arr.every( item => item.project === true )   // false
>```

#### `some()`: 方法测试数组中的某些元素是否通过由提供的函数实现的测试
> 所有部门中是否有部门完成任务，若有，则返回true，否则返回false，此方法可以灵活运用
> ```js 
>  arr.some( item => item.finish === true )   // true
>```

#### `map()`: 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
> 从数组中拿到所有部门名称集合->根据条件返回一个新的数组，此方法可以灵活运用
>```js 
>  arr.map( item => item.tag )   // ["研发1部","研发2部"]
>```

#### `filter()`: 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
> 从数组总过滤掉非研发一部的对象，此方法可以灵活运用
>```js 
>  arr.filter( item => item.tag !== '研发1部' )   // [{ "tag": "研发2部", "project": "appFactory", "finish": false }]
>```





[toc]