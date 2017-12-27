
app.factory('Videos', function(){

  var videos = [{
    title: 'image1',
    url: 'http://www.valuing-nature.net/sites/default/files/imagecache/large/about.jpg',
    popular: true
  }, {
    title: 'image2',
    url: 'http://hdwallpapersmart.com/wp-content/uploads/2014/01/Funny-Nature-Hd-Wallpapers.jpg',
    liked: true,
    popular: true
  }, {
    title: 'image3',
    url: 'http://www.nature.org/cs/groups/webcontent/@web/@unitedstates/documents/media/dolly-sods-490x250.jpg',
    favorited: true,
    liked: true
  },
  {
    title: 'image4',
    url: 'http://cdn.theatlantic.com/static/mt/assets/food/nature%20tree%20main.jpg',
    favorited: true,
    popular: true
  }
  ]

  return {

    all: function(){
      return videos;
    },

    byCategory: function(category){
      return videos.filter(function(element, index, array){
        if (element.hasOwnProperty(category))
          return true;
      })
    }

  }


})
