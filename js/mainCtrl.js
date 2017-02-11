quoteBook.controller("mainCtrl", function($scope, dataService){
  $scope.ryan = "My name is ryan";

  $scope.quotes = dataService.getQuotes();

  //$scope.deleteMe = dataService.removeData;
  //this is referring to the function, with the () the function is executed.

  $scope.deleteThis = function(index){
    dataService.removeData(index);
    $scope.quotes = dataService.getQuotes();
  };

  $scope.addQuote = function(newQuoteText, newQuoteAuthor){
    var quoteObject = {
      text: newQuoteText,
      author: newQuoteAuthor
    };
    dataService.addData(quoteObject);

    $scope.quotes = dataService.getQuotes();

    $scope.newQuoteText = "";
    $scope.newQuoteAuthor = "";
  };
});
