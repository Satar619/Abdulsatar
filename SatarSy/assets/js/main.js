// import {
//   projects
// } from "data/projects.js";


let audio, player;
player = document.getElementById('water')
player.addEventListener('click', click);
player.addEventListener('mouseover', mouseover);

function click() {
  audio = new Audio();
  audio.src = './assets/water.mp3';
  audio.loop = false;
  audio.play();
}

let audio, player;
player = document.querySelector('.fa-glass-martini-alt');
player.addEventListener('mouseover', function () {
  audio = new Audio();
  audio.src = './vendor/audio/water.mp3';
  audio.loop = false;
  audio.play();
})

// events and args should be of type Array
function addMultipleListeners(element,events,handler,useCapture,args){
  if (!(events instanceof Array)){
    throw 'addMultipleListeners: '+
          'please supply an array of eventstrings '+
          '(like ["click","mouseover"])';
  }
  //create a wrapper to be able to use additional arguments
  var handlerFn = function(e){
    handler.apply(this, args && args instanceof Array ? args : []);
  }
  for (var i=0;i<events.length;i+=1){
    element.addEventListener(events[i],handlerFn,useCapture);
  }
}

function handler(e) {
  // do things
  audio = new Audio();
  audio.src = './vendor/audio/water.mp3';
  audio.loop = false;
  audio.play();
};

// usage
addMultipleListeners(
  document.querySelector('.fa-glass-martini-alt'),
    ['mouseover','click'],
    handler,
    false);