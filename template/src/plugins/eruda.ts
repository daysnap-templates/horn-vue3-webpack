import { insertScript } from '@daysnap/utils'

// 用于移动端 debug
// 先暂时关闭
if (process.env.NODE_ENV === 'development 1') {
  insertScript('//cdn.bootcss.com/eruda/1.5.2/eruda.min.js').then(() => {
    eruda.init()
  })
}
