//video
var vid = document.getElementById("myVideo");
function pauseVid() {

    vid.pause();
}
function playVid() {

    vid.play();
   

}
//click Here

function showContact() {
    var clickhere = document.getElementById("clck");
    var contact = document.getElementById("showcon");
    if (contact.style.display === 'none') {

        clickhere.style.display = "none";
        contact.style.display = "block";
    }
    else {

        clickhere.style.display = "block";
        contact.style.display = "none";
    }

}

 // close icon

var closebtns = document.getElementsByClassName("close");
var i;
var contact = document.getElementById("showcon");
var clickhere = document.getElementById("clck");
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        contact.style.display = 'none';
        clickhere.style.display='block'


    });
}
//navbar collapse
function openNav() {

    document.getElementById("sidenav").style.width = "100%";
 



}
function closeNav() {

    document.getElementById("sidenav").style.width = "0";

}

