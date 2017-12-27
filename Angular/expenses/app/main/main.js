'use strict';

angular.module('expensesApp')
  .controller('MainCtrl', [function() {
    var self = this;
    self.tabs = [
      {title: 'To be paid', view:'views/future.html'},
      {title: 'Fixed expenses' , view:'views/fixed.html'},
      {title: 'Income', view:'views/revenue.html'},
      {title: 'Budget', view:'views/budget.html'}
    ]

    self.selectedIndex = 3;

  }]);
