# 电子表格

### Handsontable简介

>Handsontable是一个用JavaScript编写的电子表格组件，兼容所有现代浏览器和IE9+。
>官网 <https://docs.handsontable.com>

####Vue中使用
######1.安装模块包
>npm install handsontable --save
 npm install @handsontable/vue --save

######2.引入
>import Vue from "vue"
 import HotTable from "@handsontable/vue"
######3.汉化
>import 'handsontable/languages/zh-CN';
language: 'zh-CN'

######4.基本用法
```javascript
<template>
  <div id="hot-preview" >
    <HotTable :settings="settings" ref="testHot"></HotTable>
  </div>
</template>

<script>
  import HotTable from '@handsontable/vue';
  import Vue from 'vue';
  import 'handsontable/languages/zh-CN';

  export default {
    data: {
      settings: {
        data: [
          ["", "Ford", "Volvo", "Toyota", "Honda"],
          ["2016", 10, 11, 12, 13],
          ["2017", 20, 11, 14, 13],
          ["2018", 30, 15, 12, 13]
        ],
        language: 'zh-CN',
        colHeaders: true,
        rowHeaders: true,
      }
    },
    components: {
      'hottable': Handsontable.vue.HotTable
    }，
    methods: {
         saveData (){
           var examData = this.$refs.testHot.table.getData(); //这里要注意，如果使用this.settings.data 保存表格数据，拖拽完以后数据的顺序将不会更新，因此使用 this.$refs.testHot.table.getData(); 来获取数据，获取的数据格式为二维数组。
            console.log(examData);
         }
  }
</script>

<style src="../node_modules/handsontable-pro/dist/handsontable.full.css"></style>
<style>
  #hot-preview {
    width: 600px;
    height: 400px;
    overflow: hidden;
  }
</style>
```
显示结果
![图例一](./img/yy_Handsontable.png)

####常用配置
```javascript
data: {
  settings: {
    data:[[],[],[]],              //表格数据
    height:400,                   //表格高度
    width:300,                    //表格宽度
    rowHeaders: true,             //显示行号
    colHeaders:[] / true,         //表头自定义文字/显示字母
    columns:[{
      type:'dropdown',
      source: ['文本', '数字', '金额', '日期', '时间', '单文件', '多文件']
    },{}],                       //每列配置设置
    colWidths：100 / [],          //每列宽度设置/用数组单独设置每列宽度
    rowHeights: 23,               //每行高度设置
    fixedRowsTop：2,              //固定前两行
    fixedColumnsLeft：3,          //固定前三列
    contextMenu：true,            //启用右键菜单
    manualColumnFreeze：true,     //在右键菜单中选择固定某列
    manualRowResize:true,         //手动调整行高
    manualColumnResize:true,      //手动调整列宽
    manualColumnMove: true,       //手动调整列的位置  
    manualRowMove: true,          //手动调整行的位置
    stretchH："all" /last /none,  //自动拉伸列宽填满表格的宽度
    fillHandle:true, false, "horizontal", "vertical" , 
    fillHandle: {
      direction: 'vertical',
      autoInsertRow: true                                
    },                           //点击加号可自动填充，自动添加行
    mergeCells：true/[{row: 1, col: 1, rowspan: 2, colspan: 2}] //合并单元格，可在右键菜单选项中合并
    minSpareRows：1,             //最少空行数,填完行会自动增加一行
    className：'htLeft',         //水平：htLeft，htCenter，htRight，htJustify，垂直：htTop，htMiddle，htBottom
    cell: [
      {row: 0, col: 0, className: "htRight"},
      {row: 1, col: 1, className: "htLeft htMiddle"},
      {row: 3, col: 4, className: "htLeft htBottom"}
    ],                           //具体单元格设置   
    readOnly: true,              //只读
    editor:false,                //禁止编辑修改值（其他可以修改），但是可以通过fillHandle操作修改值
    columnSorting: true,         //列排序    
    currentRowClassName: 'currentRow', //突出选择行
    currentColClassName: 'currentCol', //突出选择列      
  }
}
```

