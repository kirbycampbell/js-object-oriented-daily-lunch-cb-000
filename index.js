// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name){
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId == this.id;
    });
  }
  customers(){
    return store.customers.filter(customer => {
      return customer.neighborhoodId == this.id;
    });
  }
}

class Customer {
  constructor(name, neighborhoodId){
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
}

class Meal {
  constructor(title, price){
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId){
    this.id = ++deliveryId;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this);
  }
  meal(){
    return store.meals.find(meal => {
      return meal.id == this.mealId;
    })
  };
  customer(){
    return store.customers.find(customer => {
      return customer.id == this.customerId;
    })
  };
  neighborhood(){
    return store.neighborhoods.find(neighborhood => {
      return neighbordhood.id == this.neighborhoodId;
    })
  }
}
