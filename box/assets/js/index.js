// Import data from assets/data/data.js
import {
  data
} from "../data/data.js";

// Select div where to append data
let container = document.querySelector(".box-container");

// Loop over cookies data and append new divs accordingly
for (let i = 0; i < data.length; i++) {
  // Create new div
  let div = document.createElement("div");
  // Add class card
  div.classList.add("card");

  // Add individual details in div
  div.innerHTML = `
  <img src=${data[i].image}>
  <h3>${data[i].name}</h3>
  <h4>${data[i].posation}</h4>
  <h5>${data[i].S1}</h5>
  <h5>${data[i].S2}</h5>
  <h5>${data[i].S3}</h5>
  `
  
  // Append div to .box-container
  container.append(div);
}