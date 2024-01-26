function getValueA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(2) }, 1000);
    });
}

function getValueB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(3) }, 2000);
    });
}

function getValueC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(4) }, 3000);
    });
}


async function getABC() {
    // Promise.all() allows us to send all requests at the same time. 
    let results = await Promise.all([getValueA(), getValueB(), getValueC()]);

    return results.reduce((total, value) => total * value);
}

(async () => {
    const startTime = Date.now();
    const res = await getABC().then(result => result);
    const endTime = Date.now();

    const timeTaken = endTime - startTime;

    console.log(`Result of operation = ${res}`);
    console.log(`Time taken to perform addition = ${timeTaken} milliseconds`);
})();