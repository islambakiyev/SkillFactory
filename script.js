
const entities = [
    {
        city: "Rostov-on-Don<br/> LCD admiral",
        time: "3.5 months",
        area: "81 m2",
        img: "images/property1.jpg"
    },
    {
        city: "Sochi<br/> Thieves",
        time: "4 months",
        area: "105 m2",
        img: "images/property2.jpg"
    },
    {
        city: "Rostov-on-Don<br/> Patriotic",
        time: "3 months",
        area: "93 m2",
        img: "images/property3.jpg"
    }
];



const city = document.getElementById("properties-city");
const time = document.getElementById("properties-time");
const size = document.getElementById("properties-size");
const image = document.querySelector(".project-image");
const prev = document.querySelector(".arrows-left");
const next = document.querySelector(".arrows-right");
const arrows = document.querySelector(".arrows");
const circle = document.querySelectorAll(".circle");
const projectList  = document.querySelector(".project-list");
const projectListItem  = document.querySelectorAll(".project-list-item");

let currentIndex = 0;

const setEntity = (index) => {
    city.innerHTML = entities[index].city;
    time.innerText = entities[index].time;
    size.innerText = entities[index].area;
    image.src = entities[index].img;
};


const prevFunc = () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    setEntity(currentIndex);
};

const nextFunc = () => {
    currentIndex += 1;
    if (currentIndex > 2) {
        currentIndex = 0;
    }
    setEntity(currentIndex);
};

arrows.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex > 2) {
        currentIndex = 0;
    }
    setEntity(currentIndex);
});

projectList.addEventListener('click', (event) => {
    let value = event.target.attributes[1].value;
        currentIndex = value;
        setEntity(currentIndex);
});


prev.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunc);