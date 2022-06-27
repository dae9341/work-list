<template>
  <div id="app">
    <Header :key="HeaderKey" :prop-is-login="propIsLogin" :prop-user="propUser"></Header>
    <Login @userInfo="getUserInfo"></Login>
    
    <router-link to="/main"></router-link>
    <router-link to="/work"></router-link>
    <router-view></router-view>


    <Footer :prop-is-login="propIsLogin"></Footer>

    <!-- <WorkList v-if="propIsLogin"></WorkList> -->
    <!-- <WorkWrite></WorkWrite> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import WorkList from './components/WorkList.vue'
import WorkWrite from './components/WorkWrite.vue'
import Footer from './components/Footer.vue'
import Ui from './assets/js/ui.js'

export default {
  name: 'App',
  components: {
    Header,
    Login,
    WorkList,
    WorkWrite,
    Footer
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
  created:function(){
  },
  mounted:function(){
    // console.log('userInfo:::',this.userItem.user)
  }
}

</script>

