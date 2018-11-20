fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => { 
                console.log("Current Exchange Rates", data) 
                for (let datum in data) {
                    console.log('test', datum.rates)
                    for (let item in datum.rates) 
                        console.log('item', item);                    
                }});
    
                for (let datum in data){
                    function data(datumrates){
                        return rates;
                    }
                    }

                
// (currency => {

// const graph = document.createElement('div');
// graph.setAttribute('class','graph');

// const graph = document.createElement('graph');
// graph.textContent = currency.value;

//         });