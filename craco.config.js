const path = require("path")
module.exports = {
  // webpack 配置
  webpack: {
    alias: {
      // 约定 使用@ 表示 src 文件路径
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/assets/styles")
    }
  },
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: [
            [
              "postcss-px-to-viewport-8-plugin",
              {
                viewportWidth: 375, // 设计稿的视口宽度
              },
            ],
          ],
        },
      },
    },
  },
}