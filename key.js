const color = document.getElementById("color");
const q = document.getElementById('q')
const w = document.getElementById('w')
const e = document.getElementById('e')
const r = document.getElementById('r')
const t = document.getElementById('t')
const y = document.getElementById('y')
const u = document.getElementById('u')
const i = document.getElementById('i')
const o = document.getElementById('i')
const p = document.getElementById('i')

let key = [];

// color.addEventListener("click", (event) => {
//   id = event.target;
//   console.log(id.id);
//   id.id.addEventListener("keypress", (event) => {
//         console.log(event)q
//   });
// });
hoverKey = (id) => {
    key.push(id)
    document.getElementById(`${id}`).classList.add('hoverKey')
    // console.log(key)
    // if(key[0] == id){
    // }
    if(key.length > 1){
        console.log(key)
        if(key[0] !== key[1]){
            document.getElementById(`${key[0]}`).classList.remove('hoverKey')
            key.shift()
        }
    }
}

addEventListener('keydown',(event) => {
    console.log(event.key)
    hoverKey(event.key)
})

console.log(key)


