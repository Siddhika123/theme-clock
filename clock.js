const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');
const timeel=document.querySelector('.time');
const dateel=document.querySelector('.date');
const toggle=document.querySelector('.toggle');

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]

toggle.addEventListener('click',(e)=>{
  const html=document.querySelector('html');

    if(html.classList.contains('dark'))
    {
      html.classList.remove('dark');
      e.target.innerHTML='Dark Mode';
    }
    else{
      html.classList.add('dark');
        e.target.innerHTML='Light Mode';
    }

})
function setTime(){
  const time=new Date();
  const month=time.getMonth();
  const day=time.getDay();
  const date=time.getDate();
  const hours=time.getHours();
  const hoursforclock=hours %12;
  const min=time.getMinutes();
  const sec=time.getSeconds();
  const ampm=hours>=12?'PM':'AM';

  hour.style.transform=`translate(-50%,-100%) rotate(${scale(hoursforclock,0,11,0,360)}deg)`
  minute.style.transform=`translate(-50%,-100%) rotate(${scale(min,0,59,0,360)}deg)`
  second.style.transform=`translate(-50%,-100%) rotate(${scale(sec,0,59,0,360)}deg)`


  timeel.innerHTML=`${hoursforclock}:${min<10?`0$ {min}` :min}${ampm} `
  dateel.innerHTML=`${days[day]},${months[month]}<span class="circle">${date}</span>`
}
const scale= (number, inMin, inMax, outMin, outMax)=> {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime();

setInterval(setTime,1000);
