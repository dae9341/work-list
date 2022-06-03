<template>
    <div class="loginForm">
        <button v-if="!isLogin" class="loginForm__button -login" v-on:click="login();">Google 계정으로 로그인</button>
        <button v-if="isLogin" class="loginForm__button -logout" v-on:click="logout();">로그아웃</button>
    </div>
</template>

<script>
    import { getAuth,GoogleAuthProvider,signInWithRedirect,onAuthStateChanged, signOut } from "firebase/auth";
    
    export default {
        name:'Login',
        created() { 
        },
        mounted:function(){
            this.getUserInfo();
        },
        data(){
            return {
                isLogin:false
            }
        },
        methods:{
            getUserInfo: function(){ 
                const auth = getAuth();
                onAuthStateChanged(auth,(user)=>{
                    if(user){
                        console.log("로그인");
                        this.$emit('userInfo',user);
                        this.isLogin = true;
                    }else{
                        console.log("비로그인")
                        this.$emit('userInfo',user);
                        this.isLogin = false;
                    }
                })
            },
            login:function(){
                const auth = getAuth();
                const provider = new GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                signInWithRedirect(auth, provider);
            },

            logout:function(){
                const auth = getAuth();
                signOut(auth).then(()=>{
                    window.location.reload();
                }).catch((error)=>{

                })
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    .loginForm{   padding: 0 10px; box-sizing: border-box; width: 100%; height: 95vh; display: flex; align-items: center; justify-content: center; flex-direction: column;
        &__button {
            width: 300px;border-radius: 10px;border: 1px solid;height: 50px;
            margin-top: 10px;
            &:first-child{margin-top: 0;}
        }

    }

</style>