import { Server } from "http";

console.log("connected");
const listItem = document.querySelector("ul");
//select Element//listening for events//manipulating elements


listItem.addEventListener("click", function (event) {
    console.log(event.target);
    fetch("/delete/", +event.target.id, { method: "delete" })
        .then(res => {
            res.json();
        });
        .then(() => { }
        event.target.parentNode.removeChild(event.target)
    }
});