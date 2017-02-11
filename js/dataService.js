quoteBook.service("dataService", function() {
    var quotes = [{
            text: 'Life isn\'t about getting and having, it\'s about giving and being.',
            author: 'Kevin Kruse'
        },
        {
            text: 'Whatever the mind of man can conceive and believe, it can achieve',
            author: 'Napoleon Hill'
        },
        {
            text: 'Strive not to be a success, but rather to be of value.',
            author: 'Albert Einstein'
        },
        {
            text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
            author: 'Robert Frost'
        },
        {
            text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
            author: 'Amelia Earhart'
        },
        {
            text: 'Life is what happens to you while you\'re busy making other plans.',
            author: 'John Lennon'
        },
        {
            text: 'What even is a jQuery?',
            author: 'Tyler S. McGinnis'
        }
    ];

    this.getQuotes = function() {
      if(!localStorage.quoteLocalStorage){
        return quotes;
      }
      return JSON.parse(localStorage.quoteLocalStorage);

    };

    this.addData = function(newQuote) {
        if (
          typeof newQuote.text == 'string' &&
          newQuote.text &&
          typeof newQuote.author == 'string' &&
          newQuote.author
        ) {
          var currentQuotes;
          if(localStorage.quoteLocalStorage){
            currentQuotes = JSON.parse(localStorage.quoteLocalStorage);
          }
          else {
            currentQuotes = quotes;
          }

          localStorage.setItem(
            'quoteLocalStorage',
            JSON.stringify([newQuote].concat(currentQuotes)
          ));
        }


    };

    this.removeData = function(index) {
      var currentQuotes;
      if(localStorage.quoteLocalStorage){
        currentQuotes = JSON.parse(localStorage.quoteLocalStorage);
      }
      else {
        currentQuotes = quotes;
      }

      //filter is an array method that returns an array
      var newArrQuotes = currentQuotes.filter(function(e, i){
        if(i !== index){
          return e;
        }
      });

        localStorage.setItem('quoteLocalStorage', JSON.stringify(newArrQuotes));
    };

    // this.saveState = function() {
    //   localStorage.quoteLocalStorage = JSON.stringify(quotes);
    // };

    // this.restoreState = function() {
    //   quotes = JSON.parse(localStorage.quoteLocalStorage);
    // };

});
