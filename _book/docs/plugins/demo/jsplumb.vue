<template>
  <div>
    <el-row type="flex" class="test-box" justify="space-between">
      <div id="testA" class="test testA">
        A
      </div>
      <div id="testB" class="test testB">
        B
      </div>
      <div id="testC" class="test testC">
        C
      </div>
      <div id="testD" class="test testD">
        D
      </div>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-button @click="handleAB">AB</el-button>
      <el-button @click="handleCD">CD</el-button>
      <el-button @click="handleEF">ef</el-button>
      <el-button @click="handleGH">gH</el-button>
    </el-row>
    <el-row type="flex" class="test-box" justify="space-between">
      <div id="testE" class="test testE">
        E
      </div>
      <div id="testF" class="test testF">
        F
      </div>
      <div id="testG" class="test testG">
        G
      </div>
      <div id="testH" class="test testH">
        H
      </div>
    </el-row>
  </div>
</template>

<script>
import 'jsplumb/dist/js/jsplumb.min.js'
import 'jsplumb/css/jsplumbtoolkit-defaults.css'

export default {
  data () {
    return {
      Ab: '',
      Cd: '',
      Ef: '',
      Gh: ''
    }
  },
  mounted () {
    this.$nextTick(_ => {
      this.getInit()
    })
  },
  methods: {
    handleAB () {
      this.Ab.connect({
        source: "testA",
        target: "testB"
      })
      jsPlumb.fire("jsPlumbDemoLoaded", this.Ab)
    },
    handleCD () {
      this.Cd.connect({
        source: "testC",
        target: "testD"
      })
      jsPlumb.fire("jsPlumbDemoLoaded", this.Cd)
    },
    handleEF () {
      this.Ef.connect({
        source: "testE",
        target: "testF"
      })
      jsPlumb.fire("jsPlumbDemoLoaded", this.Ef)
    },
    handleGH () {
      this.Gh.connect({
        source: "testG",
        target: "testH"
      })
      jsPlumb.fire("jsPlumbDemoLoaded", this.Gh)
    },
    getInit () {
      jsPlumb.ready(() => {
        this.Ab = jsPlumb.getInstance({
          PaintStyle: {
            gradient: {
              stops: [[0, "#0d78bc"], [1, "#558822"]]
            },
            stroke: "#558822",
            strokeWidth: 10,
            outlineStroke: "orange",
            outlineWidth: 5
          },
          Connector: ["Bezier", { curviness: 30 }],    // 连线
          Endpoint: ["Dot", { radius: 5 }],   // 端点
          EndpointStyle: { fill: "#000" },
          Anchor: [0.5, 0.5, 1, 1],    // 锚点
          Container: "canvas"
        })


        this.Cd = jsPlumb.getInstance({
          PaintStyle: {
            stroke: "#000",
            strokeWidth: 3,
          },
          Connector: ["Straight", { curviness: 10 }],    // 连线
          Endpoint: ["Rectangle", { radius: 1 }],   // 端点
          EndpointStyle: { fill: "green" },
          Anchor: [1, 1, 0, 0],    // 锚点
          Container: "canvas"
        })

        this.Ef = jsPlumb.getInstance({
          PaintStyle: {
            stroke: "blue",
            strokeWidth: 1,
          },
          Connector: ["Straight", { curviness: 20 }],    // 连线
          Endpoint: ["Blank", { radius: 2 }],   // 端点
          EndpointStyle: { fill: "yellow" },
          Anchor: [0.5, 0.5, 0.5, 0.5],    // 锚点
          Container: "canvas"
        })

        this.Gh = jsPlumb.getInstance({
          PaintStyle: {
            stroke: "orange",
            strokeWidth: 1,
          },
          Connector: ["Straight", { curviness: 30 }],    // 连线
          Endpoint: ["Dot", { radius: 3 }],   // 端点
          EndpointStyle: { fill: "red" },
          Anchor: [0, 0, 1, 1],    // 锚点
          Container: "canvas"
        })


      })
    }
  }
}
</script>

<style scoped>
.test-box .test {
  width: 100px;
  height: 50px;
  margin: 20px;
  border: 1px solid red;
}
</style>
