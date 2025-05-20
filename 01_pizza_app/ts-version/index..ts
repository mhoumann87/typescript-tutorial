/**
 * Challenge: Create a Pizza object type: It should include a 'name'
 * and a 'price' property
 */
type Pizza = {
    name: string;
    price: number;
}

const menu = [
    {name: "Margarita", price: 8,},
    {name: "Pepperoni", price: 10,},
    {name: "Hawaiian", price: 10,},
    {name: "Veggie", price: 9,},
];

let cashInRegister = 100;
let nextOrderId: number = 1;

/**
 * Challenge: Add an order type. It should have 'id', 'pizza', 'status' properties.
 */
type Order = {
    id: number;
    pizza: Pizza;
    status: string;
}

const orderQueue = [];


/**
 * Challenge: Add a utility function "addNewPizza" that takes an
 * pizza object and adds it to the menu;
 */

const addNewPizza = (pizzaObj: Pizza) => menu.push(pizzaObj);

/**
 * Write another utility function, "placeOrder", that takes a
 * pizza name and:
 * 1. finds that pizza in the menu
 * 2. adds the income to the cashInRegister
 * 3. pushes a new order object to the orderQueue
 *    (e.g. {pizza: selectedPizzaFromStep1, status: 'Ordered'})
 * 4. returns the new order object in case we need it later
 */

const placeOrder = (pizzaName: string) => {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    // Check to see if we have a 'selectedPizza' to prevent errors
    if (!selectedPizza) {
        console.error(`${pizzaName} not in our menu`);
        return;
    }
    cashInRegister += selectedPizza.price;

    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'Ordered' };
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

const completeOrder = (orderId: number) => {
    const selectedOrder = orderQueue.find(pizzaObj => pizzaObj.id === orderId);
    selectedOrder.status = 'Completed';
    return selectedOrder;
}

addNewPizza({name: 'Chicken Bacon Ranch', price: 12});
addNewPizza({name: 'BBQ Chicken', price: 12});
addNewPizza({name: 'Spicy Sausage', price: 11});

placeOrder('Chicken Bacon Ranch');
completeOrder(1);

console.log('Menu', menu);
console.log('Cash in register',cashInRegister);
console.log('Order Queue: ', orderQueue);

