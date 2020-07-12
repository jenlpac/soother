// test quote API
var html = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

// Create function for random quote
var getQuote=function(data){
  console.log(data);
  if(data.quoteAuthor === "") {
      data.quoteAuthor = "Unknown";
  }
 
  $('#quote').text(data.quoteText);
  $('#author').text('-' + ' ' + data.quoteAuthor);
};
// Call random quote
$.getJSON(html, getQuote, 'jsonp');
  
// Pull new quote into hero every 5 minutes
var newQuote = setInterval(function() {
    $.getJSON(html, getQuote, 'jsonp');
}, 300000);

// Pull new quote on-click
$('#cell').on("click", function() {
    $.getJSON(html, getQuote, 'jsonp');
});

var colors = [
    'start',
    'peach',
    'sky',
    'sea',
];
var currentColor = 0;

var cell = jQuery('#cell');

cell.click(function (evt) {
    // remove the old class before incrementing
    cell.removeClass(colors[currentColor]);
    currentColor += 1;
    currentColor %= colors.length;
    // add the new class
    cell.addClass(colors[currentColor]);
});
