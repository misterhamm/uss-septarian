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

export {
    getType
}