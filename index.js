const dy=document.getElementById("dayy");
const hr=document.getElementById("hourr");
const min=document.getElementById("minutee");
const sec=document.getElementById("secondd");
const finalDate="28 May 2022";
// ids are very important for js

function countDown(){
    const uefaFinalDate=new Date(finalDate);
    // date ojbect has time in web browser 
    const currentDate=new Date();
    // math i floor removes those decimal pt ie milisec
    const totalSeconds=Math.floor((uefaFinalDate-currentDate)/1000);
    // heriarchy bsed flooring see modulus by the amount of the upperr value eg 24 moddulus for hours ,60 modulus for minutes
    const days=Math.floor(totalSeconds/3600/24);
    //modulusing becuase if we dont do it vo minutes of enitre 73 days kardega
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    console.log(days,hours,minutes,seconds);
    dy.innerHTML=formatTime(days);
    hr.innerHTML=formatTime(hours);
    min.innerHTML=formatTime(minutes);
    sec.innerHTML=formatTime(seconds);
}
// to display 09 08 07 instead of just 9 8 7
function formatTime(time){
    // return internally
    // time less than 10 then turn (then is ?) note the commas are different : means else return this

    // ? is a ternary operator it takes three values  condition ? True: False
    //$ is javascript identifier like underscore its y=used to detect function varibles within string
    //Template literals provide an easy way to interpolate variables and expressions into strings.

//The method is called string interpolation.

//The syntax is:

//${...}
// combination of $ and backtikcs``` is used
    return time<10 ? `0${time}`:time;
}
// intial calling of function
countDown();
// countdown function is just declared here as no pararenthesis we wawnt to call it every 1 sec
setInterval(countDown,1000);
