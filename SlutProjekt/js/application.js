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