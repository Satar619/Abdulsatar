// Import data from data file
import {
  data
} from "data.js";

// Select div where to append books data
// let container = $(".box-container");
let container = document.querySelector(".container");

// Loop over books data and append new divs accordingly
for (let i = 0; i < cookies.length; i++) {
  // Create new div
  let items = document.createElement("div");
  // Add class card
  items.classList.add("items");

  // Add individual Book details in div
  items.innerHTML = `
  <img src=${data[i].img}>
  <h3>${data[i].name}</h3>
  <h4>${data[i].posation}</h4>
  <ul>
  <li>${data.skils[i].first}</li>
  <li>${data.skils[i].second}</li>
</ul>
  `;
  // Append div to .slider-container
  container.append(items);
}