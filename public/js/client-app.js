const search = document.querySelector('#search');
const address = document.querySelector('#address');
const title = document.querySelector('#title');
const forecast = document.querySelector('#forecast');
const loading = document.querySelector('#loading');
const weatherReport = document.querySelector('.weather-report');

search.addEventListener('click', function() {
    if (!address.value) return;

    weatherReport.style.display = 'block';
    loading.style.display = 'block';
    const query = address.value;
    address.value = '';
    title.textContent = '';
    forecast.textContent = '';

    fetch(`http://localhost:3000/weather?address=${query}`).then(response => {
        response.json().then(data => {
            loading.style.display = 'none';
            if (data.error) {
                title.textContent = data.error;
                forecast.textContent = ''
            } else {
                title.textContent = data.location;
                forecast.textContent = data.forecast;
            }

        })
    })

})