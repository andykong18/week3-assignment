import React, { Component } from 'react';

class ShoppingItem extends Component {
    render() {
        const { title, payment } = this.props.item;
        const { item, onDelete } = this.props;

        return (
            <div className="row">
                <div className="col-8">{title}</div>
                <div className="col-3">${payment.cost}</div>
                <div>
                    <button className="bi bi-trash btn btn-danger btn-sm p-0" onClick={() => onDelete(title)}></button>
                </div>
            </div>
        )
    }
}

export default ShoppingItem;