####插件方法
1. **afterChange** (changes: Array, source: String)：1个或多个单元格的值被改变后调用
    changes：是一个2维数组包含row，prop，oldVal，newVal4个属性。
    source：其值为一个字符串，值可以为：alter，empty，populateFromArray，loadData，autofill，paste
1. **beforeChange** (changes: Array, source: String)：开始改变单元格前被调用
    changes：是一个2维数组，包括[row，prop，oldVal，newVal]这4个公共属性列
    source是被改变的资源的名称
1. **afterCellMetaReset** ()：重置单元格后调用
1. **afterColumnMove** (oldIndex: Number, newIndex: Number)：列顺序被移动后触发
1. **afterRowMove** (oldIndex: Number, newIndex: Number)：行被移动后调用
1. **afterRowResize** (col: Number, size: Number)：行高改变后调用
1. **afterRemoveCol** (index: Number, amount: Number)：当一列或多列被移动后调用
    其中，index为开始移动的列的索引，amount为移动的列的总数量
1. **afterRemoveRow** (index: Number, amount: Number)：当一行或多行被移动后调用
   其中，index为被移动的行的索引，amount为被移动的行的总数量
1. **beforeRemoveCol** (index: Number, amount: Number)：一列或多列被移动前调用
1. **beforeRemoveRow** (index: Number, amount: Number)：一行或多行被移动前被调用
1. **afterColumnSort** (column: Number, order: Boolean)：列排序后调用
1. **beforeColumnSort** (column: Number, order: Boolean)：列排序前被调用
    order：值为true时为升序，false时为降序
1. **afterCreateCol** (index: Number, amount: Number)：添加行后被调用
    index：新列的索引
    amount：新列的数目
1. **afterCreateRow** (index: Number, amount: Number)：添加行后被调用
    index:新行的索引
    amount：新行的数目
1. **afterGetCellMeta** (row: Number, col: Number, cellProperties: Object)：获取单元格的配置信息后被调用
1. **beforeGetCellMeta** (row: Number, col: Number, cellProperties: Object)：获取单元格属性前被调用
1. **afterSetCellMeta**(row: Number, col: Number, key: String, value: *)：单元格样式被改变后调用
其中，cellProperties是一个单元格的渲染对象，key是改变样式的方式，例如合并单元格（merge），水平对齐（align）等。
1. **afterGetColHeader** (col: Number, TH: DOM Node)：获取列头信息后被调用，TH是行头节点
1. **afterGetColWidth** (col: Number, response: Object)：获取列宽后被调用
1. **afterColumnResize** (col: Number, size: Number)：列宽度被手动修改后调用
1. **afterCopyLimit** (s-electedRowsCount: Number, s-electedColsCount: Number,copyRowsLimit: Number, copyColsLimit: Number)
    当 copyRowsLimit 或者 copyColumnsLimit实现时被调用
1. **afterDestroy** ()：销毁Handsontable实例后被调用
1. **afterInit** ()：Handsontable实例被初始化后调用
1. **beforeInit** ()：Handsontable实例被初始化前调用
1. **beforeInitWalkontable**()：Walkontable实例被初始化前调用
1. **afterLoadData** ()：新的数据被加载到数据资源后被调用
1. **afterOnCellCornerMouseDown** (event)：鼠标点击单元格边角后被调用
1. **afterOnCellMouseDown** (event: Object, coords: Object, TD: Object)：点击单元格或行头/列头后被调用
   注意：点击行头或列头后索引的坐标为负数。例如点击列头单元格(0,0)，则调用后的坐标为(0,-1)。
