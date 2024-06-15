
let mylocation = "cairo";

 
display(mylocation);

function searchelement(){
  var term = document.getElementById("searching").value;
    console.log(term);

    searchlocation(term);

  
 }


 function searchlocation(slocation){
  var slocation;
  var locationinfo = [];
  let request = new XMLHttpRequest();
  let web = "https://api.weatherapi.com/v1/search.json?key=0c8be0d8307148818e5112159241406&q="+slocation
  request.open("GET",web);
  request.send();
  request.addEventListener('readystatechange', function(){
  if (request.readyState==4){
     
    console.log(request.readyState);
    locationinfo = JSON.parse(request.response);
      console.log(locationinfo);
      //console.log(locationinfo[0].name);
      if(slocation !=""){

        display(locationinfo[0].name);
        
      }

      else{
        display(mylocation);
      }
    

  }
 
  }


 )

 }




function display(mylocation1){


var threedaystemp = [];
var mylocation1;
let req = new XMLHttpRequest();

let site= "https://api.weatherapi.com/v1/forecast.json?key=0c8be0d8307148818e5112159241406&q="+mylocation1+"&days=3";
req.open("GET",site);
req.send();
req.addEventListener('readystatechange', function(){
  if(req.readyState==4)
    {
      console.log(req.readyState);
      threedaystemp = JSON.parse(req.response);
      console.log(threedaystemp);
      let todaydate = threedaystemp.forecast.forecastday[0].date;
  let tomorrowdate = threedaystemp.forecast.forecastday[1].date;
  let AfterTodate = threedaystemp.forecast.forecastday[2].date;
  let city = threedaystemp.location.name;
  let currenttemp = threedaystemp.current.temp_c;
  let imgicon ="https:"+threedaystemp.current.condition.icon;
  let tomimgicon = "https:"+threedaystemp.forecast.forecastday[1].day.condition.icon;
  let atomimgicon = "https:"+threedaystemp.forecast.forecastday[2].day.condition.icon;
  let condition = threedaystemp.current.condition.text;
  let wind = Math.round(threedaystemp.current.wind_kph) ;
  let winddir = threedaystemp.current.wind_dir;
  let winddeg = threedaystemp.current.wind_degree;
  let tomorrowctemp = threedaystemp.forecast.forecastday[1].day.avgtemp_c;
  let tomorrowftemp = threedaystemp.forecast.forecastday[1].day.avgtemp_f;
  let atomorrowctemp = threedaystemp.forecast.forecastday[2].day.avgtemp_c;
  let atomorrowftemp = threedaystemp.forecast.forecastday[2].day.avgtemp_f;
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //
 
  if((day+1)>6){
   var tomorrow = Number(day+1-7);

 }
 else{
  var tomorrow = Number(day+1);
  }

  console.log(tomorrow);
 if((day+2)>6)
  {
    var aftertomorrow = Number(day+2-7);
  }
  else{
    var aftertomorrow = Number(day+2);
  }


  let cartona=`
  <div class="row my-5 g-2 ">
  <div class="col-md-4 bg-dark rounded-3 border-end border-bottom border-top border-start">
    <div>
      <div class="row justify-content-between p-2 bg-black rounded-3 ">
         <div class="col-6">
           <h6>${daylist[day]}</h6>
         </div> 

         <div class="col-6">
          <h6>${todaydate}</h6>
         </div> 

      </div>
          <div class="p-3 text-light">
       <h6>${city}</h6>
       </div>
       <div class="p-3">
       <h2>${currenttemp} C</h2>
       </div>
       <img src=${imgicon} alt=" condition " >
       <div class="p-3 text-primary">
       <p>${condition}</P>
       </div>

    </div>
  <div>
    <div class="row justify-content-between p-2  rounded-3">
      <div class="col-4">
        <p>${winddeg}</p>
      </div> 

      <div class="col-4">
       <p>${wind} km/h</p>
      </div> 

      <div class="col-4">
        <p>${winddir}</p>
       </div> 

  </div>
  </div>





</div>

<div class="col-md-4 bg-dark rounded-3 border-end border-bottom border-top border-start">
<div>
<div class="row justify-content-between p-2 bg-black rounded-3">
 <div class="col-6">
   <h6>${daylist[tomorrow]}</h6>
 </div> 

 <div class="col-6">
  <h6>${tomorrowdate}</h6>
 </div> 

</div>
 <div class="text-center p-2">
 <div class ="py-3" >
 <img src=${tomimgicon} alt=" condition " >
 </div>
<h4 class= "m-3">${tomorrowctemp} C</h4>
<h5>${tomorrowftemp} F</h5>
</div>

</div>
<div>
<div class="row justify-content-between p-2  rounded-3">
<div class="col-3">
<h6></h6>
</div> 

<div class="col-3">
<h6></h6>
</div> 

<div class="col-3">
<h6></h6>
</div> 

</div>
</div>





</div>



<div class="col-md-4 bg-dark rounded-3 border-end border-bottom border-top border-start">
<div>
<div class="row justify-content-between p-2 bg-black rounded-3">
 <div class="col-6">
   <h6>${daylist[aftertomorrow]}</h6>
 </div> 

 <div class="col-6">
  <h6>${AfterTodate}</h6>
 </div> 

</div>

<div>
<div class="text-center p-2">
<div class ="py-3" >
<img src=${atomimgicon} alt=" condition " >
</div>
<h4 class= "m-3">${atomorrowctemp} C</h4>
<h5>${atomorrowftemp} F</h5>
</div>

</div>
<div>
<div class="row justify-content-between p-2  rounded-3">
<div class="col-3">
<h6></h6>
</div> 

<div class="col-3">
<h6></h6>
</div> 

<div class="col-3">
<h6></h6>
</div> 

</div>
</div>





</div>
</div>
</div>
  
  `;

 

  document.querySelector('.temp').innerHTML = cartona;
      
      
    
     
     
    }

})

}