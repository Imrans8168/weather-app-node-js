const submitBtn= document.getElementById('submitBtn');
const cityName= document.getElementById("cityname");
const temp=document.getElementById("temp");
const city_name= document.getElementById('city_name');



const getinfo = async(event)=>{
   
    let cityval= cityName.value; 
    event.preventDefault();

   if(cityval=== ""){
    city_name.innerText ="Plz Enter City Name"
   }
   else{
       try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=ec8b9c004d182b50408a29e0e5984d67`;
        const response = await fetch(url);
        const data = await response.json();
           const arrData=[data];

     

           city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText =`${arrData[0].main.temp}°C`;

       }
       catch{
        city_name.innerText ="Plz Enter City Name"
       }
    
    }

}
submitBtn.addEventListener('click', getinfo);
