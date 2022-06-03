<template>
  <div id="app">
    <Header :key="HeaderKey" :prop-is-login="propIsLogin" :prop-user="propUser"></Header>
    <Login @userInfo="getUserInfo"></Login>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Header,
    Login
  },
  data(){
    return {
      propUser:{},
      propIsLogin:false,
      HeaderKey:0
    }
  },
  methods:{
    getUserInfo:function(userInfo){
      if(Object.keys(userInfo).length){
        this.propIsLogin=true;
        this.propUser=userInfo;
      }else{
        this.propisLogin=false;
      }
    },
    forceRerender:function(){
      this.HeaderKey += 1;
    }
  },
  watch:{
    propUser:function(){
        this.forceRerender();
    }
  },

  mounted:function(){
    // console.log('userInfo:::',this.userItem.user)

  }
}

</script>

