<template>
    <div class="work">
        <div class="work__head">
            <div class="work__head__category">
                {{this.itemValue.category}}
            </div>
            <h1 class="work__head__title"> 
                {{this.itemValue.title}}
            </h1>
        </div>

        <div class="work__body">
            <div class="work__body__schedule">
                일정:{{this.itemValue.startTime}} ~ {{this.itemValue.deadline}} 
            </div>
            <div class="work__body__memo">{{this.itemValue.memo}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'work',
    props:{
        itemKey:String,
        itemValue:Object
    },
    mounted:function(){
        console.log("listItem:::::",this.listItem)
    }
}
</script>
<style lang="scss" scoped>
    .work{
        background-color: #f8f9ef;
        border-radius: 5px;
        padding: 10px;
        &__head{ display: flex; align-items: center; gap:5px;
            &__title{}
            &__category{ background-color: bisque; border-radius: 5px; padding: 2px 5px;}
        }
        &__body{ margin-top: 10px;
            &__schedule{}
            &__memo{}
        }
    }
</style>