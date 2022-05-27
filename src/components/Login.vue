<template>
    <div class="loginForm">
        <button class="loginForm__button" v-on:click="login();">Google 계정으로 로그인</button>
        <button class="loginForm__button" v-on:click="logout();">로그아웃</button>
    </div>
</template>

<script>
    import { getAuth, GoogleAuthProvider,signInWithRedirect,onAuthStateChanged } from "firebase/auth";
    
    export default {
        name:'Login',
        created() { 
            this.create();
        },
        mounted:function(){

            // onAuthStateChanged(auth, (user) => {
            //     if (user) {
            //         const uid = user.uid;
            //         this.isLogin = true;
            //     } else {
            //         this.false = true;
            //     }
            //     console.log(this.isLogin);
            // });

        },
        methods:{
            create: function(){
                console.log('Login created')
            },
            login:function(){
                const provider = new GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                const auth = getAuth();

                signInWithRedirect(auth, provider);
            },

            logout:function(){

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