// const { log } = require("console");

const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const msgInp = document.getElementById("messageInp");
const msgCon = document.querySelector(".container");
console.log("sasa", msgCon);
const append = (message, postion) => {
  const msgEle = document.createElement("div");
  msgEle.innerText = message;
  // msgEle.classList.add('.m')sdwdw
  msgCon.append(msgEle);
};

const name = prompt("Enter your name to join");
console.log(name);
socket.emit("new-user-joined", name);
socket.on("user-joined", (name) => {
  append(`${name} joined the chart`);
});
