var quotes = [
    { author: "― Oscar Wilde", quote: "“Be yourself; everyone else is already taken.”" },
    { author: "― Frank Zappa", quote: "“So many books, so little time.”" },
    { author: "― Albert Einstein", quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
    { author: "― Bernard M. Baruch", quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" },
    { author: "― Mae West", quote: "“You only live once, but if you do it right, once is enough.”" },
]
var lastIndex = -1
function quoteOutput(){
    var randomQuote;
    
do{
    var randomQuote= Math.floor(Math.random()*quotes.length)
} while(randomQuote===lastIndex)
lastIndex=randomQuote
    document.getElementById("quote").innerHTML= quotes[randomQuote].quote
    document.getElementById("author").innerHTML= quotes[randomQuote].author
}