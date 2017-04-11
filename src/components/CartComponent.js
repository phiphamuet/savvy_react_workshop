import React from 'react';
import CartListComponent from './CartListComponent';
import ButtonComponent from './ButtonComponent';

const CartComponent = ({ listItem, changeQtyHandler, removeItemHandler }) => {
    let total = listItem.reduce((prev, next) => prev + next.price * next.qty, 0);
    return (
        <div style={{ background: '#f2f2f2', borderRadius: '5px', padding: '20px' }}>
            <h3>Items in your cart</h3>
            <CartListComponent
                listItem={listItem}
                changeQtyHandler={changeQtyHandler}
                removeItemHandler={removeItemHandler}
            />
            <h1>Total: ${total.toFixed(2)}</h1>
        </div>
    );
};

export default CartComponent;