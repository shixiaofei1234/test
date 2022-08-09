module.exports = [
  {
    type: 'input',
    name: 'pageName',
    message: '请输入页面名称: ',
    validate(value) {
      const reg = /^[a-z]{1,30}$/
      if (!reg.test(value)) return '请使用小驼峰命名'
      if (!value.length) return '页面名称不能为空！'
      return true
    }
  },
]