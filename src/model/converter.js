var converter={
    categoryVO:function(obj){
        var color;
        
        //카테고리 세팅
        switch (obj.category) {
            case "homework":
                obj.categoryText="집안일";
                obj.categoryColor="green";
                break;
            case "work":
                obj.categoryText="회사업무";
                obj.categoryColor="gray";
                break;
            case "shopping":
                obj.categoryText="쇼핑";
                obj.categoryColor="red";
                break;
            case "study":
                obj.categoryText="공부";
                obj.categoryColor="blue";
                break;
            case "schedule":
                obj.categoryText="일정";
                obj.categoryColor="blue";
                break;
            case "exer":
                obj.categoryText="운동";
                obj.categoryColor="orange";
                break;
            case "etc":
                obj.categoryText="기타";
                obj.categoryColor="black";
                break;
            default:
                break;
        }
        return obj;
    }
}

export default {
    converterVO:function(list){
        return converter.categoryVO(list);
    }
}