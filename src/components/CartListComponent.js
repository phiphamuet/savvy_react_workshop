import React from 'react';
import CartItemComponent from './CartItemComponent';

const CartListComponent = ({ listItem, changeQtyHandler, removeItemHandler }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Product</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    listItem.map(item =>
                        <CartItemComponent
                            key={item.id}
                            item={item}
                            changeQtyHandler={changeQtyHandler}
                            removeItemHandler={removeItemHandler}
                        />
                    )
                }
            </tbody>
        </table>
    );
};

export default CartListComponent;