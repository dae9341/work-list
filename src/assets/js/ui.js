var layer={
    loading: function(){
        console.log('ui:loading...');
        var layerHTML = `
        <div class='layer'> 
            <div class='layer__wrapper'>
                <div class='layer__content -loading'> 
                    로딩중...
                </div>
            </div>
        </div>
        `

        document.querySelector("body").insertAdjacentHTML("beforeend", layerHTML)
    },
    remove:function(){
        console.log('ui:remove...');
        document.querySelector("body").removeChild(document.querySelector('div.layer'));
    }
};




export default {
    uiLoading:function(){
        return layer.loading();
    },
    uiRemove:function(){
        return layer.remove();
    }
}