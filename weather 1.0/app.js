var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=b63b71b2588e3e9265343ad335d41aa4&units=metrics';

var server =http.createServer(function(request,response){

 var request=require('request');
 request(url, function(err,res,body){
   var data=JSON.parse(body);
   response.write("<html><body><div id='container'>");
   response.write("<h1>"+'City Name: '+data['name'] + '<br>' + "</h1>");
   response.write("<h2>"+ 'Temperature: ' + data.main['temp'] + '<br>' +"</h1>");
   response.write("<h2>"+'Sunset Time: '+ new Date(data.sys['sunset']*1000)+"</h2>");
   response.write("</div></body></html>");
   response.end();

 });



}).listen(3000);
