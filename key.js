const color = document.getElementById("color");
const q = document.getElementById("q");
const w = document.getElementById("w");
const e = document.getElementById("e");
const r = document.getElementById("r");
const t = document.getElementById("t");
const y = document.getElementById("y");
const u = document.getElementById("u");
const i = document.getElementById("i");
const o = document.getElementById("i");
const p = document.getElementById("i");

let key = [];

// color.addEventListener("click", (event) => {
//   id = event.target;
//   console.log(id.id);
//   id.id.addEventListener("keypress", (event) => {
//         console.log(event)q
//   });
// });
addEventListener("keydown", (event) => {
  console.log(event.key);
  hoverKey(event.key);
});

hoverKey = (id) => {
  key.push(id);
  document.getElementById(`${id}`).classList.add("hoverKey");
  // console.log(key)
  // if(key[0] == id){
  // }

  if (key.length > 1) {
    console.log(`array`, key);
    if (key[0] == id) {
      key.shift();
      console.log(`shift`, key);
    }
    // console.log(`arr after pop`, key);
    if (key[0] != key.at(-1)) {
      console.log(`removed`, key[0]);
      document.getElementById(`${key[0]}`).classList.remove("hoverKey");
      key.shift();
      console.log(`next shift`, key);
    }
  }
  console.log(`current arr`, key);
};
