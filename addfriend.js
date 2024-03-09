const btn = document.querySelector("button")

const istatus = document.querySelector("h3")

var chk = 0;

btn.addEventListener('click', function(){
    istatus.innerHTML = "Please wait..."
    if(chk == 0){
        setTimeout(() => {
            istatus.innerHTML = '<i class="fa-solid fa-handshake"></i>'
            istatus.style.color = 'green'
            btn.style.backgroundColor = '#dadada'
            btn.style.color = 'black'
            btn.innerHTML = 'Friends'
            chk = 1
        }, 2000);
    }else {
        setTimeout(() => {
            istatus.innerHTML = 'Stranger'
            istatus.style.color = 'red'
            btn.style.backgroundColor = 'rgb(0, 255, 64)'
            btn.innerHTML = 'Add Friend'
            chk = 0
        }, 2000);
    }
})

