 const Today = document.getElementById("Today-date");

 // for { Global }
 const tConfirmed = document.getElementById("tConfirmed");
 const tRecovered = document.getElementById("tRecovered");
 const tDeaths = document.getElementById("tDeaths");

 const tConfirmedCount = document.getElementById("TotalConfirmedCount");
 const tRecoveredCount = document.getElementById("TotalRecoveredCount");
 const tDeathsCount = document.getElementById("TotalDeathsCount");

 // for New-Cases { Global } 
 const newGlobalConfirmed = document.getElementById("newGlobalConfirmed");
 const newGlobalRecovered = document.getElementById("newGlobalRecovered");
 const newGlobalDeaths = document.getElementById("newGlobalDeaths");

 const newConfirmedGlobalCount = document.getElementById("newConfirmedGlobalCount");
 const newRecoveredGlobalCount = document.getElementById("newRecoveredGlobalCount");
 const newDeathsGlobalCount = document.getElementById("newDeathsGlobalCount");

 // for India
 const tConfirmedInIndia = document.getElementById("tConfirmedInIndia");
 const tRecoveredInIndia = document.getElementById("tRecoveredInIndia");
 const tDeathsInIndia = document.getElementById("tDeathsInIndia");

 const tConfirmedCountInIndia = document.getElementById("TotalConfirmedCountInIndia");
 const tRecoveredCountInIndia = document.getElementById("TotalRecoveredCountInIndia");
 const tDeathsCountInIndia = document.getElementById("TotalDeathsCountInIndia");


 // for New-Cases In India
 const newConfirmedInIndia = document.getElementById("newConfirmedInIndia");
 const newRecoveredInIndia = document.getElementById("newRecoveredInIndia");
 const newDeathsInIndia = document.getElementById("newDeathsInIndia");

 const newConfirmedCountInIndia = document.getElementById("NewConfirmedCountInIndia");
 const newRecoveredCountInIndia = document.getElementById("NewRecoveredCountInIndia");
 const newDeathsCountInIndia = document.getElementById("NewDeathsCountInIndia");



 // adding Today date to the browser
 let date = new Date();
 Today.innerText = date;

 Today.style.color = 'green';
 Today.style.textAlign = 'center';

 // add appropriat colors to the card headers for Global
 tConfirmed.classList.add('text-primary');
 tDeaths.classList.add('text-danger');
 tRecovered.style.color = '#E74292';

 // add appropriat colors to the card headers for Global new-Cases
 newGlobalConfirmed.classList.add('text-primary');
 newGlobalDeaths.classList.add('text-danger');
 newGlobalRecovered.style.color = '#E74292';

 // add appropriat colors to the card headers for India
 tConfirmedInIndia.classList.add('text-primary');
 tDeathsInIndia.classList.add('text-danger');
 tRecoveredInIndia.style.color = '#E74292';

 // add appropriat colors to the card headers for India new-Cases
 newConfirmedInIndia.classList.add('text-primary');
 newDeathsInIndia.classList.add('text-danger');
 newRecoveredInIndia.style.color = '#E74292';

 // fetch the covid19 api realtime Data and integrated to  myapplication
 let url = 'https://api.covid19api.com/summary';

 fetch(url)
   .then(respons => respons.json())
   .then(data => {

     tConfirmedCount.innerText = data.Global.TotalConfirmed;
     tRecoveredCount.innerText = data.Global.TotalRecovered;
     tDeathsCount.innerText = data.Global.TotalDeaths;

     newConfirmedGlobalCount.innerText = data.Global.NewConfirmed;
     newRecoveredGlobalCount.innerText = data.Global.NewRecovered;
     newDeathsGlobalCount.innerText = data.Global.NewDeaths;

     tConfirmedCountInIndia.innerText = data.Countries[76].TotalConfirmed;
     tRecoveredCountInIndia.innerText = data.Countries[76].TotalRecovered;
     tDeathsCountInIndia.innerText = data.Countries[76].TotalDeaths;

     newConfirmedCountInIndia.innerText = data.Countries[76].NewConfirmed;
     newRecoveredCountInIndia.innerText = data.Countries[76].NewRecovered;
     newDeathsCountInIndia.innerText = data.Countries[76].NewDeaths;

     console.log(data);
     console.log("*********************");
     console.log(data.Countries[76]);

   })
   .catch(error => {
     console.log(error);
   });