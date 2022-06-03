<template>
    <header class="header">
        <h1>Hello ! My Work</h1>
        <div>
            <i v-if="propIsLogin">{{this.propUser.displayName}}</i>
        </div>
        
    </header>
</template>

<script>
    export default { 
        name:'Header',
        props:{
            propIsLogin:Boolean,
            propUser:Object
        },
        methods:{

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
    header {
        padding: 20px 10px 0;
        width: 100%;
        box-sizing: border-box;
        display: flex; align-items: center; justify-content: space-between;
        h1 {
            font-size:16px;
            color:#333;
        }
    }
</style>
