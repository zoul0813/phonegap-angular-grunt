var version = '0.0.0';

var pgApp = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    if('device' in window) {
      document.addEventListener("deviceready", this.onDeviceReady, false);
    } else {
      this.onDeviceReady();
    }
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    angular.bootstrap(document, ['SampleApp']);
  },
};

var app = angular.module('SampleApp', ['LocalStorageModule', 'ngMobile', ]);

app.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});