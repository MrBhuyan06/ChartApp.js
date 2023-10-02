// const { log } = require("console");

const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const msgInp = document.getElementById("messageInp");
const msgCon = document.querySelector(".container");
console.log("sasa", msgCon);
let appendFun = (message) => {
  const msgEle = document.createElement("div");
  msgEle.innerText = message;
  console.log(message);
  console.log(msgEle);
  // msgEle.classList.add('.m')sdwdw
  msgCon.append(msgEle);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = msgInp.value;
  appendFun(`you :${msg}`);
  socket.emit("send", msg);
  msgInp.value = "";
});
const name = prompt("Enter your name to join");
console.log(name);
socket.emit("new-user-joined", name);
socket.on("user-joined", (name) => {
  appendFun(`${name} joined the chart`);
});
socket.on(`receive`, (data) => {
  appendFun(`${data.name}:${data.message}`);
});
