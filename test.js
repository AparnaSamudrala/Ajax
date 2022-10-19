const message = document.getElementById("error");
message.style.visibility = "hidden";
function calculate(){

    message.innerHTML = "";
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var operation = document.querySelector('input[name="arithmetic"]:checked').value;
    
    try{
        if(num1 == "" || num2 == "")  throw "Empty";  
        else if(isNaN(num1) || isNaN(num2)) throw "Not a number";
        else if(num2 == 0 && operation == "div")  throw "Indivisible by zero";
        else if(num1 > 1000000000 || num2 > 1000000000 )   throw "Out of Range";
    }
    catch(err) {
       
        message.innerHTML = "Input is  " + err;
      }
      num1 = Number.parseInt(num1);
      num2 = Number.parseInt(num2);
      let p = document.getElementById('res');
      /* Displaying Custom Error Message  */
      if(message.innerHTML != ""){
        message.style.visibility = "visible";
        console.log("Error Message"+message.innerHTML);
        
        p.classList.remove('brd-green');
        p.classList.add('brd-red');
    }

    else{
        message.style.visibility = "hidden";
        p.classList.add('brd-green');
        p.classList.remove('brd-red');
    }

    /* Arithmetic calculator */
    switch(operation){

        case 'add' : return  document.getElementById('res').innerHTML = num1 + num2;
        break;
        case 'sub' : return  document.getElementById('res').innerHTML = num1 - num2;
        break;
        case 'mul' : return  document.getElementById('res').innerHTML = num1 * num2;
        break;
        case 'div' : return  document.getElementById('res').innerHTML = num1 / num2;
        break;
    }
   
  }

