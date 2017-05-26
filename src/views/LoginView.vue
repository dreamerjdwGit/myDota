<template>
  <div class="container-fluid loginContainer">
    <div class="login-header">
      <h1>登录MyDota</h1>
    </div>
    <form class="login-form form-horizontal">
      <div class="form-group">
        <div class="col-xs-12">
          <input v-model="userID" type="text" class="form-control" name="userID" placeholder="账号">
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <input v-model="userPassword" type="password" class="form-control" name="userPassword" placeholder="密码">
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <button @click="onSubmit" class="btn btn-info btn-login" :disabled="isDisabled">{{loginState}}</button>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <button class="btn btn-success btn-login">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-view',
  data () {
    return {
      userID: null,
      userPassword: null,
      loginState: '登录',
      isDisabled: false
    }
  },
  methods: {
    beforeSubmit: function () {
      this.loginState = '正在登录...';
      this.isDisabled = true;
    },
    onSubmit: function () {
      this.beforeSubmit();

      this.$nextTick(function(){
        if(this.userID === 'dreamerjdw' && this.userPassword === "123") {
          this.$router.push({ name: 'SummaryView' })
        }
      });

      // this.$store.dispatch({
      //   type: 'login',
      //   userID: this.userID,
      //   userPassword: this.userPassword
      // }).then(res => {
      //   // Success handle
      //   this.onSuccess(res)
      // }, err => {
      //   // Error handle
      //   this.onError(err)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label {
    font-size: 2rem;
  }
  .loginContainer {
    margin: 0 auto;
    text-align: center;
  }
  .loginContainer h1 {
    height: 4.5rem;
    line-height: 4.5rem;
    font-family: "Times New Roman",Georgia,Serif;
    font-weight: bold;
  }
  .login-header {
    border-bottom: 0.1rem solid grey;
  }
  .login-form {
    margin-top: 3rem;
    padding: 0 2rem;
  }
  button,input {
    width: 100%;
    height: 4rem;
    font-size: 2rem;
  }
</style>
