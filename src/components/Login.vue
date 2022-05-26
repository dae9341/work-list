<template>
    <div class="login">
        <button class="login__button -line" v-on:click="login();">로그인</button>
    </div>
</template>

<script>
    export default {
        name:'Login',
        created() { 
            this.create();
        },
        methods:{
            create: function(){
                console.log('Login created')
            },

            login:function(){
                console.log('login!!')
            }
        }
    }
</script>