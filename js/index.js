
const weekday = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
const MONTHS = ['Feburary', 'January', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];
document.addEventListener('DOMContentLoaded',function(){
  setInterval(clock_on,1000);
});

function clock_on(){
  let clock_am_pm = document.querySelector('.clock-am-pm');
  let clock_h_m = document.querySelector('.clock-h-m');
  let clock_s = document.querySelector('.clock-s');
  let clock_day = document.querySelector('.clock-day');
  let clock_date = document.querySelector('.clock-date');
  let clock_month = document.querySelector('.clock-month');

  let time = new Date();
  let hours = time.getHours() % 12 ? time.getHours() % 12 : 12;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let ampm = hours <= 12 ? 'PM' : 'AM';
  let day = weekday[time.getDay()];
  let date = time.getDate();
  let month = MONTHS[time.getMonth()];
  clock_am_pm.innerHTML = ampm;
  clock_h_m.innerHTML = harold(hours) + ":" + harold(minutes);
  clock_s.innerHTML = harold(seconds);
  clock_day.innerHTML = day;
  clock_date.innerHTML = date;
  clock_month.innerHTML = month;
}
function harold(standIn) {
  if (standIn < 10) {
    standIn = '0' + standIn
  }
  return standIn;
}
