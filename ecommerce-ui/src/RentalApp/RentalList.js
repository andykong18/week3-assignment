import React, { Component } from 'react'
import Rental from './Rental'
import airbnbs from './airbnbs'
import ShoppingItem from './ShoppingItem';


class RentalList extends Component {
    constructor() {
        super();
        this.state = {
            airbnbs: airbnbs,
            shoppingItems: []
        };
    }
    //add and delete function
    handleAdd = rental => {
        this.setState({
            shoppingItems: [
                ...this.state.shoppingItems, rental
            ]
        })
    };

    handleDelete = itemTitle => {
        const shoppingItems = this.state.shoppingItems.filter(item => item.title !== itemTitle);
        this.setState({ shoppingItems });
    };
    // calculate total price in shopping cart
    total = () => {
        let totalPrice = 0;
        this.state.shoppingItems.forEach((item) => {
            totalPrice += item.payment.cost;
        });
        return totalPrice;
    };

    render() {
        return (
            <div className="container-fluid row">
                <div className="row col-9">
                    {this.state.airbnbs.map((rental, idx) => (
                        <div className="col-md-4" key={idx}>
                            <Rental rental={rental}
                                onAdd={this.handleAdd}
                            />
                        </div>
                    ))}
                </div>
                <div className="col-3">
                    <h4 className="text-center">Shopping Cart</h4>
                    <div className="row border-bottom">
                        <div className="col-8">Title</div>
                        <div className="col-4">Price</div>
                    </div>
                    {this.state.shoppingItems.map((item, idx) => (
                        <div key={idx}>
                            <ShoppingItem item={item}
                                onDelete={this.handleDelete}
                            />
                        </div>
                    ))}
                    <div className="row border-top">
                        <div className="col-8">Total:</div>
                        <div className="col-4">${this.total()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RentalList;
