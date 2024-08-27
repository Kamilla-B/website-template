var factList = [
  "The Buryat language is one of the world's endangered languages.",/*0*/
  "Ninety percent of children in America attend public school",/*1*/
  "As of 2013, then, about 40 percent of American school-kids were low-income",/*2*/
  "Funding is largely dependent on property taxes, which vary based on the area, causing a disbalance in funding of public schools."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

