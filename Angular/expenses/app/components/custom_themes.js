//.primaryPalette('purple') // specify primary color, all // other color intentions will be inherited // from default 

app.config(function($mdThemingProvider) { 
  $mdThemingProvider.theme('docs-dark') 
  .primaryPalette('purple')

  $mdThemingProvider.theme('main-blue') 
    .primaryPalette('blue')
    .accentPalette('pink')
    .warnPalette('amber')

  $mdThemingProvider.theme('main-red') 
    .primaryPalette('red')
    .accentPalette('brown')
    .warnPalette('red')

  $mdThemingProvider.theme('main-green') 
    .primaryPalette('green')
    .accentPalette('brown')
    .warnPalette('red')

  $mdThemingProvider.theme('main-yellow') 
    .primaryPalette('yellow')
    .accentPalette('brown')
    .warnPalette('red')

})