<template>
    <footer class="footer">
        <div class="footer">
            <a href="/write" class="footer__addItem">등록</a>
        </div>
    </footer>
</template>

<script>
    export default {
        name:'Footer',
        props:{
            propIsLogin:Boolean,
        },
    }
</script>

<style lang="scss" scoped>
.footer{ position: fixed; bottom:0; left:0;width: 100%;height: 50px; z-index: 5;
    &__addItem{ position: absolute; bottom:10px; right:10px; display: flex; align-items: center; justify-content: center;; color:#fff; text-align: center; width: 50px; height: 50px; background-color: #0d9c9c; border-radius: 50%;}
}

</style>