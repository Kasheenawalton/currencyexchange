fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => { 
                console.log("Current Exchange Rates", data) 
            });

(currency => {

const graph = document.createElement('div');
graph.setAttribute('class','graph');

const graph = document.createElement('graph');
graph.textContent = currency.value;

        });