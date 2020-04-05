'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

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
        initial: 1,
        choices: [
          'react-antd-typescript',
          'electron-react-antd-typescript'
        ]
      },
      {
        type: 'confirm',
        name: 'appName',
        message: 'project name',
      }
    ];

    return this.prompt(prompts).then(props => {
      console.log(props);
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('public/index.html'), this.destinationPath('public/index.html'));
    this.fs.copy(this.templatePath('src/index.less'), this.destinationPath('src/index.less'));
    this.fs.copy(this.templatePath('src/index.tsx'), this.destinationPath('src/index.tsx'));
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {appName: this.props.appName});
    this.fs.copy(this.templatePath('tsconfig.base.json'), this.destinationPath('tsconfig.base.json'));
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
  }

  install() {
    this.installDependencies();
  }
};
