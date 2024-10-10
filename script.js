var err = document.getElementById("err1)
 function check(){
    try {
        alsrt("button clicked")
    } catch (error) {
        consloe.log(error.message)
        err1.innertext=error.message
    }

 }



 function display(){
    var inp = document.getElementById('vo1').value;
 var err2 = document.getElementById('err2');
    consloe.log("btn clicked");
    try{
        if(inp=="") throw"box cannot be empty"
        if(isNaN(inp))throw"value is not a number"
        if(inp<10) throw"value cannot be less than 10"
        if(inp<20) throw"value cannot be greater than 20"
    } catch(error){
     console.log(error)
     err2.innertest=error

    }
    finally{
        inp.innerTest=""
    }

 }

 