1. **afterOnCellMouseOver** (event: Object, coords: Object, TD: Object)：鼠标停悬在单元格或行头/列头后调用
   注意：点击行头或列头后索引的坐标为负数。例如点击行头单元格(0,0)，则调用后的坐标为(0,-1)。
1. **afterRender** (isForced: Boolean)：渲染表格后被调用
     isForced：当其值为true表示是通过改变配置或数据引起的渲染，当值为false时表示通过滚动或移动、选中引起的渲染
1. **beforeRender** (isForced: Boolean)：渲染前被调用
1. **afterRendere**r (TD: Object, row: Number, col: Number, prop: String, value: String, cellProperties: Object)：手动渲染后调用
1. **beforeChangeRender** ()：渲染被改变前调用
1. **afterDes-elect** ()：当前单元格被取消选中时调用
1. **afterS-election** (r: Number, c: Number, r2: Number, c2: Number)：当一个或多个单元格被选中后调用
   其中，r：选中的单元格起始行，r2：选中单元格的终止行
             c：选中的单元格的起始列，c2：选中的单元格的终止列
1. **afterS-electionByProp** (r: Number, p: String, r2: Number, p2: String)：通过属性名选中单元格后调用afterS-electionEnd (r: Number, c: Number, r2: Number, c2: Number)：选中单元格鼠标抬起后调用

1. **afterS-electionEndByProp** (r: Number, p: String, r2: Number, p2: String)：通过属性选中单元格鼠标抬起后调用
1. **afterUpdateSettings** ()：配置参数配修改后调用
1. **afterValidate** (isValid: Boolean, value: Mixed, row: Number, prop: String,source: String)
   当有验证器的时候调用验证器时被调用，验证结果作为第一个参数。
1. **beforeValidate** (value: Mixed, row: Number, prop: String, source: String)：验证器被调用前调用该事件
1. **beforeAutofill** (start: Object, end: Object, data: Array)：开始自动填充前调动
   start：是一个第一个填充的单元格对象，例如:{row:4,col:3}
   end：是最后一个填充的单元格对象，例如：{row:7,col:5}
   data:是一个2维数组
1. **beforeKeyDown** (event: Object)：按键按下前被调用
1. **beforeSet** (var: Object)：单个配置值被设置前调用
1. **beforeSetRangeEnd**(coords: Array)：设置范围结束前被调用
   coords：是范围坐标
1. **modifyCol**(col: Number)：列被修改时调用
1. **modifyRow**( row: Number)：行被修改时调用
1. **modifyColWidth** (width: Number, col: Number)：列宽被修改时调用
1. **modifyRowHeight** (height: Number, row: Number)：行高被修改时调用



### 如何调用方法
```html
<div id="hot-preview">
  <HotTable ref="tableHot" :settings="settings"></HotTable>
</div>
```
```js
this.$refs.tableHot.table.setDataAtCell(0, 0, '33')
```
### 如何使用钩子
```js
settings: {
  data: [],
  colHeaders: ['id', '属性名', '中文名'],
  columnSorting: true,
  columns: [],
 ...
  afterInit () { // 钩子
    console.info("钩子初始化后")
  },
  afterLoadData () {
    console.info("重新加载了数据后")
  },
}
```
### 如何渲染
直接在单元格定义renderer函数即可
```js
...
fieldTypeOptions: { 'text': '文本', 'number': '数字', 'money': '金额', 'time': '时间', 'file': '文件' },
...
{
  data: 'filedType', width: 80,
  editor: 'select',
  selectOptions: { 'text': '文本', 'number': '数字', 'money': '金额', 'time': '时间', 'file': '文件' },
  renderer: (instance, td, row, col, prop, value, cellProperties) => {
    while (td.firstChild) {
    td.removeChild(td.firstChild);
    }
    if (value) {
      let textNode = document.createTextNode(this.fieldTypeOptions[value])
      td.appendChild(textNode)
    }
  },
}
```
### 如何校验
直接在单元格定义validator函数

