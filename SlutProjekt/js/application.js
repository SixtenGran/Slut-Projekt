function updatecountry(selektion){
  var countryinput=document.getElementById('country_input')
  if (selection=='annat')
  {
    countryinput.style.display='';
    countryinput.value='';

  } 
  else
  {
    countryinput.style.display='none';
    countryinput.value='svenskt';
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}