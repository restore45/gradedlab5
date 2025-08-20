document.addEventListener('DOMContentLoaded',function(event){

    event.preventDefault();
    let pictureDiv = document.getElementById("pics");
    let favorities = document.getElementById("favorites");
    let Ulist = document.getElementById("actions");
    let Upictures = document.getElementsByTagName("img");

    for(let i =0; i < Upictures.length;i++){
    
        Upictures[i].style.width="50px"
    }
    


});

