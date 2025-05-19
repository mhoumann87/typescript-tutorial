const menu = [
  {name: "Margarita", price: 8,},
  {name: "Pepperoni", price: 10,},
  {name: "Hawaiian", price: 10,},
  {name: "Veggie", price: 9,},
];

const cashInRegister = 100;
const orderQueue = [];
const nextOrderId = 1;

/**
 * Challenge: Add a utility function "addNewPizza" that takes an
 * pizza object and adds it to the menu;
 */

const addNewPizza = (pizzaObj) => menu.push(pizzaObj);

/**
 * Write another utility function, "placeOrder", that takes a
 * pizza name and:
 * 1. finds that pizza in the menu
 * 2. adds the income to the cashInRegister
 * 3. pushes a new order object to the orderQueue
 *    (e.g. {pizza: selectedPizzaFromStep1, status: 'Ordered'})
 * 4. returns the new order object in case we need it later
 */

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

  cashInRegister += selectedPizza.price;

  const newOrder = { id: nextOrderId++, selectedPizza, status: 'Ordered' };
  orderQueue.push(newOrder);
  return newOrder;
}

/**
 * Challenge: Write another utility function "completeOrder" that takes
 * orderId as a parameter and finds the correct order and marks the status
 * to 'Completed'. For good measure return the found order from the
 * function.
 *
 * Note: You will need to ensure that we're adding IDs to our orders when
 * we create a new order. You can use a global 'nextOrderId' variable and
 * increment it every time a new order is created, to simulate real IDs  being
 * managed for us by a database.
 */

const completeOrder = (id) => {
  const selectedOrder = orderQueue.find(pizzaObj => pizzaObj.id === id);
  selectedOrder.status = 'Completed';
  return selectedOrder;
}

addNewPizza({name: 'Chicken Bacon Ranch', price: 12});
addNewPizza({name: 'BBQ Chicken', price: 12});
addNewPizza({name: 'Spicy Sausage', price: 11});

placeOrder('Chicken Bacon Ranch');
completeOrder('1');

console.log('Menu', menu);
console.log('Cash in register',cashInRegister);
console.log('Order Queue: ', orderQueue);

