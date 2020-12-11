
let dayOne ;
let dayTwo ;
let dayThree;
let dayFour ;
let dayFive;

let days =[
 dayOne,
 dayTwo,
 dayThree,
 dayFour,
 dayFive,
];

let forecastDescription;
let fore1;
let fore2;
let fore3;
let fore4;
let fore5;


document.querySelector("#submit").addEventListener("click",(e) => {


e.preventDefault();

var city = document.getElementById("text").value;

fetchAPI(city);

});
  
fetchAPI = (city) =>{

  var key = '40fa2b86a012472b917084a043e9cbd1';

  fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
     
   .then (response => response.json ())  
   .then((data) => { console.log("response");    
     
   console.log(data);
   todayweather(city,data);
   forecast(data);
   chart(data);
     
 });

};
  
//getting today/now forecast
todayweather = (city,data) =>{
     
    let today = data.data[0].temp;
    let info =  data.data[0].weather.description;
          
    console.log(info);
    console.log (today);

document.getElementById("output").innerHTML =  city ;
document.getElementById("info").innerHTML =  `${today}°c `;
document.getElementById("info2").innerHTML= info ;
         

}       


//getting 5days forecast
forecast = (data) =>{    
          


 let forecastDescription = [
   fore1,
   fore2,
   fore3,
   fore4,
   fore5,
 ];

 let dayOneHtml = document.getElementById("dayone");
 let dayTwoHtml = document.getElementById("daytwo");
 let dayThreeHtml = document.getElementById("daythree");      
 let dayFourHtml = document.getElementById("dayfour");  
 let dayFiveHtml = document.getElementById("dayfive");
 let weatherArray = [
   dayOneHtml,
   dayTwoHtml,
   dayThreeHtml,
   dayFourHtml,
   dayFiveHtml,
 ];

 let textOne =  document.getElementById("text1");
 let textTwo =  document.getElementById("text2");
 let textThree =  document.getElementById("text3");
 let textFour =  document.getElementById("text4");
 let textFive =  document.getElementById("text5");
 let textArray =[
   textOne,
   textTwo,
   textThree,
   textFour,
   textFive,
 
 ];

 for(let i=0; i < 5; i++){

   days[i] = data.data[i].temp;
   weatherArray[i].innerHTML = days[i] + "°";

  forecastDescription[i] = data.data[i].weather.description;
  textArray[i].innerHTML = forecastDescription[i];
  console.log(forecastDescription);
   
 };


}     
   
   
   
//making  5 days chart
chart = (data) =>{
     
 new Chart(document.getElementById("mixed-chart"), {
   type: 'bar',
     data: {
         labels: ["Day 1", "Day 2", "Day 3", "Day 4","day 5"],
         datasets: [{
           label: "5 Days Weather",
           type: "line",
           borderColor: "mediumvioletred",
           data: days,
           fill: false
             
         }
         ]
       },
         options: {
           title: {
             display: true,
             text: 'The 5 days Weather'
           },
           legend: { display: false }
         }
     });
   }
       
          
