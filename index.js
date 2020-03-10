window.onload = () =>{
    console.log("body onload check");
}
console.log("window block check");

let a = document.querySelector('#buttonID');
console.log(a);

a.addEventListener('click', (e) => {
    e.preventDefault()

    console.log("headב click check");
})

// onload works