//Funcion que manda enlace de las coordenadas de Google Maps
function getGoogleMapsLink(long, Lat) {
  return "https://maps.google.com/maps?q="+long+"+"+Lat;
}


function emailOnFormSubmit(e) {

	// variables
  
	var nombre = e.values[1];
	var noches = e.values[2];
	var idioma = e.values[3];
	var pais = e.values[4];
    var dni = e.values[5];
    var mail = e.values[6];

  
	
	// El asunto del mensaje
	var subject = "Correo de Hoteles S.A. para " + nombre;

	// Primera parte del Cuerpo del cuerpo del mensaje
    var cuerpoMensaje;
    
  if (idioma == "Español") {cuerpoMensaje = "Hola, este es el mensaje en español de Hoteles S.A. La lista de Hoteles para el pais que ha elegido el la siguiente:";}
  else if (idioma == "Inglés") {cuerpoMensaje = "Hello, this is the advice of Hoteles S.A. in english, the list of Hotels in the country that you selected is:";}
  else if (idioma == "Francés") {cuerpoMensaje = "Bonjour et benvenue, cette est le message du Hoteles S.A. la liste du hôtels dans le pays selectioné est:";}
  else if (idioma == "Portugués") {cuerpoMensaje = "Olá esta é a mensagem de Hoteles S.A. La lista de hotéis o país selecionado é:";}
  else {cuerpoMensaje = "qaStaHvIS tlhIngan QIn, vaj tetlh Sep mebpa'mey ghu'vam:";}
  
  //Lista de Hoteles
  
  //España
  var AlfonsoXIII = getGoogleMapsLink(37.38155203547272, -5.992907881736755);
  var Atocha = getGoogleMapsLink(40.4040668, -3.692141699999979);
  var GolfResort = getGoogleMapsLink(37.2143523998338, -7.230682969093323);
  //Estados Unidos
  var HotelTrump = getGoogleMapsLink(40.7239906, -74.00075429999998);
  var HotelDetroit = getGoogleMapsLink(42.331427, -83.0457538);
  //Francia
  var Kymper = getGoogleMapsLink(48.011487066232014, -4.074103832244873);
  var Chambres = getGoogleMapsLink(48.03665921770323, -4.681892395019531);
  //Inglaterra
  var HardYam = getGoogleMapsLink(51.5111997405872, -0.13499021530151367);
  var Western = getGoogleMapsLink(53.962858725064514, -1.0773789882659912);
  //Marruecos
  var Khouzama = getGoogleMapsLink(33.53724532190297, -7.672147750854492);
  var Seasons = getGoogleMapsLink(31.61947427549924, -8.01727294921875);
  //Portugal
  var VIP = getGoogleMapsLink(38.72807460528505, -9.145013093948364);
  var Largo = getGoogleMapsLink(37.018316418359035, -7.927311658859253);
  
	
   var CuerpoDos;
  if (pais == "España") {CuerpoDos = "\n Hotel Alfonso XIII Sevilla --> "+AlfonsoXIII+"\n Hotel Atocha Madrid --> "+Atocha+"\n Islantilla Golf Resort --> "+GolfResort;}
  else if (pais == "Estados Unidos") {CuerpoDos = "\n Hotel Trump New York --> "+HotelTrump+"\n Hotel Detroit Michigan By Marriott --> "+HotelDetroit;}
  else if (pais == "Francia") {CuerpoDos = "\n Hotel Quimper --> "+Kymper+"\n Hotel Chambres d'Hôtes --> "+Chambres;}
  else if (pais == "Inglaterra") {CuerpoDos = "\n Hotel Hard Jam London --> "+HardYam+"\n Hotel Best Western Monkbar York --> "+Western;}
  else if (pais == "Marruecos") {CuerpoDos = "\n Hotel Residence Khouzama --> "+Khouzama+"\n Hotel Four Seasons Marraketch --> "+Seasons;}
  else { CuerpoDos = "\n Hotel VIP Executive Marquês Aparthotel --> "+VIP+"\n Hostel do Largo --> "+Largo;}
   
	
  
  
	// Mandamos el mensaje desde aqui
	MailApp.sendEmail(mail, subject, cuerpoMensaje+CuerpoDos);

}