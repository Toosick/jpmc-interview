module.exports = function delay(time, object, method, args) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(object[method].apply(this, args))
        }, time);
    });
};
