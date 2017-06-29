// const page = require('webpage').create();
// page.open('https://fnndsc.github.io/ami/#loader_dicoms', function() {
//   page.render('github.png');
//   phantom.exit();
// });

//http://www.crmarsh.com/phantomjs/

function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 250); //< repeat check every 250ms
};

let webpage = require('webpage').create();
webpage
    .open('https://davidwalsh.name', function(status) {

    })
    .then(function(){
      webpage.viewportSize = { width: 1042, height: 768 };
      webpage.render('dwb.png', { onlyViewport: true });
      slimer.exit()
    });