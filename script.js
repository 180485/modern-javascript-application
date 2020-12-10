 //TODO: make a function
 


 let dayOne ;
 let dayTwo ;
 let dayThree;
 let dayFour ;
 let dayFive;
 
 
document.querySelector("#submit").addEventListener("click", function(e){
 
 
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
           
    dayOne = data.data[1].temp;
    dayTwo = data.data[2].temp;
    dayThree = data.data[3].temp;
    dayFour = data.data[4].temp;
    dayFive = data.data[5].temp;

      
 document.getElementById("dayone").innerHTML =  dayOne + " "+"°c" ;
 document.getElementById("text1").innerHTML =  data.data[1].weather.description;

  
 document.getElementById("daytwo").innerHTML =  dayTwo +" "+ "°c" ;
 document.getElementById("text2").innerHTML =  data.data[2].weather.description;
  
 document.getElementById("daythree").innerHTML =  dayThree + " "+"°c" ;
 document.getElementById("text3").innerHTML =  data.data[3].weather.description; ;

  
 document.getElementById("dayfour").innerHTML =  dayFour+ " "+ "°c" ;
 document.getElementById("text4").innerHTML =  data.data[4].weather.description ;

  
 document.getElementById("dayfive").innerHTML =  dayFive + " "+ "°c" ;
 document.getElementById("text5").innerHTML =  data.data[5].weather.description;;  
   

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
            data: [dayOne,dayTwo,dayThree,dayFour,dayFive],
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
        
           
     

  
  

