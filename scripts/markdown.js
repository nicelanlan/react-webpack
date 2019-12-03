const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const filePattern = '!(tree)/?(*.js)!(index).js';

glob(`stories/${filePattern}`, (err, files) => {
  if (!err) {
    files.forEach(file => {
      const { dir, name } = path.parse(file);
      const fileString = fs.readFileSync(file).toString();
      const codeString = '```jsx\n' + fileString + '\n```\n';
      const docDir = path.resolve(dir, 'doc');
      !fs.existsSync(docDir) && fs.mkdirSync(docDir);
      fs.writeFileSync(`${docDir}/${name}.md`, codeString);
    });
  } else {
    console.log(chalk.red(err));
  }
});
