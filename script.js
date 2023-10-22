let digitalClock = document.querySelector('.digitalClock')
let selectData = document.querySelectorAll('select')
let setalarm = document.querySelector('.setalarm')


let isAlarm, timeSet;
let ring = new Audio('alarm-clock-short-6402.mp3')

setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;


    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

    digitalClock.innerHTML = d.toLocaleTimeString();

    let ampm = "AM"
    if(htime>=12){
        htime = htime-12;
        ampm = "PM";
    }

    if (htime<=9){
        htime =`0${htime}`;
    }else{
        htime = htime;
    }
    if (mtime<=9){
        mtime =`0${mtime}`;
    }else{
        mtime = mtime;
    }

    if(isAlarm==`${htime}:${mtime} ${ampm}`){
        ring.play();
    } 
   
},1000)


for(let index = 12; index>=1; index--){
    if(index<=9){
        index = `0${index}`
    }else{
        index = index;
    }
    let option = `<option value = "${index}">${index}</option>`
    selectData[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let index = 59; index>=0; index--){
    if(index<=9){
        index = `0${index}`
    }else{
        index = index;
    }
    let option = `<option value = "${index}">${index}</option>`
    selectData[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let index = 0; index<2; index++){
    let ampm;
    if(index==1){
        ampm = "AM";
    }else{
        ampm = "PM" ;
    }
    let option = `<option value = "${ampm}">${ampm}</option>`
    selectData[2].firstElementChild.insertAdjacentHTML("afterend",option)
}

setalarm.addEventListener('click', ()=>{

    if(timeSet){
        ring.pause();
        isAlarm="";
        selectData.forEach((element)=>{
            element.classList.remove("disabled")
        });
        setalarm.innerText = "Set Alarm"
        return(timeSet = false);
    }


let time = `${selectData[0].value}:${selectData[1].value} ${selectData[2].value}`
isAlarm = time;
timeSet = true;

selectData.forEach((element)=>{
    element.classList.add("disabled")
})

setalarm.innerText= "Clear Alarm";
});