```js
  {
    data: 'name',
    validator: this.checkUnque
  },

  ...方法

    checkUnque (value, callback) {
      if (!value) {
        callback(true)
      }
      let colDatas = this.$refs.tableHot.table.getDataAtCol(1) // 取得是第一列,验证唯一
      console.info("name列----value", colDatas, value)
      let ret = true
      for (let item of colDatas) {
        if (item == value) {
          ret = false
          break
        }
      }
      if (ret) {
        callback(true)
      }else{
        callback(false)
      }
    }
```

### 常用方法
1. **alter**(action, index, amount, source, keepEmptyRows)
> 插入或删除行/列
  使用给定的行在行上方插入新行index。如果index是null或undefined, 则在最后一行之后添加新行。
  var hot = this.$refs.tableHot.table  // 后面的示例该句都省略
  hot.alter('insert_row', 1);
  &nbsp;
  删除给定的行index
  hot.alter('remove_row', 0);

###### 参数：
名称 |类型 | 描述
:-------|:--|:---------
 action | 串 |可能的值："insert_row", "insert_col", "remove_row", "remove_col"|
 index  | 数 |行/列的索引
 amount | 数 |可选。要添加或删除的行/列数量
 source | 串 |可选。来源指标
 keepEmptyRows | 布尔 |可选。用来防止删除空行的标志

1. **clear**()
清除表格中的数据,不改变行数
1. **<font color="red">colToProp**(Number col)</font>
返回与给定列索引对应的属性名称。如果数据源是数组数组, 则返回列索引。

> 返回行或列的数量
1. **countEmptyCols**(Boolean ending)
返回空列数。ending如果true, 将仅计算数据源行末尾的空列。
1. **countEmptyRows**(Boolean ending)
返回空行数。如果可选的结束参数是true, 则返回表格底部的空行数。
1. **<font color="red">countCols**()</font>
返回网格中的总列数
1. **<font color="red">countRows**()</font>
返回网格中的总行数
1. **countRenderedCols**()
返回渲染列的数量。如果表不可见, 则返回-1。
1. **countRenderedRows**()
返回渲染行的数量。如果表不可见, 则返回-1。
1. **countSourceCols**()
返回数据源中的总列数。(序号列也算在里面了)
1. **countSourceRows**()
返回数据源中的总行数。
1. **countVisibleCols**()
返回可见列的数量。如果表不可见, 则返回-1
1. **countVisibleRows**()
返回可见行数。如果表不可见, 则返回-1

> 待验证
1. **deselectCell**() 
取消选择网格上的当前单元格选择。
1. **destroyEditor**(Boolean revertOriginal)
销毁当前编辑器, 渲染并选择当前单元格。如果！= true, 则保存已编辑的数据。否则, 将恢复先前的值。
1. **emptySelectedCells**()
擦除表中已选择的单元格中的内容。
1. **getActiveEditor**()
返回活动的编辑器对象

> 返回单元格相关
1. **getCell**(Number row, Number col, Boolean topmost)
返回单元格的TD元素
1. **getCellEditor**(Number row, Number col)
通过提供的row和col参数返回单元格编辑器。返回Editor对象,如何用?
1. **getCellMeta**(Number row, Number col)
返回给定row和col坐标的单元属性对象。
1. **getCellMetaAtRow**(Number row)
返回单元格元数组的一行
1. **getCellRenderer**(Number row, Number col)
返回单元格渲染器函数。如何用?
1. **getCellValidator**(Number row, Number col)
返回验证器函数{function | RegExp | undefined} , 如何用?
1. **<font color="red">getColHeader**(Number col)</font>
返回列标题数组,col可选, 如果指定了列col , 它将返回给定列的标题作为字符串。
1. **getColWidth**(Number col)
返回请求列的宽度。
1. **getCoords**(elem)
返回单元格的坐标, 以HTML元素的形式提供。elem表示单元格的HTML元素。

