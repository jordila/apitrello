// basado en el jwt-vanilla.js de JonathanMH :
// à la https://jonathanmh.com/example-json-web-tokens-vanilla-javascript/
// vamos a  guardar el token recibido de la APItrello en nuestro navegador localStorage

// make the request to the login endpoint
function getToken() {
  var loginUrl = "http://apitrello.herokuapp.com/users/login";
  var xhr = new XMLHttpRequest();
  var userElement = document.getElementById('username');
  var passwordElement = document.getElementById('password');
  var tokenElement = document.getElementById('token');
  var user = userElement.value;
  var password = passwordElement.value;
    // veamos cosificando username/passwd , para luego stringifycarlo ?
    //
    let credentials = {
	username: "prueba",
	password: "prueba"
    };

    

  xhr.open('POST', loginUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.addEventListener('load', function() {
  var responseObject = JSON.parse(JSON.stringify(this.response));
    console.log(responseObject);
      if (responseObject) {
      tokenElement.innerHTML = responseObject;
    } else {
      tokenElement.innerHTML = "Token no recibido";
    }
  });

  //  var sendObject = JSON.stringify({ username: username, password: password });

//    let json = JSON.stringify(credentials);


var sendObject = JSON.stringify(credentials);  

  console.log('Vamos a hacer la petición', sendObject);

  xhr.send(sendObject);
}
