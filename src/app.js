import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CartComponent from './components/CartComponent';
class App extends Component {
    constructor(props) {
        super(props);
        this.changeQtyHandler = this.changeQtyHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.state = {
            listItem : [
                {
                    id: 1,
                    title: 'Product medium title',
                    price: 40.00,
                    qty: 1
                },
                {
                    id: 2,
                    title: 'Product title',
                    price: 30.00,
                    qty: 1
                },
                {
                    id: 3,
                    title: 'Product long title',
                    price: 50.00,
                    qty: 3
                },
                {
                    id: 4,
                    title: 'Product short title',
                    price: 20.00,
                    qty: 2
                },
            ]
        }
    }

    componentDidMount() {
        const element = ReactDOM.findDOMNode(this);
        this.setState({
            width: element.offsetWidth
        });
    }
    

    changeQtyHandler(e, id) {
        if (e.target.value < 0) return;
        const listItem = this.state.listItem.map(item => {
            if (item.id == id) {
                item.qty = e.target.value
            }
            return item;
        });
        this.setState({ listItem });
    }

    removeItemHandler({ id }) {
        const listItem = this.state.listItem.filter(item => item.id != id);
        this.setState({ listItem });
    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h1>Welcome to React Workshop in SavvyCom</h1>
                <h1>Shopping Cart</h1>
                <CartComponent
                    listItem={this.state.listItem}
                    changeQtyHandler={this.changeQtyHandler}
                    removeItemHandler={this.removeItemHandler}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);