<template>
  <div class="user-info">
    <div class="user-icon"></div>
    <p>windleaf</p>
    <p>ID: 142042117</p>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin: 0;
    font-size: 1rem;
  }
  .user-info {
    text-align: center;
  }
  .user-icon {
    background: url('../../static/img/user.jpg') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
</style>
