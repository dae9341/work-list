<template>
  <div id="app">
    <Header :key="HeaderKey" :prop-is-login="propIsLogin" :prop-user="propUser"></Header>
    <Login @userInfo="getUserInfo"></Login>
    
    <!-- <router-link to="/main">main</router-link> -->
    <!-- <router-link to="/write">write</router-link> -->

    <router-view v-if="propIsLogin"></router-view>
    <router-view v-if="propIsLogin" name="footer"></router-view>


    <!-- <Footer :prop-is-login="propIsLogin" :prop-is-add-item="propIsAddItem"></Footer> -->

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
      propIsAddItem:true,
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
    },
    scrollDirectionFn:function(){
      var now,prev=0;
      var scrollDirection;
      document.addEventListener('scroll',function(){
          now = window.scrollY;
          
          if(now > prev){
              scrollDirection='down';
              document.body.classList.remove('up');
          }else{
              scrollDirection='up';
              document.body.classList.remove('down');
          }
          document.body.classList.add(scrollDirection);
          prev= now;
      });
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
    this.scrollDirectionFn();
  }
}

</script>

