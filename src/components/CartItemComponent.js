import React from 'react';
import ButtonComponent from './ButtonComponent';

const CartItemComponent = ({ item: { id, title, price, qty }, changeQtyHandler, removeItemHandler }) => {
    return (
        <tr>
            <td style={myStyle.td}>
                <div style={{width: '50px', height: '50px', background: 'grey'}}></div>
            </td>
            <td style={myStyle.td}>
                <div>{title}</div>
                <div>${price}</div>
            </td>
            <td style={myStyle.td}>
                {(price * qty).toFixed(2)}
            </td>
            <td style={myStyle.td}>
                <input type='number' onChange={(e) => {changeQtyHandler(e, id)}} value={qty}/>
            </td>
            <td style={myStyle.td}>
                <ButtonComponent clickHandler={removeItemHandler} data={{ id }} label='Remove'/>
            </td>
        </tr>
    );
};

const myStyle = {
    td: {
        padding: '10px'
    }
}

export default CartItemComponent;