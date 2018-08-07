'use strict';

var appUrl = "http://localhost:3000/";
// var appUrl = "https://karni-server.herokuapp.com/";

var app = angular.module('app', [])
.value('appLanguage', 'english');

app.controller('appCtrl', function($scope, $http, languagesService) {
    
    $scope.changeLang = function (language) {
        $scope.dict = languagesService.getLanguage(language);
        $scope.language = language;
    }
    $scope.changeLang("hebrew");

    $scope.openNavbar = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
            $scope.disableScroll = true;
        } 
        else if(document.getElementById("myTopnav").classList.contains("responsive")) {
            document.getElementById("myTopnav").classList.remove("responsive"); 
            $scope.disableScroll = false;
        }

        var x = document.getElementById("darkBox");
        if (x.className === "darkBox") {
            x.className += " darkBoxActive";
        } else {
            x.className = "darkBox";
        }
    };

    $scope.sendContactForm = function () {

        if($scope.fullName&&$scope.email&&$scope.message) {
            $scope.contactForm = {
                "fullName": $scope.fullName,
                "email": $scope.email,
                "message": $scope.message
            }
            // alert("$scope.contactForm: "+JSON.stringify($scope.contactForm, null, 4))

            // $http({
            //     method : "POST",
            //     url : appUrl+"sendContactForm",
            //     data: {form: $scope.contactForm}
            // }).then(function (response) {
            //     console.log("sendContactForm successfully !");
            //     console.log("JSON: "+JSON.stringify(response.data, null, 4));
            // }, function (response) {
            //     console.log("sendContactForm Error !");
            // });

            $scope.fullName = "";
            $scope.email = "";
            $scope.message = "";

        }
    };
    
});
