var listButtons = document.getElementById("listButtons");
var btns = listButtons.getElementsByClassName("listItem");

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
    $("#material-card").clone().attr('id', `material-card-${count}`).appendTo("#top-card");
    
}

function removeMaterial(element){
    var parent = element.parentNode;
    var content = parent.querySelector(".classcard");
    alert(content);
}