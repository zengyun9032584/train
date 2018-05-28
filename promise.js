function testPromise() {
    return new Promise((resolve) => {
        //模拟异步
        setTimeout(() => {
            resolve(100);
        }, 1000);
    })
}

testPromise().then(function (param) {
    // 回调处理
    console.log(param);
})

/**
 *
 * 定义promise
 * @param {any} fn 
 */
function myPromise(fn) {
    var value = null,
        callbacks = [];
    this.then = (onFulfilled) => {
        callbacks.push(onFulfilled);
    };

    function resolve(value) {
        callbacks.forEach((callback) => {
            callback(value);
        });
    }

    fn(resolve);
}

function testPromise2() {
    return new myPromise((resolve) => {
        //模拟异步
        setTimeout(() => {
            resolve(1000);
        }, 1000);
    })
}

testPromise2().then((param) => {
    console.log(param);
})