var db = null;
document.addEventListener("ondeviceready", function() {
  if (window.cordova && window.SQLitePlugin)
    db = $cordovaSQLite.openDB({name: 'otc.db', location: 0});
  else
    db = window.openDatabase('otc', '1.0', 'otc.db', 100 * 1024 * 1024);
});
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])
.config(function($ionicConfigProvider, $sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
})
.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if (window.cordova && window.SQLitePlugin)
      db = $cordovaSQLite.openDB({name: 'otc.db', location: 0});
    else
      db = window.openDatabase('otc', '1.0', 'otc.db', 100 * 1024 * 1024);
    /*
    $cordovaSQLite.execute(db, "DROP TABLE users");
    $cordovaSQLite.execute(db, "DROP TABLE medications");
    */
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS users (id integer primary key, firstname text, lastname text, email text, username text, password text, sex text, birthdate text, height integer, weight integer)");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS medications (id integer primary key, name text, ratio integer)");
  });
})