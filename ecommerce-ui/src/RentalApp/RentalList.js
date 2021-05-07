import React, { Component } from 'react'
import Rental from './Rental'
import airbnbs from './airbnbs'
import ShoppingItem from './ShoppingItem';


class RentalList extends Component {
    constructor() {
        super();
        this.state = {
            airbnbs: airbnbs,
            shoppingItems: airbnbs
        };
    }
//add and delete function
//onadd = this,
    //on to hadle events
    handleAdd = rentalTitle => {

    }
    handleDelete = itemTitle => {
        const shoppingItems = this.state.shoppingItems.filter(item => item.title !== itemTitle);
        this.setState({ shoppingItems });
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
                </div>
            </div>
        );
    }
}

export default RentalList;
