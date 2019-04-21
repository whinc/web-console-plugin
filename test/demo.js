import WebConsole from '@whinc/web-console'
import myPlugin from '../src/index'

new WebConsole({
  activeTab: myPlugin.id,
  panelVisible: true,
  plugins: [myPlugin]
})