<template>
  <div class="hello-plugin">
    <div class="content">
      <h1>{{time}}</h1>
      <button @click="onClickTime()">{{running ? 'Stop' : 'Continue'}}</button>
    </div>
    <VFootBar :buttons="buttons"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      time: '',
      running: true,
      showYear: false
    }
  },
  computed: {
    buttons() {
      return [
        {
          text: "Hide",
          click: () => {
            this.hostProxy.hidePanel();
          }
        }
      ]
    }
  },
  beforeMount () {
    this.updateTime()
    setInterval(() => {
      if (this.running) {
        this.updateTime()
      }
    }, 100)
  },
  methods: {
    updateTime () {
      const d = new Date()
      const year = d.getFullYear()
      const month = d.getMonth()
      const day = d.getDate()
      const hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
      const mm = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
      const ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
      const sss = d.getMilliseconds() < 10 ? '00' + d.getMilliseconds() : (d.getMilliseconds() < 100 ? '0' + d.getMilliseconds() : d.getMilliseconds())
      this.time = (this.showYear ? `${year}-${month}-${day} ` : '') +  `${hh}:${mm}:${ss}.${sss}`
    },
    onClickTime() {
      this.running = !this.running
    },
    onWebConsoleReady: function(hostProxy) {
      this.hostProxy = hostProxy;
      this.updateTime()
      console.log('onWebConsoleReady')
    },
    onWebConsoleShow: function(hostProxy) {
      console.log("onWebConsoleShow");
    },
    onWebConsoleHide: function(hostProxy) {
      console.log("onWebConsoleHide");
    },
    onWebConsoleTabChanged: function(hostProxy, newVal, oldVal) {
      console.log("onWebConsoleTabChanged: %s -> %s", oldVal, newVal);
    },
    onWebConsoleSettingsLoaded: function(hostProxy, settings) {
      console.log("onWebConsoleSettingsLoaded: %o", settings);
      this.showYear = settings.showYear
      this.updateTime()
    },
    onWebConsoleSettingsChanged: function(hostProxy, settings) {
      console.log("onWebConsoleSettingsChanged: %o", settings);
      this.showYear = settings.showYear
      this.updateTime()
    }
  }
};
</script>

<style scoped>
.hello-plugin {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content button {
  padding: 5px 15px;
}
</style>
