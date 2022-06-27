<template>
    <div class="workWrite">
        <ul>
            <li>
                <span class="workWrite__title">카테고리</span>
                <div class="workWrite__content -category">
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="homework"/> 
                            <span class="radioButton__text">집안일</span>
                        </label> 
                    </span>
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="shopping"/> 
                            <span class="radioButton__text">쇼핑</span>
                        </label> 
                    </span>
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="exer"/> 
                            <span class="radioButton__text">운동</span>
                        </label> 
                    </span>
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="work"/> 
                            <span class="radioButton__text">업무</span>
                        </label> 
                    </span>
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="study"/> 
                            <span class="radioButton__text">스터디</span>
                        </label> 
                    </span>
                    <span class="radioButton">
                        <label>
                            <input class="radioButton__input" type="radio" name="categorySelect" value="etc"/> 
                            <span class="radioButton__text">기타</span>
                        </label> 
                    </span>
                </div>
            </li>
            <li>
                <span class="workWrite__title">할 일</span>
                <div class="workWrite__content">
                    <input type="text" class="inputText"/>
                </div>
            </li>
            <li>
                <span class="workWrite__title">시작일</span>
                <div class="workWrite__content">
                    <input type="date" class="inputDate">
                </div>
            </li>
            <li>
                <span class="workWrite__title">종료일</span>
                <div class="workWrite__content">
                    <input type="date" class="inputDate">
                </div>
            </li>
            <li>
                <span class="workWrite__title">메모</span>
                <div class="workWrite__content">
                    <textarea class="textArea" name="" placeholder="메모를 입력하세요" id="" cols="30" rows="10"></textarea>
                </div>
            </li>
        </ul>


        <div class="workWrite__btns">
            <a class="btn -gray" href="/main">취소</a>
            <a class="btn -borderBrand" href="#" v-on:click="writeWork()">등록</a>
        </div>
    </div>

</template>

<script>
    import WorkBase from './../model/workBase.js'
    export default {
        name:'WorkWrite',

        methods:{
            writeWork:function(){
                console.log(document.querySelector('input[name="categorySelect"]:checked').value);
                 
            }
        },
        mounted:function(){
            WorkBase.settingKey();
        }
    }
</script>
<style lang="scss" scoped>
    .workWrite{ margin-top:25px;
        ul {
            display: flex; flex-direction: column; padding:0 20px; gap:10px;
            li{display: flex; align-items: center; justify-content: space-between; 
                .workWrite__title{display: block; width: 100px; }
            }

        }
        &__content{
            flex:1;
            &.-category{
                display: flex; align-items: center; flex-wrap: wrap;
                gap:5px;
            }
        }
        &__btns{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            gap:10px;
        }
    }
</style>