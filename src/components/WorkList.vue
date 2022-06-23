<template>
    <div class="workList">
        <ul>
            <li v-for="listItem in list">
                <Work :item-key="listItem.key" :item-value="listItem.value"></Work>
            </li>
        </ul>
    </div>
</template>

<script>
    import Work from './../modules/Work.vue'
    import WorkBase from './../model/workBase.js'

    export default {
        name:'WorkList',
        data(){
            return {
                list: WorkBase.readList()
            }
        },
        components: {
            Work
        },
        methods:{

        },
        mounted:function(){
            console.log("isLogin::",this.propIsLogin)
            // console.log("list::",this.list)
        }
    }

</script>

<style lang="scss">
    .workList{padding: 10px 10px;
        ul{ display: flex; flex-direction: column; gap:10px;}
    }
</style>