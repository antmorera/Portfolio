
let tempString = document.querySelector("#temp").innerHTML;
let windspeedString = document.querySelector("#windspeed").innerHTML;
//turn those into decimal numbers
let temp = parseFloat(tempString);
let windspeed = parseFloat(windspeedString);


function getWindChill(t,s)
{

 if ((t <= 50) && (s > 3))
 {
  
  let windchill =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
  document.querySelector("#windchill-F").innerHTML = "&#xb0;F";
  return windchill.toFixed(2);
 }
 else
 {
  return "N/A"
 }
}

document.querySelector("#windchill").innerHTML = getWindChill(temp, windspeed);