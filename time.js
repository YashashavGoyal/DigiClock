
function getId(elem) {
  id = elem.id
  console.log(id)
}
function setTimeZone() {
  tZone = document.getElementById(id).innerText
  console.log(tZone);
  localStorage.setItem("tZone", `${tZone}`)
}

let a;
let time;
let date;
let calender = "<i class='far fa-calendar-alt'></i>";
let Options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', }
let Options1 = { hour: '2-digit', hour12: true, minute: '2-digit', second: '2-digit', timeZone: localStorage.getItem('tZone') }
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, Options);
  time = a.toLocaleString('en-us', Options1)
  document.getElementById('time').innerHTML = "<strong>" + time + "</strong><br>" + calender + " On<strong> " + date + "</strong>"
}, 1000);

// strong = document.getElementById('TimeZ')
// console.log(strong.innerHTML)
hii = () =>{
  if (localStorage.getItem('tZone') == null) {
    document.querySelector('#TimeZ').innerHTML = "Select Any TimeZone to View Time"    
  } else {
    document.querySelector('#TimeZ').innerHTML = "The following Time is of <strong>" + localStorage.getItem('tZone') + "</strong>"
  }
}
setTimeout(hii, 2000)
