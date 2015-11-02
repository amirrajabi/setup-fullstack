var React = require('react/addons');

console.warn('Hello from .jsx!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
    {
        name:"Ice Cream"
    },
    {
        name:"Waffles"
    },
    {
        name:"Candy"
    },
    {
        name:"Snarks"
    }
];

React.render(<GroceryItemList items={initial} />, app);