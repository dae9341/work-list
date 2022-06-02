<template>
    <header class="header">
        <h1>Hello ! My Work</h1>
        <div>
            <i>Me</i>
            <button class="-line">로그아웃</button>
        </div>
        
    </header>
</template>

<script>
    export default { 
        name:'Header'
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
