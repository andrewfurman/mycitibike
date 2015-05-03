var rides = [];
var numberOfRides;
var j = 0;
window.onload=function(){
	var numberOfRides = myRides.NumberOfTrips;
	var listOfRides = "";
		for(var i = 0; i<numberOfRides; i++){
			rideObject = new Object();
			rideObject.StartDateTime = myRides.startDatetime[i].StartDateTime;
			rideObject.StartStation = myRides.startDatetime[i].StartStation;
			rideObject.EndTime = myRides.startDatetime[i].EndTime;
			rideObject.EndLocation = myRides.startDatetime[i].EndLocation;
			rideObject.Duration = myRides.startDatetime[i].Duration;
			rideObject.Billed = myRides.startDatetime[i].Billed;
			for(var j = 0; j < 327; j++){
				if(new String(myRides.startDatetime[i].StartStation).valueOf() === new String(stations.stationBeanList[j].stationName).valueOf()){
					rideObject.StartLongitude = stations.stationBeanList[j].longitude;
					rideObject.StartLatitude = stations.stationBeanList[j].latitude;
					break;
				}
			}
			for(var j = 0; j < 327; j++){
				if(new String(myRides.startDatetime[i].EndLocation).valueOf() === new String(stations.stationBeanList[j].stationName).valueOf()){
					rideObject.EndLongitude = stations.stationBeanList[j].longitude;
					rideObject.EndLatitude = stations.stationBeanList[j].latitude;
					break;
				}
			}
			rides.push(rideObject);
		}
		for(var i = 0; i<207; i++){
			listOfRides += '<br/>';
			listOfRides += '<p>'+(i+1)+'</p>';
			listOfRides += '<p></strong>Start Time:</strong> '+rides[i].StartDateTime+'</p>';
			listOfRides += '<p></strong>Origin:</strong> '+rides[i].StartStation+'</p>';
			listOfRides += '<p></strong>End Time:</strong> '+rides[i].EndTime+'</p>';
			listOfRides += '<p></strong>Destination:</strong> '+rides[i].EndLocation+'</p>';
			listOfRides += '<p></strong>Duration:</strong> '+rides[i].Duration+'</p>';
			listOfRides += '<p></strong>Billed:</strong> '+rides[i].Billed+'</p>';
			listOfRides += '<p></strong>Start Latitude:</strong> '+rides[i].StartLatitude+'</p>';
			listOfRides += '<p></strong>Start Longitude:</strong> '+rides[i].StartLongitude+'</p>';
			listOfRides += '<p></strong>End Latitude:</strong> '+rides[i].EndLatitude+'</p>';
			listOfRides += '<p></strong>End Longitude:</strong> '+rides[i].EndLongitude+'</p>';
		}
	document.getElementById('rides').innerHTML = listOfRides;
	loadMap();
}