function userLocations(lat, lng){
	const url = '/location/'

	fetch(url, {
		method: "POST",
		headers:{
			"Content-Type": 'application/json',
			"X-CSRFToken": csrftoken
		},
		body:JSON.stringify({'lat':lat, 'lng':lng}),
	}).then((response)=>{
		return response.json();
	}).then((data)=>{
		console.log('Successfully completed'); 
	})
}
function success(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log("User's Position could accessed!")
	console.log("Latitude: ", lat);
	console.log("Longitude: ", lng);
	userLocations(lat, lng);
}
function error(err){
	console.log("Cannot access the user's locations");
}

function locations(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error, {
			enableHighAccuracy:true,
			timeout: 5000,
			maximumAge: 1000
		});
	}
}
locations();