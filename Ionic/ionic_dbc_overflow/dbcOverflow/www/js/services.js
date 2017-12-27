
app.factory('Data', function($firebase, $q){
  var sync = function(scope, collection, parent, id){
    var defer = $q.defer();
    if (arguments.length === 4) {
      var ref =  new Firebase("https://dbc-overflow.firebaseio.com/" + parent + "/" + id + "/" + collection);
    } else {
      var ref =  new Firebase("https://dbc-overflow.firebaseio.com/" + collection);
    }
    $firebase(ref).$asObject().$bindTo(scope, collection).then(function(){
      if (!scope["collection"]) scope["collection"] = {};
      defer.resolve();
    })
    return defer.promise
  }
  return sync
});

app.factory('Key', function(){
  var randomKey = function() {
    return Math.random().toString(36).substr(2, 15);
  }
  return randomKey;
})

app.factory('User', function(){
  return { loggedUser: false };
})

app.factory('Question', function(){
  return { activeQuestion: false };
})
