/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let desc = Math.floor(Math.random() * 6);
let who = [
  "the dog",
  "my granma",
  "his turtle",
  "my bird",
  "the alligator",
  "a shark"
];
let whoPick = who[desc];

let desc2 = Math.floor(Math.random() * 6);
let what = [
  "ate it",
  "pissed on it",
  "crushed it",
  "broke it",
  "squished it",
  "freightened it away"
];
let whatPick = what[desc2];

let desc3 = Math.floor(Math.random() * 6);
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "on my way here"
];
let whenPick = when[desc3];

let excuse = whoPick + " " + whatPick + " " + whenPick;

document.body.querySelector("#excuse").innerHTML = excuse;
