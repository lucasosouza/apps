//Implementations
//one: using ES6 Promise style

var deferA = new Promise(function(resolve,reject){
  setTimeout(function() { resolve(function() { console.log("abc") }); }, 600)
});

var deferB = new Promise(function(resolve,reject){
  setTimeout(function(){ resolve(function() { console.log("def") }); }, 400)
});

var deferC = new Promise(function(resolve,reject){
  setTimeout(function(){ resolve(function() { console.log("ghi") }); }, 200)
});

deferA.then(function(f){
  f();
  deferB.then(function(f){
    f();
    deferC.then(function(f){
      f();
    })
  })
})

//two
//using angular/jquery style promises

app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $q) {
  $scope.test = "test"
  var deferA = $q.defer();
  var deferB = $q.defer();
  var deferC = $q.defer();
  setTimeout(function() { deferA.resolve(function() { console.log("abc") }); }, 600)
  setTimeout(function() { deferB.resolve(function() { console.log("def") }); }, 400)
  setTimeout(function() { deferC.resolve(function() { console.log("ghi") }); }, 200)
  deferA.promise.then(function(f){
    f();
    deferB.promise.then(function(f){
      f();
      deferC.promise.then(function(f){
        f();
      })
    })
  })
})

//three
//using jquery callbacks

var callbacks = $.Callbacks();
setTimeout(function() { callbacks.add(function(){console.log("abc")})}, 600);
setTimeout(function() { callbacks.add(function(){console.log("def")})}, 400);
setTimeout(function() { callbacks.add(function(){console.log("ghi")})}, 200);
callbacks.run()

ASQ().
then(function(done,msg){
  setTimeout(function() { done(console.log("abc")) }, 600)
}).then(function(done,msg){
  setTimeout(function() { done(console.log("def")) }, 600)
}).then(function(done,msg){
  setTimeout(function() { done(console.log("ghi")) }, 600)
})

function *foo(){
  setTimeout(function(){yield console.log("abc")}, 600)
  setTimeout(function(){yield console.log("def")}, 400)
  setTimeout(function(){yield console.log("ghi")}, 200)
}
for (var v in foo()){
  v();
}

var a, b, c;
funA = setTimeout(function(){ a = function(){console.log("abc")} }, 600)
funB = setTimeout(function(){b = function(){console.log("def")}}, 400)
funC = setTimeout(function(){c = function(){console.log("ghi")}}, 200)
Promise.all(funA, funB, funC).then {
  a();
  b();
  c();
}
