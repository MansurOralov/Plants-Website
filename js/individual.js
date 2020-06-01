// upoading all data which was stored in the local storage
var name =localStorage.getItem('name');
var sid = localStorage.getItem('sid');
var login = localStorage.getItem('login');
var campus = localStorage.getItem('campus');
var choice = localStorage.getItem('choice');
var flowers = JSON.parse(localStorage.getItem('strFlower'));

$(document).ready(function(){

    $("#category").append(`${choice}`);
    $("#category").css("font-size", 30);
    
    // loop for printing the flowers according to the choice on the first page
    for(let x of flowers){ 
        if(x.category == choice){  
        $("#out1").append(`
        <br><div>
        <div> Name: ${x.name} </div> <br>
        <div> Price: ${x.price} </div> <br>
        <div><img class="pic" src="../images/${x.photo}"></div> <br>
        <div>Instructions: ${x.instructions} </div> <br>
        <div>________________________________________________________________________________________________</div> <br>
        </div>`);
        }
    }
    $("#out1").css("font-size", 20);
    $(".pic").css("height", 200);
  });




