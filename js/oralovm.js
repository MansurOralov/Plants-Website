
// Fields
var name, sid, login, choice;
var campus;
let categories = new Array;
let flowerList = new Array;


//Category class
class Category{
    constructor(catName, picture){
        this.catName = catName;
        this.picture = picture;
    }
}
// FlowerList class
class FlowerList{
    constructor(category, price, instructions, photo, name, productId){
        this.category = category;
        this.price = price;
        this.instructions = instructions;
        this.photo = photo;
        this.name = name;
        this.productId = productId;
    }
}



$(document).ready(function(){
    // Ajax call
    $.ajax({
        type: "GET", url: "data/A2-Flowers.json", 
        datatype: "json", success: loadInfo
    });

});

    //function which  loads Arrays
    function loadInfo(data) {
    name = data.personal.myFullName;
    sid = data.personal.myStudentNumber;
    login = data.personal.myLoginName;
    campus = data.personal.myCampus;

    cat = data.categories;
    for(let x of cat){
    categories.push(new Category(x.category, x.pic));
    }		
    console.log(categories[1]);

    flowers = data.flowerlist;
    for(let x of flowers){
    flowerList.push(new FlowerList(x.category, x.price, x.instructions, x.photo, x.name, x.productId));
    }
    console.log(flowerList[0]);

    

   
    buildHeader();
    buildfooter();
    buildCategory(categories);

    
    

     
    
    localStorage.setItem ("strFlower", JSON.stringify(flowerList));

    $("#cat1").click(function(){choice = categories[0].catName;
        localStorage.setItem("choice", choice);
    })
    $("#cat2").click(function(){choice = categories[1].catName;
        localStorage.setItem("choice", choice);
    })
    $("#cat3").click(function(){choice = categories[2].catName;
        localStorage.setItem("choice", choice);
    })
    $("#cat4").click(function(){choice = categories[3].catName;
        localStorage.setItem("choice", choice);
    })
    localStorage.setItem('name', name);
    localStorage.setItem('sid', sid);
    localStorage.setItem('login', login);
    localStorage.setItem('campus', campus);


    
    

} 


// function to build the header
function buildHeader(){
   $("header").append(` Assignment #2, ${name}, ${sid}`);
   $("header").css("font-size", 30);
   $("header").css("font-style", "bold");
   $("header").css("text-align", "center");

   
}
// function to build footer
function buildfooter(){
    $("footer").append(`  ${login}, ${campus}`);
    $("footer").css("font-size", 30);
   $("footer").css("font-style", "bold");
   $("footer").css("text-align", "center");
 }

 // function to build category menu
 function buildCategory(categor){
   $("#cat1").append(`${categor[0].catName}`);
   $("#cat2").append(`${categor[1].catName}`);
   $("#cat3").append(`${categor[2].catName}`);
   $("#cat4").append(`${categor[3].catName}`);
 }



