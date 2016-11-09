// Code goes here
var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl",function($scope,$http){
	$scope.secret = "???";
	$scope.clear = ()=>{
		$scope.secret = "???";
		$(".result").css("background-color","");
		
	}
	$scope.click = (indexx)=>{
		$scope.secret = $scope.users[indexx].secret;
		$(".result").css("background-color",$scope.secret);
	}
	$http.get("https://private-f3b4b-interview2.apiary-mock.com/data")
		.then((data)=>{
			$scope.users = data.data;
		});
});


