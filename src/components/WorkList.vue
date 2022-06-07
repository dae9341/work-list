<template>
    <div class="workList">
        <ul>
            <li>
                <Work></Work>
            </li>
            <li>
                <Work></Work>
            </li>
            <li>
                <Work></Work>
            </li>
        </ul>
    </div>
</template>

<script>
    import Work from './../modules/Work.vue'

    export default {
        name:'WorkList',
        components: {
            Work
        },
        methods:{
            
        }
    }

</script>

<style lang="scss">
    .workList{padding: 10px 10px;}
</style>