console.log("JavaScript Variables");
var global_var = 10;
function fun1(){
    var local_var = 13;
    console.log("this is global variable ",global_var);
}
try{
    console.log("This is Local Variable ",local_var);
}catch(err){
    console.warn("Local variable not found ",err.message);
}

fun1();