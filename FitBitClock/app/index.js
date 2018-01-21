'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clock = _interopDefault(require('clock'));
var document = _interopDefault(require('document'));
var userSettings = require('user-settings');

function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

clock.granularity = "minutes";
var myLabel1 = document.getElementById("myLabel1");
var myLabel2 = document.getElementById("myLabel2");
var myLabel3 = document.getElementById("myLabel3");
clock.ontick = function (evt) {
    var today = evt.date;
    var hours = today.getHours();
    if (userSettings.preferences.clockDisplay === "12h") {
        hours = hours % 12 || 12;
    }
    else {
        hours = zeroPad(hours);
    }
    var mins = zeroPad(today.getMinutes());
    myLabel1.text = "Have a wonderful";
    myLabel2.text = "Amazing day!";
    myLabel3.text = hours + ":" + mins;
};
