// time
let dayArr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let time= new(Date);
setInterval(() => {
  time= new(Date);
}, 60000);
  let hour= time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = dayArr[new Date().getDay()];  
document.querySelector(".time").innerHTML = (hour<10?'0':'')+hour + ":" +(min<10?'0':'')+ min +" - " + `<strong>${day}</strong>`;

