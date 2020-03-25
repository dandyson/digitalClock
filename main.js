const addZero = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const showTime = () => {
  let time = document.getElementById("time");
  let d = new Date();
  let n = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  //Display time on the page
  time.innerHTML = `${n}:${m}.${s}`;
};

showTime();
setInterval(showTime, 1000);
