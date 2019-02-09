
window.onload = initAll

function initAll(){
    document.getElementById('btn-2').onclick = clickHandler;
    document.getElementById('btn-1').onclick = nameHandler;
}

function clickHandler() {
    if(confirm("Do you want to proceed to script.html?")) {
        alert("You said yes");
    }else{
        alert("You said no");
    }
    window.location= 'script.html';
    return false;
};

function nameHandler() {
    var ans = prompt("What is your name?","");
    document.querySelector('#welcome-card').innerHTML ='Welcome ' + ans;
    return true;
};



// document.querySelector('#welcome-card').InnerHTML = '<h1>' + name '</h1>';