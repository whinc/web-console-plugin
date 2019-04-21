
export default function (WebConsole, options) {
  return new WebConsole.Plugin({
    id: 'myPlugin',
    name: '我的插件',
    component: {
      render (h) {
        return h('h1', null, '这是我的第一个插件')
      },
      methods: {
        onWebConsoleShow() {
          console.log('Show')
        },
        onWebConsoleHide() {
          console.log('Hide')
        },
        onWebConsoleSettingsLoaded(hostProxy, settings) {
          console.log('加载设置：', settings)
        },
        onWebConsoleSettingsChanged(hostProxy, settings) {
          console.log('设置变化：', settings)
        }
      }
    },
    settings: [
      {
        type: 'checkbox',
        desc: '是否选中',
        name: 'isChecked',
        value: false
      }
    ]
  })
}