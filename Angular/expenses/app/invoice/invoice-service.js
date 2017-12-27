app..factory('InvoiceService', ['appSettings', '$http', '$q', function(appSettings, $http, $q){
  var db = appSettings.invoiceApi;
  var monthlySum;
  var calcMonthlySum = function(arr, defer) {
    monthlySum = arr.reduce(function(prev, curr){
      if (isFinite(prev)) {
        return prev + curr.value.price
      } else {
        return prev.value.price + curr.value.price            
      }
    })
    console.log('invoices Sum', monthlySum)
    defer.resolve(monthlySum)
  };      
  return {
    all: function(){
      return $http.get(db + '/_design/invoices/_view/byName', { params: { 'descending': 'true'} })
      .error(function(err){
        console.log('Cannot get list of invoices, shit happened: ', err)
      })
    },
    add: function(item){
      return $http.post(db, item)
      .error(function(err){
        console.log('Cannot post new invoice, shit happened: ', err)
      })
    },
    remove: function(id, rev){
      console.log(id, rev)
      return $http.delete(db + '/' + id, {params: { rev: rev }})
      .error(function(err){
        console.log('Cannot delete invoice, shit happened: ', err)
      })
    },
    update: function(id, obj) {
      console.log('updating this object',id, obj)
      return $http.put(db + '/' + id, obj)
      .error(function(err){
        console.log('Cannot modify invoice, shit happened: ', err)
      })
    },
    total: function(data){    
      var defer = $q.defer() 
      $http.get(db + '/_design/invoices/_view/byName', { params: { 'descending': 'true'} })
        .success(function(data){
          calcMonthlySum(data.rows, defer)
        })
     return defer.promise          
    }
  }
}])