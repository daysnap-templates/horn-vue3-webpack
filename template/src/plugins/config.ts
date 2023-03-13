import { Plugin, AppConfig } from 'vue'
import { showToast, closeToast } from 'vant'
import { filterMessage } from '@/utils'
import { isEmpty } from '@daysnap/utils'

// 全局错误处理
const errorHandler: AppConfig['errorHandler'] = (err) => {
  // 清理弱提示
  closeToast()
  if (isEmpty(err)) {
    return
  }
  const message = filterMessage(err)
  if (!['', 'cancel'].includes(message)) {
    showToast(message)
  }
  if (process.env.NODE_ENV === 'development') {
    throw err
  }
}

export default {
  install(app) {
    app.config.errorHandler = errorHandler
  },
} as Plugin
