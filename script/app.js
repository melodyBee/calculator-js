function getnum(num){
    document.getElementById('result').value += num;
}
function clearNum(){
    document.getElementById('result').value='';
}
function remove(){
    var res = document.getElementById('result').value;
    document.getElementById('result').value =document.getElementById('result').value.slice(0,res.length-1);
}
function result(){
    document.getElementById('result').value = eval(document.getElementById('result').value)
}


