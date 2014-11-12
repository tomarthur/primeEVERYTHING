//------------------DOC READY-------------------//


$("document").ready(function(){
    primeEveything();
});

function primeEveything() {
    $(":header").each(function(){
        var str = $( (this) ).text();
        // var randomChunk = getRandom(str);
        // console.log(randomChunk);
        $(this).append( " <a href=\"http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+str+"\">Buy on Amazon</a>" );

        // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        //   console.log(response.farewell);
        // });
        // var newURL = "http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+str+"\"";
        // chrome.tabs.create({ url: newURL });
    });
}

//returns random value in array
function getRandom(string){
    var split = string.split(" ");
    var index = Math.floor(Math.random()*split.length);
    var value = split[index];
    return value;
}
