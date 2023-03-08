
//document.getElementById("count").innerText=5

/*let count=0
count=1

console.log(count)*/

/*function increment()
{
    console.log("yo")
}*/

/*let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}*/

let count=0

function increment(){
    count=count+1
    document.getElementById("count").textContent=count
}

let saveEl=document.getElementById("save-el")

function save(){
    let cntStr=count+" - "
    saveEl.textContent+=cntStr
    count=0
}
