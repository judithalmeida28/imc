// script.js
document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío del formulario
  
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  
  var imc = peso / (altura / 100) ** 2;
  var resultado = 'Tu IMC es: ' + imc.toFixed(2);
  
  alert(resultado);
});
