var increase = document.getElementById("inc");
var decrease = document.getElementById("dec");
var reset = document.getElementById("res");
var value = document.getElementById("value")
var count = value.innerHTML;

increase.addEventListener("click" , () => {
    let newCount = ++count;
    if(newCount <= 20 ){
    value.innerHTML = newCount;
    }else{
    value.innerHTML = "MAX INC LIMIT REACHED";
    }
})

decrease.addEventListener("click" , () => {
    let newCount = --count;
    if(newCount >= -20 ){
    value.innerHTML = newCount;
    }else{
    value.innerHTML = "MAX DEC LIMIT REACHED";
    }
})

reset.addEventListener("click" , () => {
    count = 0;
    value.innerHTML = count;
})