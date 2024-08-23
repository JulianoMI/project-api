const form = document.querySelector('form');
const factDiv = document.querySelector('.note');

form.addEventListener('submit', (x) => {
  x.preventDefault();
  const loadText ="Please Wait! ⌛";
  factDiv.innerHTML = loadText;
  const baseURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/"; //UNTUK BYPASS CORS (UNTUK MENGGUNAKAN API)
  const number = x.target.querySelector('input[type="number"]').value;
  fetch(baseURL + number,{
    headers:{
      'x-requested-with': 'text/plain'
    }})
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text)
    .catch(x=>console.log(x));
}) 