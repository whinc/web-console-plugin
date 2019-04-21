import WebConsole from '@whinc/web-console'
import TimePlugin from '../src/TimePlugin'
import MyPlugin from '../src/MyPlugin'

const id = 'Time'
// WebConsole.use(TimePlugin, {id: id})
WebConsole.use(MyPlugin)

new WebConsole({
  activeTab: id,
  panelVisible: true
})