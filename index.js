//HANDLE SEARCH 

function handleSearch(event){
    $("#listButtons").filter(event.target.value);
}




//ADD MATERIAL IN SIDEBAR.

function handleMaterialForm(event) {
    document.getElementById("nomaterial").style.display="none";
    var materialName = document.getElementById("material-name");
    var materialDescription = document.getElementById("message-text");
    count++;
  
    console.log(materialName.value, materialDescription.value);
  
    $(
      `<button class='${count === 1 ? "listItem active" : "listItem"}' style='padding:10px;'><li><p>${materialName.value}<span><i class='float-end mt-3 fa-solid fa-angle-right forward'></i> </span><br>${materialDescription.value}</p></li></button>`
    )
      .attr(`id`, `listMaterial${count}`)
      .appendTo("#listButtons");
  
 
    materialName.value = '';
    materialDescription.value='';
    var listButtons = document.getElementById("listButtons");
    var btns = listButtons.getElementsByClassName("listItem");
  
  
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var currentActive = document.getElementsByClassName("active");
        currentActive[0].className = currentActive[0].className.replace(
          "active",
          ""
        );
        this.className += " active";
      });
    }
    event.preventDefault();
  }



// ADD MATERIAL CLONE
var count = 0;
var materialCard = $("#material-card");
function addMaterial() {
  count++;
  materialCard
    .clone()
    .attr("id", `material-card-${count}`)
    .appendTo("#top-card");
}

// REMOVE MATERIAL CLONE
function removeMaterial(element) {
  var id = element.parentNode.parentNode.id;
  console.log(`Element ${id} is deleted.`);
  $("#" + id).remove();
}

