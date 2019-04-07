import WebConsole from '@whinc/web-console'
import myPlugin from '../src/index'

new WebConsole({
  activeTab: 'network',
  panelVisible: true,
  plugins: [myPlugin]
})