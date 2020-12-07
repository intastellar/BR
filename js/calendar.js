let c_container = document.querySelector(".calendar");
let days = 25;
let closebtn = document.querySelector(".close");
let cta = document.querySelector(".cta");

for(let i = 1; i<days; i++){
    let door = document.createElement("article");
    let door_face = document.createElement("section");
    let door_front = document.createElement("section");
    let door_back = document.createElement("section");

    door.setAttribute("class", "door");
    door_face.setAttribute("class", "door__face");
    door_back.setAttribute("class", "door__back");
    door_front.setAttribute("class", "door__front");
    
    door_front.innerHTML = i;
    door_face.appendChild(door_front);
    door_face.appendChild(door_back);
    door.appendChild(door_face.cloneNode(true));

    c_container.appendChild(door);
}
let doors = document.querySelectorAll(".door__face");
let front = document.querySelectorAll(".door__front");

for(var i = 0; i<doors.length; i++){
    doors[i].addEventListener("mouseover", function(){
        this.style.transform = "rotateY(180deg)";
    });

    doors[i].addEventListener("mouseout", function(){
        this.style.transform = "";
    });
}

closebtn.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".overlay").style.opacity = "0";
    document.querySelector(".overlay").style.visibility = "hidden";
});

cta.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".overlay").style.opacity = "1";
    document.querySelector(".overlay").style.visibility = "visible";
});