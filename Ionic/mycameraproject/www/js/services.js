angular.module('starter.services', [])

.factory('Camera', ['$q', function($q) {


 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      return q.promise;
    }


    }

}])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Pics', function($http){

  //console.log($http.defaults.headers.post)
  //$http.defaults.headers.post["Content-Type"] = "multipart/form-data"

 var pictures = ['https://s3.amazonaws.com/dbc.ctwitter.mybucket/test', 'http://www.online-image-editor.com//styles/2014/images/example_image.png'];

  var win = function(r) {
      console.log("Code = " + r.responseCode);
      console.log("Response = " + r.response);
      console.log("Sent = " + r.bytesSent);
      console.log(r.response);
  }

  var fail = function(error) {
      console.log("An error has occurred: Code = ", error.code);
  }

 return {
    
    all: function(){
      return pictures;
    },
    
    add: function(pic){
      pictures.push(pic);
      this.uploadPhoto(pic);
      //console.log($http.defaults.headers.post)
      //$http.post('http://s3.amazonaws.com/dbc.ctwitter.mybucket', pic)
    },

   uploadPhoto: function (imageURI) {
    var options = new FileUploadOptions();
    //var options = {};
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://s3.amazonaws.com/dbc.ctwitter.mybucket", win, fail, options);
    }

 }

})


     // Wait for PhoneGap to load
//        document.addEventListener("deviceready", onDeviceReady, false);
 
        // PhoneGap is ready
  //      function onDeviceReady() {
    // Do cool things here...
    //    }
 
    //     function getImage() {
    //         // Retrieve image file location from specified source
    //         navigator.camera.getPicture(uploadPhoto, function(message) {
    //   alert('get picture failed');
    // },{
    //   quality: 50, 
    //   destinationType: navigator.camera.DestinationType.FILE_URI,
    //   sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    // }
    //         );
 
    // //     }
 
    //     function uploadPhoto(imageURI) {
    //         var options = new FileUploadOptions();
    //         options.fileKey="file";
    //         options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    //         options.mimeType="image/jpeg";
 
    //         var params = new Object();
    //         //params.value1 = "test";
    //         //params.value2 = "param";
 
    //         options.params = params;
    //         options.chunkedMode = false;
 
    //         var ft = new FileTransfer();
    //         ft.upload(imageURI, "http://yourdomain.com/upload.php", win, fail, options);
    //     }
 
    //     function win(r) {
    //         console.log("Code = " + r.responseCode);
    //         console.log("Response = " + r.response);
    //         console.log("Sent = " + r.bytesSent);
    //         alert(r.response);
    //     }
 
    //     function fail(error) {
    //         alert("An error has occurred: Code = " = error.code);
    //     }
 