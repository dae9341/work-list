<template>
    <div class="work" v-bind:data-key="this.itemKey" v-on:click="showUpdateLayer">
        <div class="work__complete" v-if="this.list.isCompeted">
            <span>완료</span>
        </div>
        <div class="work__head">
            <div v-bind:class="'-'+this.list.category + ' work__head__category'">
                {{this.list.categoryText}}
            </div>
            <h1 class="work__head__title"> 
                {{this.list.title}} 
            </h1>
        </div>

        <div class="work__body">
            <div class="work__body__schedule">
                일정:{{this.list.startTime}} ~ {{this.list.deadline}} 
            </div>
            <div class="work__body__memo">{{this.list.memo}}</div>
        </div>

        <div class="work__update" v-on:click.stop="hideUpdateLayer">
            <button class="-default -subColor" v-on:click.stop="complete">완료</button>
            <button class="-default -subColor" v-on:click.stop="gotoWork">수정</button>
            <button class="-default -subColor" v-on:click.stop="deleteItem">삭제</button> 
        </div>

    </div>
</template>
<script>
import WorkBase from './../model/workBase.js'
import Converter from './../model/converter.js'
export default { 
    name:'work',
    props:{
        itemKey:String,
        itemValue:Object
    },
    data(){
        return {
            list:Converter.converterVO(this.itemValue)
        }
    },
    methods:{
        showUpdateLayer:function(){
            this.$el.querySelector('.work__update').classList.add('-show')
        },
        hideUpdateLayer:function(){
            this.$el.querySelector('.work__update').classList.remove('-show');
        },
        complete:function(){
           if(window.confirm("정말 변경 하시겠습니까?")){
                WorkBase.writeList(this.itemKey,{
                    isCompeted:true
                });
                this.$router.go(0);
           }else{
            this.hideUpdateLayer();
           }
        },
        gotoWork:function(){
            this.$router.push({name: 'write', params: {itemKey: this.itemKey}})
        },
        deleteItem:function(){
           if(window.confirm("정말 삭제 하시겠습니까?")){
                WorkBase.deleteList(this.itemKey)
                this.$router.go(0);
           }else{
            this.hideUpdateLayer();
           }
        }

    },
    mounted:function(){
        
        // WorkBase.updateList("20220628001")
    }
}
</script>
<style lang="scss" scoped>
    .work{
        position:relative; min-width: 300px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        &:after{
            content:''; position: absolute; top:0; left:0; width: 100%; height:100%; display: block; border:1px solid #333; box-sizing: border-box; border-radius: inherit; z-index:1;
        }
        &__head{ display: flex; align-items: center; gap:5px;
            &__title{}
            &__category{ background-color: bisque; border-radius: 5px; padding: 2px 5px; color:#fff;
                &.-etc{background-color: rgb(14, 14, 14);}
                &.-study{background-color: rgb(5, 148, 69);}
                &.-exer{background-color: rgb(0, 149, 235);}
                &.-homework{background-color: rgb(171, 14, 177);}
                &.-shopping{background-color: rgb(243, 89, 0);}
                &.-schedule{background-color: rgb(120, 21, 250);}
                &.-work{background-color: rgb(88, 88, 86);}
            }
        }
        &__body{ margin-top: 10px;
            &__schedule{}
            &__memo{}
        }

        &__complete{
            width: 100%; height: 100%;
            position:absolute; top:0; left: 0; z-index:3;
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
            position:absolute; top:0; left: 0; z-index:4;
            background-color: rgba(0,0,0,0.5);
            border-radius: inherit;
            display: none; align-items: center; justify-content: center; gap:10px;
            &.-show{display: flex;}
        }
    }
</style>