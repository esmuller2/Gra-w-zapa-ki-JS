const pokaz=document.getElementById('pokaz');
const gra=document.getElementById('gra');
const pojemnik=document.getElementById('pojemnik');
const zdj1=document.getElementById('zdj1')
const zdj2=document.getElementById('zdj2')
const zdj3=document.getElementById('zdj3')
const wpisz=document.getElementById('wpisz');
pokaz.addEventListener("click",()=>{
    if(pojemnik.style.display=="none")
    {
        pojemnik.style.display="block";
    }
    else
        pojemnik.style.display="none";
})

let ilosc;
let proba=0;
let gracz1;
let gracz2;
let razy=0;
gra.addEventListener("click",()=>{
     gracz1=prompt("Podaj nazwe1: ");
     gracz2=prompt("Podaj nazwę2: ");
    ilosc=parseInt(prompt("Podaj ilosc zapalek"));
    wpisz.innerHTML+='Teraz gracz: '+gracz1;
    wpisz.innerHTML+='\n Zostalo: '+ilosc;
    if(razy==0)
    {
    zdj1.addEventListener("click",()=>{
        zapalki(1);
    })
    zdj2.addEventListener("click",()=>{
        zapalki(2);
    })
    zdj3.addEventListener("click",()=>{
        zapalki(3);
    })
    }
    razy++;
})
function zapalki(i)
{
    wpisz.innerHTML="";
    ilosc-=i;
    console.log(proba)
    if(ilosc<0)
    {
        alert("Nie ma takiej");
        ilosc+=i;
        proba--;
    }
    if(ilosc==0)
    {
        wpisz.innerHTML="";
        if(proba%2==0)
        {
            alert("przegral gracz: "+gracz1);
        }
        else if(proba%2==1)
        {
            alert("przegral gracz: "+gracz2)
        }
        proba=0
    }
    else
    {
        wpisz.innerHTML+='\n  Zostalo: '+ilosc+'\n';
        proba++;
    }
    if(proba%2==0 && ilosc!=0)
    {
        wpisz.innerHTML+='Teraz gracz: '+gracz1;  
    }
    else if(proba%2==1 && ilosc!=0)
    {
        wpisz.innerHTML+='Teraz gracz: '+gracz2;
    }
    
}