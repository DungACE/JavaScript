// bat dong bo trong nodejs
const second = () => {
    setTimeout(() => {
        console.log('async');
    }, 2000)
}

const first = () => {
    console.log('the first');
    second();
    console.log('second');
}
first();
console.log('the end');
//the first
//second
//the end
//async

/*
 * call stack
 * web api
 * message queue
 * event loop
 */

/**
 * callback
 */
// function asyncFunction(callback) {
//     setTimeout(() => {
//         callback(1);
//         setTimeout(() => {
//             callback(2);
//         }, 2000);
//     }, 2000);
// }
// const printNum = function(num) {
//      console.log(num)
//  }
// asyncFunction(printNum); 
// 1
// 2

/**
 * promise
 */

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4])
    }, 2000);
});
const getName = (ids) => {
    return new Promise((resolve, reject) => {
        setTimeout((index) => {
            resolve(`${index} : Dung`)
        }, 2000, ids);
    });
}

getIds
    .then(id => {
        console.log(id);
        return getName(id[2]);
    })
    .then(name => {
        console.log(name);
    })
    .catch(error => {
        console.log(error)
    })

//tham so phai la 1 ham
Promise.resolve(1)
    .then(2)
    .then(console.log)

//promise.all()
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
  //reject(console.log('error'))
});
Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});

//promise.race()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});
Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
});


/** 
 * 
 * Async/await
 */
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4])
    }, 2000);
});
const getName = (ids) => {
    return new Promise((resolve, reject) => {
        setTimeout((index) => {
            resolve(`${index} : Dung`)
        }, 2000, ids);
    });
}
async function getIdsAsync() {
    try {
        const id = await getIds;
        console.log(id);
        try {
            const name = await getName(id[1])
            console.log(name)
        }
        catch(error) {
            console.log(error)
        }
    }
    catch(error) {
        console.log(error)
    }
}
const get = getIdsAsync()
console.log(get)





