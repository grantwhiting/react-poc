import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import { Link } from 'react-router-dom';
import './franchiseListings.css';

interface State {
    sentToCart: boolean;
}

export class FranchiseListItem extends React.Component<Franchise, State> {
    constructor(props: Franchise) {
        super(props);
        this.state = {
            sentToCart: false
        };

        // bind event handlers
        this.toggleAddToCart = this.toggleAddToCart.bind(this);
    }

    toggleAddToCart() {
        this.setState((prevState) => ({
            sentToCart: !prevState.sentToCart,
        }));
    }

    render() {
        return(
            <div className="fd_listing">
                <Link to={`/franchise-opportunities/${this.props.franchiseId}-franchise-for-sale/`}>
                    <span className="fdTitle">{this.props.name}</span>
                    <img className="pic_fdSponsor" src={`https://www.findafranchise.com/_img/_franchise/${this.props.franchiseId}/${this.props.franchiseImage.displayImage}`} />
                    <p className="desc"><span>{this.props.shortDescription}</span></p><p className="capital"><span className="capReq">Capital Required</span> <span className="fdCapRequired">${this.props.totalInvestmentMin}</span></p>
                </Link>
                <button className={this.state.sentToCart ? 'addedToCart' : 'addToCart'} onClick={this.toggleAddToCart}>
                    {this.state.sentToCart ? 'Added to List' : 'Add to Request List'}
                    <i className="glyphicon glyphicon-ok" />
                </button>
            </div>
        );
    }
}
