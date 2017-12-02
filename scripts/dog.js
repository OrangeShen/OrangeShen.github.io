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

var second_data = {
    dogs: [
        new Dog("../images/exorcist.jpg", "Exorcist", true),
        new Dog("../images/gremlin.jpg", "Gremlin", true),
        new Dog("../images/meditating_cat.jpg", "Cat", false),
        new Dog("../images/middlefinger_otter.jpg", "otter", false),
        new Dog("../images/moonwalking_goat.jpg", "Goat", false),
        new Dog("../images/panda.jpg", "Panda", false),
        new Dog("../images/party.jpg", "Party", true),
        new Dog("../images/sad_pony.jpg", "Pony", false)
    ]
};

var third_data = {
    dogs: [
        new Dog("../images/salary.jpg", "Salary", true),
        new Dog("../images/startled.jpg", "Startled", true),
        new Dog("../images/teacup_pig.jpg", "Teacup", false),
        new Dog("../images/towel.jpg", "Towel", true),
        new Dog("../images/triplethreat.jpg", "Triplethreat", true),
        new Dog("../images/ultimate_quokka.jpg", "Quokka", false)
    ]
};

//empty object set for classification
var dog_data = {dogs: [] };
var notDog_data = {dogs: [] };
var maybeDog_data = {dogs: [] };

//initialization
var compiled = Handlebars.compile(template);
show.innerHTML = compiled(data);

function clickFirstPage() {
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
}

function clickSecondPage() {
    show.innerHTML = compiled(second_data);
    function clickIsButton() {
        for (let i = 0; i < btn_isdog.length; i++) {
            btn_isdog[i].onclick = function() {
                second_data.dogs[i].isDogClicked =true;
                second_data.dogs[i].notDogClicked = false;
                second_data.dogs[i].isClicked = true;
                show.innerHTML = compiled(second_data);
                
                clickIsButton();
                clickNotButton();
            };
        }
    }

    function clickNotButton() {
        for (let i = 0; i < btn_notdog.length; i++) {
            btn_notdog[i].onclick = function() {
                second_data.dogs[i].isDogClicked =false;
                second_data.dogs[i].notDogClicked = true;
                second_data.dogs[i].isClicked = true;
                show.innerHTML = compiled(second_data);
                
                clickIsButton();
                clickNotButton();
            };
        }
    }
    clickIsButton();
    clickNotButton();
}

function clickThirdPage() {
    show.innerHTML = compiled(third_data);
    function clickIsButton() {
        for (let i = 0; i < btn_isdog.length; i++) {
            btn_isdog[i].onclick = function() {
                third_data.dogs[i].isDogClicked =true;
                third_data.dogs[i].notDogClicked = false;
                third_data.dogs[i].isClicked = true;
                show.innerHTML = compiled(third_data);
                
                clickIsButton();
                clickNotButton();
            };
        }
    }

    function clickNotButton() {
        for (let i = 0; i < btn_notdog.length; i++) {
            btn_notdog[i].onclick = function() {
                third_data.dogs[i].isDogClicked =false;
                third_data.dogs[i].notDogClicked = true;
                third_data.dogs[i].isClicked = true;
                show.innerHTML = compiled(third_data);
                
                clickIsButton();
                clickNotButton();
            };
        }
    }
    clickIsButton();
    clickNotButton();
}

function isDogs() {
    dog_data.dogs = [];
    for(let i = 0; i < data.dogs.length; i++) {
        if (data.dogs[i].isDogClicked == true && data.dogs[i].flag == true) {
             dog_data.dogs.push(data.dogs[i]);
        }
    }
    for(let i = 0; i < second_data.dogs.length; i++) {
        if (second_data.dogs[i].isDogClicked == true && second_data.dogs[i].flag == true) {
            dog_data.dogs.push(second_data.dogs[i]);
        }
    }
    for(let i = 0; i < third_data.dogs.length; i++) {
        if (third_data.dogs[i].isDogClicked == true && third_data.dogs[i].flag == true) {
            dog_data.dogs.push(third_data.dogs[i]);
        }
    }
    show.innerHTML = compiled(dog_data);
}

function notDogs() {
    notDog_data.dogs = [];
    for(let i = 0; i < data.dogs.length; i++) {
        if (data.dogs[i].notDogClicked == true && data.dogs[i].flag == false) {
             notDog_data.dogs.push(data.dogs[i]);
        }
    }
    for(let i = 0; i < second_data.dogs.length; i++) {
        if (second_data.dogs[i].notDogClicked == true && second_data.dogs[i].flag == false) {
            notDog_data.dogs.push(second_data.dogs[i]);
        }
    }
    for(let i = 0; i < third_data.dogs.length; i++) {
        if (third_data.dogs[i].notDogClicked == true && third_data.dogs[i].flag == false) {
            notDog_data.dogs.push(third_data.dogs[i]);
        }
    }
    show.innerHTML = compiled(notDog_data);
}

function maybeDogs() {
    maybeDog_data.dogs = [];
    for(let i = 0; i < data.dogs.length; i++) {
        if (data.dogs[i].isDogClicked == false && data.dogs[i].notDogClicked == false) {
             maybeDog_data.dogs.push(data.dogs[i]);
        }
    }
    for(let i = 0; i < second_data.dogs.length; i++) {
        if (second_data.dogs[i].isDogClicked == false && second_data.dogs[i].notDogClicked == false) {
            maybeDog_data.dogs.push(second_data.dogs[i]);
        }
    }
    for(let i = 0; i < third_data.dogs.length; i++) {
        if (third_data.dogs[i].isDogClicked == false && third_data.dogs[i].notDogClicked == false) {
            maybeDog_data.dogs.push(third_data.dogs[i]);
        }
    }
    show.innerHTML = compiled(maybeDog_data);
}

clickFirstPage();




