// Where To Go
var WG1 = {
    name: "Mines View Park",
    imgSrc: "images/MinesViewPark.png",
    description: "Mines View Park is an overlook park located in Mines view, Baguio. The park has a very enticing mountain scenery. You can rent binoculars in the view deck to further enjoy the mountain viewing experience."   
}

var WG2 = {
    name: "Burnham Park",
    imgSrc: "images/BurnhamPark.png",
    description: "Burnham Park is the most popular Park here in Baguio. It's green and tranquil environment is surrounded by towering trees and the heart of the park is it's lake. You can enjoy a boat ride in Burnham Lake. It's wide area can be is mostly used as picnic grounds. Aside from having a picnic and riding a boat, there is also a skating rink, a lot of bike rental stalls, and a football field. Some groups even use the Melvin Jones Grandstand for dance practices and zumba."
}

var WG3 = {
    name: "Wright Park",
    imgSrc: "images/WrightPark.png",
    description: "When night comes, this place is one of the most lively in Baguio City. The Camp's establishment contains 3 resto bars namely Joint, Sala, and Hardin and a club named Ampersand. This place is mostly filled with youth and foreigners who want to enjoy life."
}

var WG4 = {
    name: "The Mansion",
    imgSrc: "images/TheMansion.png",
    description: "The Mansion is the rest house of the President when he or she is visiting Baguio. It is located near Wright Park. You cannot enter insie the mansion, but you can enter the gate and marvel at the garden outside."
}

var WG5 = {
    name: "Diplomat Hotel",
    imgSrc: "images/DiplomatHotel.png",
    description: "This hotel ruins is famous for being one of the most haunted places not just in Baguio but in the Philippines. By daytime, you can see the beauty and aestetics of this worn out place. You can even access the rooftop to get a marvelous view of the area. By night however, let the ghost haunting begin!"
}

var WG6 = {
    name: "Baguio Museum",
    imgSrc: "images/BaguioMuseum.png",
    description: "Baguio Museum features historical events that happened in Baguio. Like any other museums, it displays artifacts and vintage items of the place's local inhabitants. The museum also contains facts and information about the indigenous peoples of Baguio. Basically, it tells you how Baguio became as it is now."
}

var WG7 = {
    name: "Camp John Hay",
    imgSrc: "images/CampJohnHay.png",
    description: "It's more to this place than just camping. Camp John Hay offers a variety of activities to do. You can enjoy Treetop Adventure Rides, marvel at the beauty of butterflies in the Butterfly Sanctuary, appreciate American colonial architecture by visiting the Bell House, gaze at the beautiful landscaping in the ampitheater, or maybe change for the better by burrying your negative energies at the Cemetery of Negativism."
}

var WG8 = {
    name: "Botanical Garden",
    imgSrc: "images/BotanicalGarden.png",
    description: "For nature lovers, specially those who appreciate the beauty of flowers, Botanical Garden is for you. This nature packed environment is filled with colorful flowers and different kinds of plants. There are also aestetics that make this place alluring, like the tunnel and the japanese themed bridge. This place also allows you to escape the city feels and breathe fresh air."
}

var WG9 = {
    name: "Lion's Head",
    imgSrc: "images/LionsHead.png",
    description: "Kennon road's &quot The Lion Head &quot is famous for welcoming visitors to Baguio or maybe giving thanks for visiting. When you see this giant rock sculpted lion head, you can sure yourself &quot Ah, I'm already in Baguio. &quot"
}

var WG10 = {
    name: "Philippine Military Academy",
    imgSrc: "images/PhilippineMilitaryAcademy.png",
    description: "The Philippine Military Academy is visited for two things. One reason is because maybe you're visiting a relative that joined. And the other reason is because you want to take epic pictures of historical war equipment that they used ike tanks, and war planes."
}

// Where To Eat
var WE1 = {
    name: "Solibao / Ganza Restaurant",
    imgSrc: "",
    description: ""
}

// Where To Sleep

var WS1 = {
    name: "Paladin Hotel",
    imgSrc: "",
    description: ""
}


var whereToGo = [WG1, WG2, WG3, WG4, WG5, WG6, WG7, WG8, WG9, WG10];
var whereToEat = [WE1];
var whereToSleep = [WS1];


var data = this.document.getElementById("data").attributes["data-con"].value;


function randomHome() {
    var go = Math.floor(Math.random()  * whereToGo.length);
    var eat = Math.floor(Math.random() * whereToEat.length);

    document.getElementById("content_container").innerHTML += 
    '<div class="home_content">'
    +'<p>Where To Go</p>'
    +'<h1>'+whereToGo[go].name+'</h1>'
    +'<img src="'+whereToGo[go].imgSrc+'">'
    +'<p>'+whereToGo[go].description+'</p>'
    +'</div>';

    var go2;

   do {
        go2 =  Math.floor(Math.random()  * whereToGo.length);
   } while (go ==  go2);

   document.getElementById("content_container").innerHTML += 
   '<div class="home_content">'
   +'<h1>'+whereToGo[go2].name+'</h1>'
   +'<img src="'+whereToGo[go2].imgSrc+'">'
   +'<p>'+whereToGo[go2].description+'</p>'
   +'</div>';

   var go3;

   do {
        go3 =  Math.floor(Math.random()  * whereToGo.length);
   } while (go ==  go3 || go3 == go2);

   document.getElementById("content_container").innerHTML += 
   '<div class="home_content">'
   +'<h1>'+whereToGo[go3].name+'</h1>'
   +'<img src="'+whereToGo[go3].imgSrc+'">'
   +'<p>'+whereToGo[go3].description+'</p>'
   +'</div>';

    document.getElementById("content_container").innerHTML += 
    '<div class="home_content">'
    +'<p>Where To Eat</p>'
    +'<h1>'+whereToEat[eat].name+'</h1>'
    +'<img src="'+whereToEat[eat].imgSrc+'">'
    +'<p>'+whereToEat[eat].description+'</p>'
    +'</div>';
}

function showContent(arr) {
    for (i = 0; i < arr.length; i++) {
        document.getElementById("content_container").innerHTML += 
        '<div class="content">'
        +'<h1>'+arr[i].name+'</h1>'
        +'<img src="'+arr[i].imgSrc+'">'
        +'<p>'+arr[i].description+'</p>'
        +'</div>';
    }
}

function hideCurrContent() {
    var allContent = document.getElementById("content_container").querySelectorAll(".content");

    for (i = 0; i < allContent.length; i++) {
        allContent[i].remove();
    }
}

var temp;

if (data == "G") {
    temp = whereToGo;
}

function sortNameAZ() {
    hideCurrContent();
    
    temp.reverse();

    temp.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    
    showContent(temp);
}

function sortNameZA() {
    hideCurrContent();
    
    temp.reverse();

    temp.sort(function(a, b) {
        if (a.name > b.name) {
            return -1;
        }

        if (a.name < b.name) {
            return 1;
        }
        return 0;
    });
    
    showContent(temp);
}

window.onload = function () {
    if (data == "H") {
        randomHome();
    } else if (data == "G") {
        showContent(whereToGo);
    } else if (data == "E") {
        showContent(whereToEat);
    } else if (data == "S") {
        showContent(whereToSleep);
    }
}

