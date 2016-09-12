var uberURL = "https://api.uber.com"
var lyftURL = "https://api.lyft.com"
var uberData = []
var uberParams = {
	client_id: 'b5AZWL36DzgKOagL02BZkYPJh_dw-bdC',
	client_secret: 'z7kbeUQSuakOEyx3TrD0R2c2OrMe4Gna_1bjxsob',
	server_token: '0qjMiJS_wF71_bgS1QPs3VsYA5exF94eLUGpbjBo',
	latitude: 37.7759792,
	longitude: -122.41823
};
var lyftParams = {
	client_id: 'jB7EGl_zq39_',
	client_secret: '_a9Q8Y7ShAbbYS57KyKp82f3MSdGktZ7',
	client_token: 'gAAAAABX1NuTTuZDBg6WsgPFyY7EQntA119tR-l5cwMXQ885TBYXTjZ0__76QC9fCbXN0A_EiIE6DFuCSFl4K9kdn7MoUuIg7FCDSbelnjMPSBy64vTXWL_BSHkSwJmQ8n-VPn95uyFT4BKRUhx6BnPQt8Ht2zcvODbVGiPVT3UXCiqDurQjjXw='
};
var lyftData = []

$.ajax({
		url: uberURL + '/v1/products',
		type: 'GET',
		dataType: 'json',
		data: uberParams,
		accept: 'application/json',
		headers: {
			'Authorization': 'Token' + uberParams['server_token'],
			'Access-Control-Allow-Origin': uberURL
		},
		success: function(data) {
			console.log(data);
		}
		});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ride Time", "Price", "Price per mile"],
        datasets: [{
            label: 'Lyft',
            data: lyftData,
            backgroundColor: [
                'rgba(255, 0, 191, 0.2)',
                'rgba(255, 0, 191, 0.2)',
                'rgba(255, 0, 191, 0.2)'
            ],
            borderColor: [
                'rgba(255, 0, 191, 0.2)',
                'rgba(255, 0, 191, 0.2)',
                'rgba(255, 0, 191, 0.2)'
            ],
            borderWidth: 1
        }, {
            label: 'Uber',
            data: uberData,
            backgroundColor: [
                'rgba(28, 189, 197, 0.2)',
                'rgba(28, 189, 197, 0.2)',
                'rgba(28, 189, 197, 0.2)'
            ],
            borderColor: [
                'rgba(28, 189, 197, 0.2)',
                'rgba(28, 189, 197, 0.2)',
                'rgba(28, 189, 197, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
