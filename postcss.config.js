/***
 * PostCSS的配置文件
 */
module.exports = {
    plugins: {
    //   autoprefixer: {
    //     // browsers 用来配置哟兼用的系统（浏览器）环境
    //     // 这个配置没有问题，但是写到这里会有控制台的编译警告
    //     // 因为VueCLI是通过项目中的 .browserlistrc文件来配置要兼容的环境信息的
    //     rowsers: ['Android >= 4.0', 'iOS >= 8'],
    //   },
      'postcss-pxtorem': {
        // 转换的根元素基准值
        rootValue: 37.5,
        // 需要转换的 CSS 属性，*就是所有属性都要转换
        propList: ['*'],
      },
    },
  }