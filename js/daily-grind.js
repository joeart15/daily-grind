/*
    daily-grind.js

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Here are the items we need for each coffee:
    name - Bubble Tea for example
    pic - An image of a bubble tea
    day - Wednesday 
    alt - The data in the alt tag
    color - A color to match the coffee
    desc - A description of the coffee

*/

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 //must change to int for change
 myDay = parseInt(myDay);
 

switch(myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            day: "Sunday",
            alt: "A pic of a Caramel Latte",
            color: "tan",
            desc: `A smooth and sweet Caramel Latte to kickstart your Sunday!`
        };
        break;
    case 1:
        today = "Monday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            day: "Monday",
            alt: "A pic of a Cold Brew",
            color: "darkblue",
            desc: `Cold Brew to energize your Monday and keep you cool!`
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            day: "Tuesday",
            alt: "A pic of Drip Coffee",
            color: "brown",
            desc: `Simple, strong, and classic Drip Coffee to power through Tuesday.`
        };
        break;
    case 3:
        today = "Wednesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "A pic of a Bubble Tea",
            color: "pink",
            desc: `I like me some Bubble Tea.`
            
        };
        break;
    case 4:
        today = "Thursday";
        coffee = {
            name: "Frappuccino",
            pic: "images/frappaccino.jpg",
            day: "Thursday",
            alt: "A pic of a Frappuccino",
            color: "lightblue",
            desc: `Treat yourself to a fun and frosty Frappuccino this Thursday!`
        };
        break;
    case 5:
        today = "Friday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            day: "Friday",
            alt: "A pic of a Mocha",
            color: "chocolate",
            desc: `A rich and indulgent Mocha to celebrate the start of your weekend!`
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            day: "Saturday",
            alt: "A pic of a Pumpkin Spice Latte",
            color: "orange",
            desc: `The cozy flavors of a Pumpkin Spice Latte are perfect for a Saturday!`
        };
        break;
    default:
        today = "Something went wrong";
        coffee = {};
}


console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;


function coffeeTemplate(coffee) {
    let myReturn =
    `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
<strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">"${coffee.name}"</strong>, "${coffee.desc}"!</p>`;
    return myReturn;
}