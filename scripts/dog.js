var show = document.getElementById("show");
var template = document.getElementById("template").innerHTML;

var btn_isdog = document.getElementsByClassName("isdog");
var btn_notdog = document.getElementsByClassName("notdog");

function Dog(img, name, flag) {
    this.img = img;
    this.name = name;
    this.flag = flag;
    this.isClicked = false;
    this.isDogClicked = false;
    this.notDogClicked = false;
}

var data = {
    dogs: [
        new Dog("../images/goofy.jpg", "Goofy", true),
        new Dog("../images/bubby_bunny.jpg", "Bubby", false),
        new Dog("../images/bunny.jpg", "Bunny", true),
        new Dog("../images/caged_heat.jpg", "heat", false),
        new Dog("../images/cloudy_bunny.jpg", "cloudy", false),
        new Dog("../images/curious_pig.jpg", "curious", false),
        new Dog("../images/cute_otter.jpg", "cute", false),
        new Dog("../images/dgaf.jpg", "dgaf", true)
    ]
};

var compiled = Handlebars.compile(template);
show.innerHTML = compiled(data);

function clickIsButton() {
    for (let i = 0; i < btn_isdog.length; i++) {
        btn_isdog[i].onclick = function() {
            data.dogs[i].isDogClicked =true;
            data.dogs[i].notDogClicked = false;
            data.dogs[i].isClicked = true;
            show.innerHTML = compiled(data);
            clickIsButton();
            clickNotButton();
        };
    }
}

function clickNotButton() {
    for (let i = 0; i < btn_notdog.length; i++) {
        btn_notdog[i].onclick = function() {
            data.dogs[i].isDogClicked =false;
            data.dogs[i].notDogClicked = true;
            data.dogs[i].isClicked = true;
            show.innerHTML = compiled(data);
            clickIsButton();
            clickNotButton();
        };
    }
}

clickIsButton();
clickNotButton();