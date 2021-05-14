<template>
  <div id="app">
    <el-input type="number" v-model="num" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="calc">计算</el-button>
    <div>
      <span>计算结果：</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
import Worker from "./my.worker";
export default {
  name: "App",
  data() {
    return {
      num: 0,
      worker: null,
      result: 0,
    };
  },
  created() {
    console.log(1, Worker);
    this.worker = new Worker();
    console.log(2, this.worker);
    this.worker.onmessage = function (event) {
      console.log("event", event);
    };
  },
  methods: {
    calc() {
      // this.result=this.fib(this.num)
      this.worker.postMessage(this.num);
    },
    fib(n) {
      if (n <= 2) {
        return 1;
      } else {
        return this.fib(n - 1) + this.fib(n - 2);
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
