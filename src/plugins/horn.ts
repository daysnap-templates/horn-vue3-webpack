import { Locale } from '@daysnap/horn-ui'
import jssdk from '@daysnap/horn-jssdk'
import type { HornApi } from '@daysnap/horn-jssdk'

const locale = window.localStorage.getItem('$$LOCALE') || 'zh-CN'

Locale.use(locale)

const mock: typeof HornApi = (success: any) => {
  success({ code: 0, message: '成功', data: '' })
}

jssdk.defineConfig({
  mock: jssdk.canIUse() ? undefined : (mock as any)
})
