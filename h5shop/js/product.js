$(function(){
    var productContain = $('#productContain');
    var userinfoG = $('#userinfoG');
    userinfoG.hide();
    var $searchBar = $('#searchBar'),
        $searchResult = $('#searchResult'),
        $searchText = $('#searchText'),
        $searchInput = $('#searchInput'),
        $searchClear = $('#searchClear'),
        $searchCancel = $('#searchCancel');
    $('.weui-tabbar__item').on('click', function () {
        $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');

        // console.log( $(this)[0],this, $(this).innerHTML, $(this).innerText, $(this).id )
        if( $(this)[0].name == "prodG"){
            productContain.hide();
            userinfoG.hide();
        }
        else if($(this)[0].name == "prodO"){
            productContain.hide();
            userinfoG.hide();

        } else if($(this)[0].name == "prodM"){
            productContain.hide();
            userinfoG.show();

        } else if($(this)[0].name == "prodP"){
            productContain.show();
            userinfoG.hide();
        }
    });
    function hideSearchResult(){
        $searchResult.hide();
        $searchInput.val('');
    }
    function cancelSearch(){
        hideSearchResult();
        $searchBar.removeClass('weui-search-bar_focusing');
        $searchText.show();
    }
    $searchText.on('click', function(){
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });
    $searchInput
        .on('blur', function () {
            if(!this.value.length) cancelSearch();
        })
        .on('input', function(){
            if(this.value.length) {
                $searchResult.show();
            } else {
                $searchResult.hide();
            }
        })
    ;
    $searchClear.on('click', function(){
        hideSearchResult();
        $searchInput.focus();
    });
    $searchCancel.on('click', function(){
        cancelSearch();
        $searchInput.blur();
    });

    ajaxFun();

});

function ajaxFun() {
    $.ajax({
        type : 'get',
        url : sh_requestUrl+'/getShopProduct',
        contentType : "application/json; charset=utf-8",
        async : false,
        success : function(data) {

            if(data!=null){

                var parmin = JSON.parse(data);
                var listP =parmin.data;
                for(var i = 0; i<listP.length; i++){

                    $("#productlistG").append("   <li class=\"proLi\"  >\n" +
                        "                                <a href=\"productInfo.html?productCode=" +listP[i].id+ "\">\n" +
                        "                                    <img class=\"proImage\" src=\" " +listP[i].productpicpath+  " \">" +
                        "                                    <p class=\"proP\">" + listP[i].productname+                 "</p>\n" +
                        "                                     <span class=\"proPrice\">" +listP[i].originprice+             "</span>\n" +
                        "                                 <span class=\"hot\">1652人付款</span></a>\n" +
                        "                            </li>")
                }



            }

        }
    });
}
