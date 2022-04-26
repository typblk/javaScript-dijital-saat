let Name = prompt("Adınızı Yazınız");
let myName= document.querySelector("#myName")

myName.innerHTML = `${Name.toUpperCase()}!`


function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    
    document.getElementById('myClock').innerHTML = hour + ":" + minute + ":" + second;

     
};

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
};



const d = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[d.getDay()];

setInterval(clock, 1000);

