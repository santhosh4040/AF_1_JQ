var listButtons = document.getElementById("listButtons");
var btns = listButtons.getElementsByClassName("listItem");
var materialCard = $("#material-card")

for(i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function(){
        var currentActive = document.getElementsByClassName("active");
        currentActive[0].className = currentActive[0].className.replace("active", "");
        this.className += " active";
    })
}

var count = 0;
function addMaterial(){
    count++;
    materialCard.clone().attr('id', `material-card-${count}`).appendTo("#top-card");
    
}

function removeMaterial(element){
    console.log(element)
   var id = element.parentNode.parentNode.id;
   $("#"+id).remove();
}