// $(".nav a").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });

// create the module and name it joelApp
var joelApp = angular.module('joelApp', ['ngRoute']);

// configure our routes
joelApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })

    // routing for each project page
    .when('/marvel', {
      templateUrl : 'pages/marvel.html',
      controller  : 'marvelController'
    })

    .when('/bigtent', {
      templateUrl : 'pages/bigtent.html',
      controller  : 'bigtentController'
    })

    .when('/admerasia', {
      templateUrl : 'pages/admerasia.html',
      controller  : 'admerasiaController'
    })

    .when('/stickers', {
      templateUrl : 'pages/stickers.html',
      controller  : 'stickersController'
    })

    .when('/brand', {
      templateUrl : 'pages/brand.html',
      controller  : 'brandController'
    })

    .when('/calendar', {
      templateUrl : 'pages/calendar.html',
      controller  : 'calendarController'
    })

    .when('/superhero', {
      templateUrl : 'pages/superhero.html',
      controller  : 'superheroController'
    })

    .when('/blush', {
      templateUrl : 'pages/blush.html',
      controller  : 'blushController'
    })

    .when('/netflix', {
      templateUrl : 'pages/netflix.html',
      controller  : 'netflixController'
    })

    .when('/wm', {
      templateUrl : 'pages/wm.html',
      controller  : 'wmController'
    })

    .when('/ace', {
      templateUrl : 'pages/ace.html',
      controller  : 'aceController'
    })

    .when('/alley', {
      templateUrl : 'pages/alley.html',
      controller  : 'alleyController'
    });
});

// create the controller and inject Angular's $scope
joelApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

joelApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

joelApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});

// controllers for each project page

joelApp.controller('marvelController', function($scope) {
  $scope.message = 'Marvel page inserted here';
});

joelApp.controller('bigtentController', function($scope) {
  $scope.message = 'bigtent';
});

joelApp.controller('admerasiaController', function($scope) {
  $scope.message = 'admerasia';
});

joelApp.controller('stickersController', function($scope) {
  $scope.message = 'stickers';
});

joelApp.controller('brandController', function($scope) {
  $scope.message = 'brand';
});

joelApp.controller('calendarController', function($scope) {
  $scope.message = 'calendar';
});

joelApp.controller('superheroController', function($scope) {
  $scope.message = 'superhero';
});

joelApp.controller('blushController', function($scope) {
  $scope.message = 'blush';
});

joelApp.controller('netflixController', function($scope) {
  $scope.message = 'netflix';
});

joelApp.controller('wmController', function($scope) {
  $scope.message = 'won & mckenzie';
});

joelApp.controller('aceController', function($scope) {
  $scope.message = 'ace';
});

joelApp.controller('alleyController', function($scope) {
  $scope.message = 'alley';
});


// $('#mainNav').affix({
//   offset: {
//     top: 100
//   }
// });
//
// $(document).on('click','.navbar-collapse.in',function(e) {
//     if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
//         $(this).collapse('hide');
//     }
// });
//
// if($(window).width() >= 1024){
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $('.navbar-brand>img').addClass('navbar-logo');
//       $('.menu').removeClass('enlargen');
//     } else {
//       $('.navbar-brand>img').removeClass('navbar-logo');
//       $('.menu').addClass('enlargen');
//     }
//   });
// }
