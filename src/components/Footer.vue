<template>
    <footer class="footer">
        <div class="footer__content">
            <a href="/write" class="footer__addItem" v-if="propIsAddItem">등록</a>
        </div>
    </footer>
</template>

<script>
    export default {
        name:'Footer',
        props:{
            propIsLogin:Boolean,
            propIsAddItem:Boolean
        },
        methods:{

        },
        mounted:function(){
        }
    }
</script>

<style lang="scss" scoped>
.footer{ position: fixed; bottom:0px; left:0;width: 100%;height: 50px; z-index: 5; transition:bottom 400ms ease;
    &__addItem{ display: flex; align-items: center; justify-content: center;; color:#fff; text-align: center; width: 100%; height: 50px; background-color: #0d9c9c; }

    body.down &{bottom:-50px;}
    body.up &{bottom:0px;}
}

</style>