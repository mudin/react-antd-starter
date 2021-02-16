// const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');

const path = require('path');

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         // modifyVars: {
    //         //   // '@primary-color': '#1DA57A',
    //         //   hack: `true; @import "styles/theme.less";`
    //         // },
    //         javascriptEnabled: true
    //       }
    //     }
    //   }
    // },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: pathResolve('src/styles/theme.less')
      }
    }
  ]
  // webpack: {
  //   alias: {
  //     '@': pathResolve('src')
  //   }
  // },
  // babel: {
  // plugins: [
  // [
  // 'import',
  // {
  //   libraryName: 'antd',
  //   style: true // or 'css'
  // }
  // ]
  // ]
  // }
};
