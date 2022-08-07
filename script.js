let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.map((btn)=>{
    btn.addEventListener('click',(event)=>{
        let key = event.target.innerText;
        
        if(key =='C'){
            display.innerText="";
        }
        else if(key=="DEL"){
            display.innerText = display.innerText.slice(0,-1);

        }else if(key=="√"){
            display.innerText = Math.sqrt(display.innerText);

        }else if(key=="x²"){
            display.innerText = display.innerText ** 2;

        }else if(key=="π"){
            display.innerText = Math.PI*(display.innerText);

        }else if(key=="%"){
            display.innerText = (display.innerText)/100;

        }else if(key=="sin"){
            display.innerText = Math.sin(display.innerText);

        }else if(key=="cos"){
            display.innerText = Math.cos(display.innerText);

        }else if(key=="tan"){
            display.innerText = Math.tan(display.innerText);

        }else if(key=="log"){
            display.innerText = Math.log(display.innerText);

        }else if(key=="x!"){
            
            let fact = 1;
            for(let  i = display.innerText; i>0 ; i--){
                fact = fact*i;
            }
            display.innerText = fact;

        }else if(key=="±"){
            display.innerText = -1*(display.innerText);

        }else if(key=="x^"){
            let j =display.innerText;
            display.innerText = display.innerText ** j;

        }
        
        else if(key=='='){
            display.innerText = eval(display.innerText);
        }
        else{
            display.innerText += key;
        }
    })
})