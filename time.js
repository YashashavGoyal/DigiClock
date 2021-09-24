
function getId(elem) {
  id = elem.id
  console.log(id)
}
function setTimeZone() {
  tZone = document.getElementById(id).value
  console.log(tZone);
  localStorage.setItem("tZone", `${tZone}`)
}

let a;
let time;
let date;
let calender = "<i class='far fa-calendar-alt'></i>";
let Options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', }

timeManager = () =>{
  if (localStorage.getItem('tZone') == null) {
    let Options1 = { hour: '2-digit', hour12: true, minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' }
    setInterval(() => {
      a = new Date();
      date = a.toLocaleDateString(undefined, Options);
      time = a.toLocaleString('en-us', Options1)
      document.getElementById('time').innerHTML = "<strong>" + time + "</strong><br>" + calender + " On<strong> " + date + "</strong>"
    }, 1000);
    document.querySelector('#TimeZ').innerHTML = "The Following Time is of Asia-Kolkata Means Of India"    
  } else {
    let Options1 = { hour: '2-digit', hour12: true, minute: '2-digit', second: '2-digit', timeZone: localStorage.getItem('tZone') }
    setInterval(() => {
      a = new Date();
      date = a.toLocaleDateString(undefined, Options);
      time = a.toLocaleString('en-us', Options1)
      document.getElementById('time').innerHTML = "<strong>" + time + "</strong><br>" + calender + " On<strong> " + date + "</strong>"
    }, 1000);
    document.querySelector('#TimeZ').innerHTML = "The following Time is of <strong>" + localStorage.getItem('tZone') + "</strong>"
  }
}
setTimeout(timeManager, 1)
