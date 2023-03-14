module.exports = {
  // 配置 questions 相关 三种方式
  configureInquirer: async ({ inquirer, metalsmith, files }) => {
    const { author, name } = metalsmith.metadata()
    return inquirer.prompt([
      {
        type: 'string',
        name: 'name',
        message: '项目名称',
        default: name
      },
      {
        type: 'string',
        name: 'description',
        message: '项目描述',
        default: '一个简单的项目模板',
      },
      {
        type: 'string',
        name: 'author',
        message: "作者",
        default: author,
      },
    ])
  },
  // 配置过滤文件的方式 2种
  configureFilter: {
  },
  // 完成
  complete: (data, { chalk }) => {
    const message = `
# ${chalk.green('项目初始化成功!')}
# 可以执行:
  ${chalk.yellow(
      `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}npm install\n  npm run serve`
    )}
相关文档可以查看： https://github.com/daysnap-templates/vue3-horn-webpack
`
    console.log(message)
  }
}
