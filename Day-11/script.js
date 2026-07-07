const app = document.getElementById("app");

const page = document.createElement("div");
page.className = "profile-card";



const themeButton = document.createElement("button");
themeButton.textContent = "Toggle Dark Mode";

themeButton.addEventListener("click", function () {
    page.classList.toggle("dark-mode");
});


// Name
const title = document.createElement("h1");
title.textContent = "Khushi Tanwer";



const introHeading = document.createElement("h2");
introHeading.textContent = "Introduction";

const introText = document.createElement("p");
introText.textContent =
"I am a BCA first year student. I enjoy learning programming and building websites.";



const techHeading = document.createElement("h2");
techHeading.textContent = "Technologies I Know";

const techList = document.createElement("ul");

const tech1 = document.createElement("li");
tech1.textContent = "C++";

const tech2 = document.createElement("li");
tech2.textContent = "HTML";

const tech3 = document.createElement("li");
tech3.textContent = "CSS";

const tech4 = document.createElement("li");
tech4.textContent = "JavaScript";

techList.appendChild(tech1);
techList.appendChild(tech2);
techList.appendChild(tech3);
techList.appendChild(tech4);



const learningHeading = document.createElement("h2");
learningHeading.textContent = "Currently Learning";

const learningList = document.createElement("ul");

const learning1 = document.createElement("li");
learning1.textContent = "Data Structures and Algorithms";

const learning2 = document.createElement("li");
learning2.textContent = "DOM Manipulation";

const learning3 = document.createElement("li");
learning3.textContent = "Tailwind CSS";

learningList.appendChild(learning1);
learningList.appendChild(learning2);
learningList.appendChild(learning3);



const academicHeading = document.createElement("h2");
academicHeading.textContent = "Academic Details";

const academicText = document.createElement("p");
academicText.textContent =
"BCA First Year Student at K.R. Mangalam University.";


// Contact
const contactHeading = document.createElement("h2");
contactHeading.textContent = "connect Me";

const contactText = document.createElement("p");
contactText.textContent =
"Email : khushitanwer@gmail.com";


// Countdown Timer
const timerHeading = document.createElement("h2");
timerHeading.textContent = "Countdown Timer";

const input = document.createElement("input");
input.type = "number";
input.placeholder = "Enter seconds";

const startButton = document.createElement("button");
startButton.textContent = "Start Timer";

const display = document.createElement("h2");
display.textContent = "0";


function startCountdown(seconds){

    return new Promise(function(resolve, reject){

        if(seconds <= 0 || isNaN(seconds)){
            reject("Please enter a valid number");
            return;
        }

        let count = seconds;

        const interval = setInterval(function(){

            display.textContent = count;
            count--;

            if(count < 0){
                clearInterval(interval);
                resolve("Timer Finished");
            }

        },1000);

    });

}


// Start Button Event
startButton.addEventListener("click", function(){

    let seconds = parseInt(input.value);

    startCountdown(seconds)
    .then(function(message){
        alert(message);
    })
    .catch(function(error){
        alert(error);
    });

});


// JSON
const student = {
    name: "Khushi",
    course: "BCA"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);

const obj = JSON.parse(jsonData);
console.log(obj);


// Local Storage
localStorage.setItem("studentData", jsonData);

const savedData = localStorage.getItem("studentData");
console.log(savedData);


// Append Elements
page.appendChild(themeButton);
page.appendChild(title);

page.appendChild(introHeading);
page.appendChild(introText);

page.appendChild(techHeading);
page.appendChild(techList);

page.appendChild(learningHeading);
page.appendChild(learningList);

page.appendChild(academicHeading);
page.appendChild(academicText);

page.appendChild(contactHeading);
page.appendChild(contactText);

page.appendChild(timerHeading);
page.appendChild(input);
page.appendChild(startButton);
page.appendChild(display);

app.appendChild(page);