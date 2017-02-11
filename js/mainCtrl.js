quoteBook.controller("mainCtrl", function($scope, dataService){
  $scope.ryan = "My name is ryan";

  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = dataService.removeData();
});
