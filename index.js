let money = document.getElementById(`paisa`);
// paisa = 1000000
let balance = document.getElementById(`balance`);
// initial = 0
let interest = document.getElementById(`interest`);
// initial = 0
let entry = document.getElementById(`entry`);
// input amount
var fd, int;
const pin = 1111;
let enterPin;

function deposit(){
    enterPin = prompt(`Enter your pin number: `);
    if(enterPin == pin){
        if(parseInt(entry.value) > money.innerHTML){
            alert(`Invalid Amount!`);
            entry.value=``;
        }
        else{
            money.innerHTML = money.innerHTML - entry.value;
            fd = parseInt(balance.innerHTML) + parseInt(entry.value);
            balance.innerHTML = fd;
            entry.value=``;
            int = (balance.innerHTML*3)/100;
            interest.innerHTML = int;
        }
    }
    else{
        alert(`Invalid pin!`);
        entry.value=``;
    }
}

function withdraw(){
    enterPin = prompt(`Enter your pin number: `);
    if(enterPin == pin){
        if(entry.value > balance.innerHTML){
            alert(`Invalid Amount!`);
            entry.value=``;
        }
        else{
            fd = parseInt(balance.innerHTML) - entry.value;
            balance.innerHTML = fd;
            money.innerHTML = parseInt(money.innerHTML) + parseInt(entry.value);
            entry.value=``;
            int = (balance.innerHTML*3)/100;
            interest.innerHTML = int;
        }
    }
    else{
        alert(`Invalid Pin!`);
        entry.value=``;
    }
}
    