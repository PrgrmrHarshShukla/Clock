function get () {
   let a = new Date()
   
   let hour = a.getHours()
   
   let min = a.getMinutes()
   let sec = a.getSeconds()
   
   let day = a.getDay()
   let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   
   let date = a.getDate()
   
   let month = a.getMonth()
   const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
   let year = a.getFullYear()
   
   let element = document.getElementById("dc0")
   element.innerHTML = dayName[day]
   
   let el = document.getElementById("dc1")
   el.innerHTML = `${date} ${monthsName[month]} ${year}`

   let el1 = document.getElementById("dc2")
   el1.innerHTML = `${min} minutes ${sec} seconds past ${hour}`


   }
   
   get();
   
   setInterval(get, 1000);
   
   
   
   