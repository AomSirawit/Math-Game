//random number
let n1 = Math.floor(Math.random()*20+1);
let n2 = Math.floor(Math.random()*20+1);

document.getElementById("intext1").value = n1;
document.getElementById("intext2").value = n2;
//calculate answer
let answer = n1 + n2;
function checkAnswer(){
    var user = document.getElementById("answer").value;

    if( user == answer){
        document.getElementById("result").innerHTML = "คำตอบถูกต้อง!!!";

    }else{
        document.getElementById("result").innerHTML = "คำตอบผิด!!!"+ " คำตอบที่ถูกคือ "+ answer;

    }
    var user = document.getElementById("answer").value = "";
    n1 = Math.floor(Math.random()*20+1);
    n2 = Math.floor(Math.random()*20+1);

    document.getElementById("intext1").value = n1;
    document.getElementById("intext2").value = n2;

    answer = n1 + n2;
    
}
    