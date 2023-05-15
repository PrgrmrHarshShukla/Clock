function get () {
   let a = new Date()
   // console.log(a);
   // console.log(typeof a);
   
   let hour = a.getHours()
   // console.log(hour)
   
   let min = a.getMinutes()
   // console.log(min)
   let sec = a.getSeconds()
   // console.log(sec)
   
   let day = a.getDay()
   let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   // console.log(dayName[day])
   // console.log(typeof day)
   
   let date = a.getDate()
   // console.log(date)
   
   let month = a.getMonth()
   const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   // console.log(monthsName[month])
   
   let year = a.getFullYear()
   // console.log(year)
   
   let element = document.getElementById("dc0")
   element.innerHTML = dayName[day]
   
   let el = document.getElementById("dc1")
   el.innerHTML = `${date} ${monthsName[month]} ${year}`

   let el1 = document.getElementById("dc2")
   el1.innerHTML = `${hour}:${min}:${sec}`


   }
   
   get();
   // console.log(Date());
   
   setInterval(get, 1000);
   
   
   
   