> 得到数据
1. **getData**(r, c, r2, c2) 可选
返回当前数据对象,参数全部可选。返回包含数据的数组。
1. **getSourceData**(r, c, r2, c2) 可选
返回源数据对象
1. **getDataAtCell**(row, col)
返回： {String | Boolean | null}  单元格处的数据。
1. **getDataAtCol**(col)
返回： {Array} 列值数组。
1. **getDataAtProp**(String/Number prop)
返回： {Array} 列值数组。
1. **getDataAtRow**(Number row)
返回单行数据。
1. **getDataAtRowProp**(Number row, String prop)
返回：单元格值。
1. **getDataType**(r, c, r2, c2)
返回：{字符串} 细胞类型（当量：'mixed', 'text', 'numeric', 'autocomplete'）。
1. **getInstance**()
返回Handsontable实例。
1. **getRowHeader**(row) 可选
返回行标题值的数组。如果row给出了param , 则它将给定行的标题作为字符串返回。
1. **getSelected**()
返回： {Array。|未定义} 选择坐标的数组数组。
1. **getSelectedLast**()
返回作为数组应用于表的最后一个坐标[startRow, startCol, endRow, endCol]。
1. **getSettings**()
返回对象设置。
1. **getSourceDataAtCell**(row, col)
返回：单元格数据。
1. **getSourceDataAtCol**(col)
返回： {Array}  列的单元格值的数组。
1. **getSourceDataAtRow**(row)
返回： {Array | Object}  单行数据。
1. **getValue**()
返回： {*}  所选单元格的值。
1. **<font color="red">loadData**(data)</font>
重置网格中的所有单元格以包含数据阵列中的数据。


> 判断
1. **isEmptyCol**(col)
检查col参数声明的列中的所有单元格是否为空。
1. **isEmptyRow**(row)
检查row参数声明的行中的所有单元格是否为空。

1. **propToCol**(prop)
返回与给定属性对应的列索引
1. **removeCellMeta**(row, col, key)
从key提供的坐标row和col坐标的单元元对象中删除由参数定义的属性。
 
 > 选择
 1. **selectAll**()
选择整个表格。之前的选择将被覆盖。
 1. **selectCell**(row, column, endRow, endColumn, scrollToCell, changeListener)
选择指定的单元格row和col值或一系列单元格endRow, 以endCol。后面的4个参数可选。 如：hot.selectCell(0,1) 或 hot.selectCell(0, 'name')
 1. **selectColumns**(startColumn, endColumn)
选择指定的列。
hot.selectColumns(1)
hot.selectColumns('id')
hot.selectColumns(1, 4)
hot.selectColumns('id', 'last_name')
 1. **selectRows**(startRow, endRow)
选择指定的行。
hot.selectColumns(1)
hot.selectColumns('id')
hot.selectColumns(1, 4)
hot.selectColumns('id', 'last_name')

> 设置值
 1. **setCellMeta**(row, col, key, val)
 1. **setCellMetaObject**(row, col, prop)
将指定的属性prop对应的值, 赋值给指定行列的单元格
 1. **setDataAtCell**(row, col, value, source)
 或 **setDataAtRowProp**(row, prop, value, source)
为单元格设置新值, source 可选的,标识更改数组中将如何描述此更改的字符串（在onAfterChange或onBeforeChange回调中很有用）。
 1. **updateSettings**(settings, init)
如果需要在初始化后更改配置，请使用它。
hot.updateSettings({
   contextMenu: true,
   colHeaders: true,
   fixedRowsTop: 2
})

> 验证相关
 1. **validateCells**(callback)
 使用验证器函数验证所有单元格，并在完成后调用回调。callback可选的
回调函数。
 1. **validateColumns**(col, callback)
使用验证器函数验证列，完成后调用回调。参数都可选
 1. **validateRows**(row, callback)
使用验证器函数验证行，完成后调用回调。参数可选
