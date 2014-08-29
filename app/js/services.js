'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service('userMan', function($q) {
    
    this.login = function(user, password) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      if (user == "pc")
        deferred.resolve({user_type: "pc"});
      else if (user == "john")
        deferred.resolve({user_type: "reviewer", specialty: ["ai", "security", "ml"]});
      else if (user == "alice")
        deferred.resolve({user_type: "reviewer", specialty: ["bpm", "governance"]});
      else if (user == "glen")
        deferred.resolve({user_type: "submitter"});
      else
        deferred.reject();
      return promise;
    };
  }).
  service('paper_man', function() {
    this.list = function(user) {
    };
    this.submit = function(user, paper) {
    };
    // These papers will have bid(option, user), review(user, review), discuss(paper, comment) methods, rebut(), select() methods
  });
