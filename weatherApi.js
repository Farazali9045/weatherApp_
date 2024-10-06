
let btn = document.querySelector('#submit').addEventListener('click',function(){
    let input = document.querySelector("#Search").value
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '565bd307dcmsh182163660f9aa21p1481d0jsn7492818f5590',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    
    fetch(url,options).then(function(response){
        return response.json()
    }).then(function(data){
    
        let temp = document.querySelector("#temp").innerHTML = Math.ceil(data.current.temp_c)
        let humidity = document.querySelector("#humidity").innerHTML = Math.ceil(data.current.humidity)
        let windDegree = document.querySelector("#windDegree").innerHTML  = data.current.wind_degree
        let feels = document.querySelector("#feels").innerHTML = data.current.feelslike_c
        let windKM = document.querySelector("#windKM").innerHTML = Math.ceil(data.current.wind_kph) 
        let imgUrl = data.current.condition.icon
        let img = document.querySelector("img").setAttribute("src",`https:${imgUrl}`)
        let directionElement = document.querySelector("#direction") 
        let direction =  data.current.wind_dir
    

         if(direction === "S"){
            directionElement.innerHTML = "South"
         }else if(direction === "N"){
            directionElement.innerHTML = "North"
         }else if(direction === "W"){
            directionElement.innerHTML = "West"
         }else if(direction === "E"){
            directionElement.innerHTML = "East"
         }
         const month = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    

         const d = new Date();
         let date = document.querySelector("#date")
         date.innerHTML = `${month[d.getMonth()]} ${d.getDate()}`
         
         let timeString = data.location.localtime
         let timePart = timeString.split(' ')[1]; 
         let hour = parseInt(timePart.split(':')[0], 10); 
         let minute = parseInt(timePart.split(':')[1], 10);
         const time = document.querySelector("#time")
         time.innerHTML = `${hour}:${minute} ${hour>= 12 ? 'PM' : 'AM'}`
         console.log(hour,minute)
         let loc = document.querySelector("#loc")
         loc.innerHTML = `${data.location.name}, ${data.location.region}`
         let con = document.querySelector("#condition")
         con.innerHTML = `${data.current.condition.text}`
         let dew = document.querySelector('#dew')
         dew.innerHTML = `${data.current.dewpoint_c}`
         let windChill = document.querySelector("#windChill")
         windChill.innerHTML = `${data.current.windchill_c}`
         let pressure = document.querySelector("#pressure")
         pressure.innerHTML = `${data.current.pressure_mb}`
        console.log(data)
    }).catch(function(error){
        console.log(error)
    })
})

