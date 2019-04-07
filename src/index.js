import TimePlugin from './TimePlugin.vue'

export default {
  name: 'Time',
  component: TimePlugin,
  settings: [
    {
      type: "checkbox",
      name: "showYear",
      value: false,
      desc: "Show year-month-day"
    }
  ]
}