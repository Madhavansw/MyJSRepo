const _promise = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 1000);
    });
};

_promise().then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});