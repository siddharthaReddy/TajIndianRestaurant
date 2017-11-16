var myAppControllers = angular.module('myAppControllers',[]);

myAppControllers.controller('HomeController', ['$scope','$log', function($scope, $log){
	 $scope.myInterval = 5000;
	  var slides = $scope.slides = [
	  {image:'images/sliderImages/chicken.jpg',text:'Tandoori Chicken'},
	  {image:'images/sliderImages/dessert.jpg',text:'Desserts and Snacks'},
	  {image:'images/sliderImages/tiffins.jpg',text:'South Indian Tiffins'}];
}]);

myAppControllers.controller('MenuController', ['$scope',"$http", function($scope,$http){
	//To get a local json file using ajax.get
	$http.get("mocks/menu.json")
   .success(function(response) {$scope.data = response;});
}]);
	
myAppControllers.controller('GalleryController', ['$scope',function($scope){
	
}]);

myAppControllers.controller('ContactController',['$scope',function($scope){
  	  function initialize() {
  		  var mapOptions = {
  		    zoom: 10,
  		    center: {lat: 39.727791, lng: -104.940735}
  		  };
  		  $scope.map= map = new google.maps.Map(document.getElementById('map-canvas'),
  		      mapOptions);

  		  var marker = new google.maps.Marker({
  		    position: {lat: 39.727791, lng: -104.940735},
  		    map: map
  		  });
  		  
  		  var infowindow = new google.maps.InfoWindow({
  		    content: '<span>Taj Indian Restaurant</span>'
  		  });

  		  google.maps.event.addListener(marker, 'mouseover', function() {
  		    infowindow.open(map, marker);
  		  });
  		}

  		google.maps.event.addDomListener(window, 'load', initialize);
    }]);

myAppControllers.controller('AboutController', ['$scope',function($scope){
	
}]);