import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rental extends Component {
    // static propTypes = {
    //     article: PropTypes.shape({
    //         author: PropTypes.shape({
    //             name: PropTypes.string.isRequired,
    //             image: PropTypes.string.isRequired,
    //             isMediumMember: PropTypes.bool.isRequired
    //         }).isRequired,
    //         description: PropTypes.string.isRequired,
    //         hasAudioAvailable: PropTypes.bool.isRequired,
    //         image: PropTypes.string.isRequired,
    //         link: PropTypes.string.isRequired,
    //         // Whether an article is behind a paywall
    //         memberPreview: PropTypes.bool.isRequired,
    //         minutesToRead: PropTypes.number.isRequired,
    //         postedDate: PropTypes.string.isRequired,
    //         title: PropTypes.string.isRequired
    //     }).isRequired
    // }

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
                        onClick={() => onAdd(title)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default Rental;