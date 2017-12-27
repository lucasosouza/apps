angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


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

.factory('Pics', function(){

  var pics = [{
    title: 'image1',
    url: 'http://www.valuing-nature.net/sites/default/files/imagecache/large/about.jpg',
    popular: true,
    comments: [
    'this is horrible',
    'really?'
    ],
    likes: 4,
    dislikes: 2
  }, {
    title: 'image2',
    url: 'http://hdwallpapersmart.com/wp-content/uploads/2014/01/Funny-Nature-Hd-Wallpapers.jpg',
    liked: true,
    popular: true,
    comments: [
    'whatever',
    'buuuuuu',
    'niiiiiice!'
    ],
    likes: 4,
    dislikes: 2
  }, {
    title: 'image3',
    url: 'http://www.nature.org/cs/groups/webcontent/@web/@unitedstates/documents/media/dolly-sods-490x250.jpg',
    following: true,
    liked: true,
    comments: [
    'what a weird image! and much more after that just to see how far',
    'nothing more to say',
    'niiiiiice!'
    ],
    likes: 4,
    dislikes: 2
  },
  {
    title: 'image4',
    url: 'http://cdn.theatlantic.com/static/mt/assets/food/nature%20tree%20main.jpg',
    following: true,
    popular: true,
    comments: [
    'nothing more to say',
    'niiiiiice!',
    'more comments',
    'more comments and more'
    ],
    likes: 4,
    dislikes: 2
  }
  ]

  return {
    all: function(){
      return pics;
    },

    byCategory: function(category){
      return pics.filter(function(element, index, array){
        if (element.hasOwnProperty(category))
          return true;
      })
    }

  }

})
