<template>
    <div class="work" v-bind:data-key="this.itemKey" v-on:click="showUpdateLayer(); return false;">
        <div class="work__complete" v-if="this.itemValue.isCompeted">
            <span>완료</span>
        </div>
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

        <div class="work__update" v-on:click="hideUpdateLayer(); return false;">
            <button class="-default -subColor" v-on:click="complete();">완료</button>
            <button class="-default -subColor">수정</button>
            <button class="-default -subColor">삭제</button> 
        </div>
    </div>
</template>
<script>
import WorkBase from './../model/workBase.js'
export default { 
    name:'work',
    props:{
        itemKey:String,
        itemValue:Object
    },
    methods:{
        showUpdateLayer:function(){
            this.$el.querySelector('.work__update').classList.add('-show')
        },
        hideUpdateLayer:function(){
            console.log(this.$el.querySelector('.work__update'))
            this.$el.querySelector('.work__update').classList.remove('-show');
        },
        complete:function(){
           WorkBase.writeList(this.itemKey,{
            isCompeted:true
           });
        }

    },
    mounted:function(){
        // WorkBase.updateList("20220628001")
    }
}
</script>
<style lang="scss" scoped>
    .work{
        position:relative;
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

        &__complete{
            width: 100%; height: 100%;
            position:absolute; top:0; left: 0;
            background-color: rgba(0,0,0,0.5);
            border-radius: inherit;
            display: flex; align-items: center; justify-content: flex-end; 
            padding: 0 20px;
            box-sizing: border-box;
            >span{
                border:2px solid #fff;
                width: 50px; height:50px; display: flex; align-items: center; justify-content: center;
                border-radius: 50%;
                font-weight: bold;
                color: #fff;
                transform: rotate(-30deg);
            }
        }

        &__update{
            width: 100%; height: 100%;
            position:absolute; top:0; left: 0;
            background-color: rgba(0,0,0,0.5);
            border-radius: inherit;
            display: none; align-items: center; justify-content: center; gap:10px;
            &.-show{display: flex;}
        }
    }
</style>