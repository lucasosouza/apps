app.factory('RevenueService', ['appSettings', '$http', '$q', function(appSettings, $http, $q){
  var db = appSettings.incomeApi;
  var monthlySum;
  var calcMonthlySum = function(arr, defer) {
    monthlySum = arr.reduce(function(prev, curr){
      if (isFinite(prev)) {
        return prev + curr.value.amount
      } else {
        return prev.value.amount + curr.value.amount            
      }
    })
    console.log('revenueAmount', monthlySum)
    defer.resolve(monthlySum)
  };  
  return {
    all: function(){
      return $http.get(db + '/_design/incomes/_view/byAmount', { params: { 'descending': 'true'} })
      .error(function(err){
        console.log('Cannot get list of incomes, shit happened: ', err)
      })
    },
    add: function(item){
      return $http.post(db, item)
      .error(function(err){
        console.log('Cannot post new income, shit happened: ', err)
      })
    },
    remove: function(id, rev){
      console.log(id, rev)
      return $http.delete(db + '/' + id, {params: { rev: rev }})
      .error(function(err){
        console.log('Cannot delete income, shit happened: ', err)
      })
    },
    update: function(id, obj) {
      console.log('updating this object',id, obj)
      return $http.put(db + '/' + id, obj)
      .error(function(err){
        console.log('Cannot modify income, shit happened: ', err)
      })
    },
    total: function(data){    
      var defer = $q.defer() 
      $http.get(db + '/_design/incomes/_view/byAmount', { params: { 'descending': 'true'} })
        .success(function(data){
          calcMonthlySum(data.rows, defer)
        })
     return defer.promise          
    }
  }
}])