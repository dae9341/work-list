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
                            <input class="radioButton__input" type="radio" name="categorySelect" value="etc" checked/> 
                            <span class="radioButton__text">기타</span>
                        </label> 
                    </span>
                </div>
            </li>
            <li>
                <span class="workWrite__title">할 일</span>
                <div class="workWrite__content">
                    <input type="text" class="inputText" id="workWriteTitle"/>
                </div>
            </li>
            <li>
                <span class="workWrite__title">시작일</span>
                <div class="workWrite__content">
                    <input type="date" class="inputDate" id="workWriteStartDate">
                </div>
            </li>
            <li>
                <span class="workWrite__title">종료일</span>
                <div class="workWrite__content">
                    <input type="date" class="inputDate" id="workWriteEndDate">
                </div>
            </li>
            <li>
                <span class="workWrite__title">메모</span>
                <div class="workWrite__content">
                    <textarea class="textArea" name="" placeholder="메모를 입력하세요" id="workWriteMemo" cols="30" rows="10"></textarea>
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
                var category = document.querySelector('input[name="categorySelect"]:checked').value;
                var memo = document.querySelector('#workWriteMemo').value;
                var deadline = validate('#workWriteEndDate');
                var startTime = validate('#workWriteStartDate');
                var title = validate('#workWriteTitle');

                function validate(id){
                    var qid = document.querySelector(id);

                    if(qid.value){
                        return qid.value
                    }else{
                        qid.classList.add('-error');
                    }
                }


                var data={
                    category:category,
                    deadline:deadline,
                    isCompeted:false,
                    memo:memo ? memo:"-",
                    startTime:startTime,
                    title:title
                }

                    WorkBase.writeList(WorkBase.key(),data);
                    alert("등록완료!");
                    this.$router.go(-1)

            }

        },
        mounted:function(){
            // console.log("settingKey:::",WorkBase.key());
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