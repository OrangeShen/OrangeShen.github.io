'use strict'

var UP = {};
var div = document.getElementById("div");
var username = document.getElementById("username");
var passwd = document.getElementById("passwd");
var warn = document.getElementById("warning")
var signin = document.getElementById("button").firstElementChild;
var signup = document.getElementById("button").lastElementChild;

warn.innerText = "if you haven't sign up,enter your username and password and click sign up. if you already signed up, use your username and password to sign up.";

signin.onclick = function() {
    var uv = username.value;
    var pv = passwd.value;
    if (UP.hasOwnProperty(uv)) {
        if (UP[uv] == pv) {
            warn.innerText = "login success!";
            
        }else {
            warn.innerText = "wrong password";
        }
    }else {
        warn.innerText = "you haven't sign up yet";
    }
}

signup.onclick = function() {
    if (!UP.hasOwnProperty(uv)) {
        var uv = username.value;
        var pv = passwd.value;
        UP[uv] = pv;
        warn.innerText = "sign up successfully!";
    }else {
        warn.innerText = "you have already signed up";
    }
}
