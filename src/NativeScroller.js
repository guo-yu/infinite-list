var StyleHelpers = require('./StyleHelpers');

var NativeScroller = function (scrollElement, callback) {

    var ticking = false;

    function requestTick() {
        if(!ticking) {
            requestAnimationFrame(function () {
                callback(scrollElement.scrollTop);
                ticking = false;
            })
        }
        ticking = true;
    }

    scrollElement.addEventListener('scroll', function(){
        requestTick();
    });

    return {
        setDimensions: function(min, max){
            StyleHelpers.applyElementStyle(scrollElement, {
                height: (max - min) + 'px'
            });
        },
        scrollTo: function(){
            callback(scrollElement.scrollTop);
        }
    }
}

module.exports = NativeScroller;
