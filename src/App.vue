<template>
  <div id="app">
    <Header :key="HeaderKey" :prop-is-login="propIsLogin" :prop-user="propUser"></Header>
    <Login @userInfo="getUserInfo"></Login>
    <WorkList v-if="propIsLogin" :key="WorkListKey" :prop-is-login="propIsLogin" :prop-user="propUser"></WorkList>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import WorkList from './components/WorkList.vue';

export default {
  name: 'App',
  components: {
    Header,
    Login,
    WorkList
},
  data(){
    return {
      propUser:{},
      propIsLogin:false,
      HeaderKey:0,
      WorkListKey:0
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

