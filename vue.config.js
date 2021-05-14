module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker")
      .loader("worker-loader")
      .options({
        inline: "fallback",
      });
    // 解决 "window is undefined", 这是因为 worker 线程中不存在 window 对象, 要用 this 代替: (不过我的项目中配置了这个也不行, 用的 self 代替, 后面介绍)
    // config.output.globalObject('this')
  },
};
