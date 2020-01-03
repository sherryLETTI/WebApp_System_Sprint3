"use strict";

var tableBody = document.querySelector("tbody");

var requestURL = "testdata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL, true);
request.responseType = "json";
request.send();

request.onload = function() {
    var data = request.response;

    for(var i = 0; i < data["lecturer"].length; i++) {
        createTable(data, i);
    }
};

function searchInput() {
    var value = document.getElementById("input").value;
    var data = request.response;
    var list;

    while(list = document.getElementById("dataset"))
        list.remove();

    for(var i in data["lecturer"]) {
        for (var j in data["lecturer"][i]) {
            if (data["lecturer"][i][j].toLowerCase().includes(value.toLowerCase())) {
                createTable(data, i);
                break;
            }
        }
    }
}

function createTable(data, i) {
    var tBodyTR = document.createElement("tr");
    tBodyTR.setAttribute("id", "dataset");
    var tBodyTD1 = document.createElement("td");
    var tBodyTD2 = document.createElement("td");
    var tBodyTD3 = document.createElement("td");
    var tBodyTD4 = document.createElement("td");
    var tBodyTD5 = document.createElement("td");
    tableBody.appendChild(tBodyTR);
    tBodyTD1.textContent = data["lecturer"][i]["firstname"];
    tBodyTD2.textContent = data["lecturer"][i]["lastname"];
    tBodyTD3.textContent = data["lecturer"][i]["department"];
    tBodyTD4.textContent = data["lecturer"][i]["office"];
    tBodyTD5.textContent = data["lecturer"][i]["worktime"];
    tBodyTR.appendChild(tBodyTD1);
    tBodyTR.appendChild(tBodyTD2);
    tBodyTR.appendChild(tBodyTD3);
    tBodyTR.appendChild(tBodyTD4);
    tBodyTR.appendChild(tBodyTD5);
}

function printTable() {
    document.getElementById("printButton").style.visibility = "hidden";
    document.getElementById("searchField").style.visibility = "hidden";
    window.print();
    document.getElementById("printButton").style.visibility = "visible";
    document.getElementById("searchField").style.visibility = "visible";
}
