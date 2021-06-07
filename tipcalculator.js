
//var result= (totalamount*tip)/nopeople;
function Calculatetip(){
  var totalamount = document.getElementById('billamt').value;
  var tip= document.getElementById('tip').value;
  var noofpeople = document.getElementById('people').value;
  var result = Math.round((totalamount*tip)/noofpeople);
  document.getElementById('resultt').innerHTML= "TIP AMOUNT " + "<br>" +"$"+ result + " <br>"+ "EACH";
}
