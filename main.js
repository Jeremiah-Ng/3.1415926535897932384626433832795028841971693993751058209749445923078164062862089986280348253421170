
function additem(){
    var menu_list_array=[];
    var e=document.getElementById("additem").length;
    if(e!=0){
    var htmldata;
    var item=document.getElementById("additem").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0; i<menu_list_array.length; i++){
        htmldata=htmldata+"<div class='card'>"+"<img src='images/pizzaImg.png'/>"+menu_list_array[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
    }
}