<template>
<div class="pages-view">
  <header-bar></header-bar>
  <transition name="component-fade" mode="out-in">
  	<router-view></router-view>
  </transition>
</div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {
  name: 'pages-view',
  components: { HeaderBar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header-bar {
  color: #fff;
  margin: 0;
  height: 12.3rem;
  border: none;
}
.has-header {
  margin-top: 12.3rem;
  padding: 1rem;
  text-align: center;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: all 0.5s;
}
.component-fade-leave-active {
  opacity: 0;
  transform: translateX(200px);
}
.component-fade-enter{
  opacity: 0;
  transform: translateX(-200px);
}
</style>
