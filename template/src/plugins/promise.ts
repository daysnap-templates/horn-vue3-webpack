import { filterMessage } from '@/utils'
import { isFunction } from '@daysnap/utils'
import { showConfirmDialog, showToast } from 'vant'

declare global {
  interface Promise<T> {
    toast(cb?: any): Promise<T>
    alert(cb?: any): Promise<T>
    null(): Promise<T>
  }
}

Promise.prototype.toast = async function (cb) {
  try {
    return await this
  } catch (err) {
    const message = filterMessage(err)

    if (isFunction(cb) && !cb(err, message)) {
      return
    }

    if (cb !== false && !['', 'cancel'].includes(message)) {
      showToast(message)
    }

    if (cb === false) {
      throw err
    }
  }
}

Promise.prototype.alert = async function () {
  try {
    return await this
  } catch (err) {
    const message = filterMessage(err)

    if (!['', 'cancel'].includes(message)) {
      await showConfirmDialog({
        title: '温馨提示',
        message,
        showCancelButton: false,
        confirmButtonText: '确认',
      })
    }

    throw ''
  }
}

Promise.prototype.null = async function () {
  try {
    return await this
  } catch (err) {
    return console.log(err)
  }
}
