<template>
    <header class="header">
        <h1>MW</h1>
        <div class="header__myInfo">
            <i class="header__myInfo__firstName" v-if="propIsLogin">{{this.firstnameSet()}}</i>
            <button v-if="propIsLogin" class="header__myInfo__logout logout -default" v-on:click="logout();">
                로그<br/>아웃
                <!-- <img src="https://www.flaticon.com/free-icons/logout" alt="Logout icons created by Pixel perfect - Flaticon"> -->
            </button>
        </div>
        
    </header>
</template>

<script>
    import { getAuth, signOut } from "firebase/auth";
    export default { 
        name:'Header',
        props:{
            propIsLogin:Boolean,
            propUser:Object
        },
        methods:{
            firstnameSet:function(){
                return this.propUser.displayName.slice(1,3);
            },
            
            logout:function(){
                const auth = getAuth();
                signOut(auth).then(()=>{
                    window.location.reload();
                }).catch((error)=>{

                })
                
            }

        },
        mounted:function(){    
            console.log(this.propIsLogin, this.propUser) 
            console.log(this.propUser.displayName)  
        }, 
        updated:function(){
            // console.log(this.propIsLogin, this.propUser)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .header {
        position: sticky;
        top: 0;
        z-index: 999;
        background: #fff;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        display: flex; align-items: center; justify-content: space-between;
        h1 {
            font-size:16px;
            color:#333;
        }

        &__myInfo{
            display: flex; align-items: center; justify-content: center; gap:5px;

            &__firstName{  
                background: orange;  border-radius: 50%;display: block; width: 40px; height: 40px; 
                display: flex; align-items: center; justify-content: center; color: #fff;
            }
            &__logout{ border-radius: 50%;display: block; width: 40px; height: 40px; padding: 0;
                display: flex; align-items: center; justify-content: center; color: #fff;
            }
        }
    }
</style>
