module.exports = function delay(time, object, method, args) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(method in object){
                resolve(object[method].apply(this, args));
            }else{
                reject(`Object has no method: ${method}`);
            }
        }, time);
    });
};
