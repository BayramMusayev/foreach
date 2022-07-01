
//1 FOREACH
// let inp = document.getElementById('inp')
// let arr = [];
// let list = document.getElementById('list');
// function dataAdd(){
//     arr.push(inp.value);
//     inp.value = "";
//     let data = '';
//    arr.forEach( (item)=> {
//     data += `<li class="list-group-item">${item}</li>`
//    });
//    list.innerHTML= data;
// }
 

//2 FOR

// let inp = document.getElementById('inp')
// let arr = [];
// let list = document.getElementById('list');
// function dataAdd(){
//     arr.push(inp.value);
//     inp.value = "";
//     let data = '';
    
//     for (let i = 0; i < arr.length; i++) {
//        data += `<li class="list-group-item">${arr[i]}</li>`
      
//     }
   
//    list.innerHTML= data;
// }

//3 FOR IN

// let inp = document.getElementById('inp')
// let arr = [];
// let list = document.getElementById('list');
// function dataAdd(){
//     arr.push(inp.value);
//     inp.value = "";
//     let data = '';
    
//     for (const key in arr) {
//         data += `<li class="list-group-item">${arr[key]}</li>`
//     }
   
//    list.innerHTML= data;
// }


let inp = document.getElementById('inp')
let arr = [];
let list = document.getElementById('list');
function dataAdd(){
    arr.push(inp.value);
    inp.value = "";
    let data = '';
    
 for (const key of arr) {
    data += `<li class="list-group-item">${key}</li>`
 }
   
   list.innerHTML= data;
}




