import "./style.css";

import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {});
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello! ");
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let subject = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    when[whenIndex]
  );
};
