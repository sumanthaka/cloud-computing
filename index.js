window.addEventListener("load", ()=>{
    let path = window.location.pathname.split('/').pop().split('.')[0]
    let button = document.getElementById(path)
    button.classList.add("active")
})