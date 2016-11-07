angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('mainMenu.profile', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('mainMenu.currentAlarms', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/currentAlarms.html',
        controller: 'currentAlarmsCtrl'
      }
    }
  })
  .state('mainMenu', {
    url: '/side-menu21',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })
  .state('mainMenu.login', {
    url: '/page0',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })
  .state('mainMenu.recommendations', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recommendations.html',
        controller: 'recommendationsCtrl'
      }
    }
  })
  .state('mainMenu.signup', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })
  .state('mainMenu.oTC', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oTC.html',
        controller: 'oTCCtrl'
      }
    }
  })
  .state('mainMenu.editProfile', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })
  .state('about', {
    url: '/page11',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })
  .state('mainMenu.forgotUsername', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/forgotUsername.html',
        controller: 'forgotUsernameCtrl'
      }
    }
  })
  .state('usernameConfirmation', {
    url: '/page13',
    templateUrl: 'templates/usernameConfirmation.html',
    controller: 'usernameConfirmationCtrl'
  })
  .state('mainMenu.forgotPassword', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
      }
    }
  })
  .state('mainMenu.passwordConfirmation', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/passwordConfirmation.html',
        controller: 'passwordConfirmationCtrl'
      }
    }
  })
  .state('mainMenu.options', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl'
      }
    }
  })
  .state('mainMenu.changePassword', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      }
    }
  })
  .state('mainMenu.notifications', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })
  .state('mainMenu.about2', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about2.html',
        controller: 'about2Ctrl'
      }
    }
  })
  .state('mainMenu.contactUs', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })
  .state('submitted', {
    url: '/page21',
    templateUrl: 'templates/submitted.html',
    controller: 'submittedCtrl'
  })
  .state('mainMenu.dosageCalculator', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dosageCalculator.html',
        controller: 'dosageCalculatorCtrl'
      }
    }
  })
  .state('dosageCalculator2', {
    url: '/page23',
    templateUrl: 'templates/dosageCalculator2.html',
    controller: 'dosageCalculator2Ctrl'
  })
  .state('recommendations2', {
    url: '/page24',
    templateUrl: 'templates/recommendations2.html',
    controller: 'recommendations2Ctrl'
  })
$urlRouterProvider.otherwise('/side-menu21/page0')
});