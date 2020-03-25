const showTime = () => {
  let time = document.getElementById("time");
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  //Add extra zeros on single digits
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Display time on the page
  time.innerHTML = `${h}:${m}:${s}`;
};

setInterval(showTime, 1000);
