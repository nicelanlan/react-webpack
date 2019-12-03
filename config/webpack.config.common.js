const {
  PATH
} = require('./webpack.base');
const fs = require('fs');

// remove old build file
const deleteDistFolder = (path = PATH.BUILD) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        deleteDistFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    // if u want to remove this folder
    // fs.rmdirSync(path);
  }
}

const CONFIG = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [PATH.NODE],
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports={
  CONFIG,
  deleteDistFolder,
}