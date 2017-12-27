'use strict';

angular.module('expensesApp')
  .controller('FutureCtrl', ['InvoiceService', function(Invoice) {

    var self = this;    
    self.totalSum = 0;
    self.update = function(){
    	Invoice.all().success(function(data){
    		self.invoices = data.rows;
		  	console.log('loaded invoices')
        self.totalSum = self.invoices.reduce(function(prev, curr){
          if (isFinite(prev)) {
            return prev + curr.value.price
          } else {
            return prev.value.price + curr.value.price            
          }
        }) //ugly error handling, needs improvement
  		})
  	}

    self.message = false
    self.showDetails = true;
  	self.update();
  	self.newInvoice = {};
    //self.randomDate = new Date(2013,9,22)
  	
  	self.add = function(){
      console.log('on add')
      if (self.onEdit) {
        console.log('invoice to be updated', self.newInvoice)
        Invoice.update(self.newInvoice._id, self.newInvoice).success(function(){
          self.update();
          self.message = "Invoice modified";
        })
      } else {
        Invoice.add(self.newInvoice).success(function(data){
          console.log('adding')
          self.update();
    		});
      }
  		self.newInvoice = {};
      self.invoiceForm.$setPristine();
  	}

    self.clearForm = function(){
      console.log('on clear')
      self.newInvoice = {};
      self.onEdit = false;
      self.invoiceForm.$setPristine();
    }

    self.remove = function(index) {
      var invoice = self.invoices[index].value
      console.log('this is the invoice to be removed', invoice)
      Invoice.remove(invoice._id, invoice._rev).success(function(data){
          self.update();
          self.message = "Invoice deleted";
      })
    }

    self.edit = function(index){
      var invoice = self.invoices[index].value
      if (invoice.paymentDate) {
        invoice.paymentDate = new Date(invoice.paymentDate)        
      }
      this.newInvoice = invoice;
      self.invoiceForm.$setDirty();
      self.onEdit = true;
    }

    self.toggleShowDetails = function(){
      self.showDetails = !self.showDetails
      console.log('details', self.showDetails);
    }



  }]);
