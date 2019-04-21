import WebConsole from '@whinc/web-console'
import TimePlugin from '../src/TimePlugin'

const id = 'Time'
WebConsole.use(TimePlugin, {id: id})

new WebConsole({
  activeTab: id,
  panelVisible: true
})