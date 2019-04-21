import TimePanel from './TimePanel'

export default function (WebConsole, options) {
  options = options || {}
  return new WebConsole.Plugin({
    id: options.id || 'Time',
    name: options.name || 'Time',
    component: TimePanel,
    settings: [
      {
        type: "checkbox",
        name: "showYear",
        value: false,
        desc: "Show YYYYMMDD"
      }
    ]
  })
}