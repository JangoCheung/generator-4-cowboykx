'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

const workspace_files = {
  'react-antd-typescript': [
    'public/index.html',
    'src/index.less',
    'src/index.tsx',
    'gitignore',
    'package.json',
    'tsconfig.base.json',
    'tsconfig.json',
    'webpack.config.js',
    'bower.json'
  ],
  'electron-react-antd-typescript': [
    'build/icon.png',
    'configs/webpack.config.js',
    'icon/app_256x256.png',
    'src/browser/store/index.ts',
    'src/browser/index.tsx',
    'src/browser/index.less',
    'src/node/main.ts',
    'src/preload.ts',
    'index.html',
    'package.json',
    'tsconfig.base.json',
    'tsconfig.browser.json',
    'tsconfig.json',
    'tsconfig.node.json',
    'tsconfig.preload.json',
    'gitignore',
    'bower.json'
  ]
}

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the peachy ${chalk.red('generator-4-cowboykx')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'appType',
        message: 'project type',
        choices: [
          'react-antd-typescript',
          'electron-react-antd-typescript'
        ]
      },
      {
        type: 'text',
        name: 'appName',
        message: 'project name',
      },
      {
        type: 'text',
        name: 'description',
        message: 'project description',
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  _copy(appType) {
    const files = workspace_files[appType];

    files.forEach((filename) => {
      let _filename = filename;
      
      if (filename === 'gitignore') {
        _filename = '.gitignore';
      }
      let src = path.join(appType, filename);

      if (path.parse(filename).ext === 'png') {
        this.fs.copy(this.templatePath(src), this.destinationPath(_filename));
      } else {
        this.fs.copyTpl(this.templatePath(src), this.destinationPath(_filename), {...this.props});
      }

    });
  }

  writing() {
    this._copy(this.props.appType);
  }

  install() {
    this.installDependencies();
  }
};
