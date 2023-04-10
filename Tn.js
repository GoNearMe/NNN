const user = {
   name: 'John',
   age: 30,
   orders: []
};
  
const newOrder = {
   id: 1,
   items: ['laptop', 'mouse', 'keyboard'],
   total: 1500
};
  
user.orders = [...user.orders, newOrder];
  
console.log(user);