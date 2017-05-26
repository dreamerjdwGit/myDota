<template>
  <div class="has-header">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'summary-view',
  data () {
    return {
      msg: '综合表现'
    }
  },
  created() {
    this.getSummary();
  },
  methods: {
    getSummary() {
      // axios.get('api/IDOTA2Match_570/GetMatchDetails/V001?key=2B58A9C96FD73EC323CCFDA5383C4BBC&match_id=27110133').then(

      // axios.get('api/ISteamUser/GetPlayerSummaries/V0002?key=WTHJW726MJTBKPJSPG7MU9Q78DB9FI&steamids=76561198102307845').then(
      // axios.get('api/IDOTA2Match_570/GetMatchHistory/V001/?key=2B58A9C96FD73EC323CCFDA5383C4BBC&skill=3').then(
      axios.get('api/IEconDOTA2_570/GetHeroes/v1/?key=2B58A9C96FD73EC323CCFDA5383C4BBC').then(
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
