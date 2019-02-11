
window.onload = initAll

function initAll(){
    document.getElementById('btn-2').onclick = clickHandler;
    document.getElementById('btn-1').onclick = nameHandler;
}

function clickHandler(event) {
    if(confirm("Do you want to proceed to script.html?")
    ) {
        alert("You said yes");
        return true;
    }else{
        alert("You said no");
        event.preventDefault();
        return false;
    }
    
};

function nameHandler() {
    var ans = prompt("What is your name?","");
    document.querySelector('#welcome-card').innerHTML ='Welcome ' + ans;
    return true;
};
