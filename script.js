let textDiv=document.querySelector('.text-div');
let keys=document.querySelectorAll('.key');
let reset=document.querySelector('.reset');
var str="";
function letterConcat(letter){
    str+=letter;
    textDiv.innerHTML=str;
}
for(let i=0;i<keys.length;i++)
{
    keys[i].addEventListener('click',function (event) {
        let letter=event.target.innerHTML;
        letterConcat(letter);
    })
}
reset.addEventListener('click',function(){
    str="";
    textDiv.innerHTML=str;
})
