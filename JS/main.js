//Functionality for increasing number gradually from 0 to 60%
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 60){
        clearInterval();
    }else{
         counter += 1;
    number.innerHTML = counter + "%";
    }
    
}, 30);