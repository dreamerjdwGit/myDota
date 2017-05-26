<template>
  <div class="has-header">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'recent-view',
  data () {
    return {
      msg: '近期表现'
    }
  },
  created() {
    this.getRarity();
  },
  methods: {
    getRarity() {
  
      // axios.get("api/IEconDOTA2_570/GetItemIconPath/v1/?key=2B58A9C96FD73EC323CCFDA5383C4BBC&iconname='001'").then(
      axios.get('api/IEconDOTA2_205790/GetGameItems/v1/?key=2B58A9C96FD73EC323CCFDA5383C4BBC&id=0').then(
        response => { 
        console.log(response.data)
      }, response => {
        console.log('error')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
