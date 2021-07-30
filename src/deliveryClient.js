const KontentDelivery = require('@kentico/kontent-delivery');

const deliveryClient = new KontentDelivery.DeliveryClient({
  projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
});

let getType = (type) => {
  deliveryClient
  .itemsFeedAll()
  .type(type)
  .toObservable()
}

//console.log(getType('article'))

// function test() { 
//     deliveryClient
//         .itemsFeedAll()
//         .type('article')
//         .toPromise();
// }
//let actual;

//let hope = test.then(response => {actual = response});

//await hope;

//console.log(actual)

// let fuck =    deliveryClient
//         .itemsFeedAll()
//         .type('article')
//         .toPromise();

// let me = fuck.then( response => {
//     if (response.ok) {
//         return Promise.resolve(response)
//     }
//     else {
//         return Promise.reject(new Error('error'));
//     }
// })
// .then(response => response.json())
// .then(data => {
//     return data
// })
        

// console.log(me)

export {
    getType
}