import WebConsole from '@whinc/web-console'
import TimePanel from './TimePanel'

export default new WebConsole.Plugin({
  id: 'Count',
  component: TimePanel,
  settings: [
    {
      type: "checkbox",
      name: "showYear",
      value: false,
      desc: "Show year-month-day"
    }
  ]
})