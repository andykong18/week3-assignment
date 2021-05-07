import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rental extends Component {
    static propTypes = {
        rental: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
            }).isRequired,
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }).isRequired,
            host: PropTypes.shape({
                name: PropTypes.number.isRequired,
                isSuperhost: PropTypes.bool.isRequired
            }).isRequired,
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            })
        }).isRequired
    }
    //name the function
    render() {
        const { image, title, houseType, location, payment } = this.props.rental;
        const { rental, onAdd } = this.props;

        return (
            <div className="card" style={{ height: 500 }} >
                <img src={image} alt="image 1" className="card-img-top image-fluid" style={{ height: 200 }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{houseType}</p>
                    <p>{location.city}</p>
                    <p>$ {payment.cost}</p>
                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => onAdd(rental)}>
                        Add To Cart
                    </button>
                </div>
            </div >
        )
    }
}

export default Rental;