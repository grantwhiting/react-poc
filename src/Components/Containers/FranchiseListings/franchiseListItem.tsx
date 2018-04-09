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
    }

    addToCart(id: number) {
        this.setState({
            sentToCart: true
        });

        // add cookie
        document.cookie = `franchiseInCart_${id}=${id}`;

        console.log(document.cookie);

        // send of async post to add item to cart
    }

    removeFromCart(id: number) {
        this.setState({
            sentToCart: false
        });

        // remove cookie
        document.cookie = `franchiseInCart_${id}=; expires=expires=Thu, 01 Jan 1970 00:00:00 UTC}`;

        console.log(document.cookie);

        // send of async post to remove item from cart
    }
    
    numberWithCommas(amount: number){
        return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    render() {
        return(
            <div className="fd_listing">
                <Link to={`/franchise-opportunities/${this.props.shortName}-franchise-for-sale/`}>
                    <span className="fdTitle">{this.props.name}</span>
                    <img className="pic_fdSponsor" src={`https://www.findafranchise.com/_img/_franchise/${this.props.franchiseId}/${this.props.franchiseImage.displayImage}`} />
                    <p className="desc"><span>{this.props.shortDescription}</span></p><p className="capital"><span className="capReq">Capital Required</span> <span className="fdCapRequired">{this.numberWithCommas(this.props.totalInvestmentMin)}</span></p>
                </Link>
                <button 
                    className={this.state.sentToCart ? 'addedToCart' : 'addToCart'} 
                    onClick={() => {this.state.sentToCart ? this.removeFromCart(this.props.franchiseId) : this.addToCart(this.props.franchiseId);}}
                >
                    {this.state.sentToCart ? 'Added to List' : 'Add to Request List'}
                    <i className="glyphicon glyphicon-ok" />
                </button>
            </div>
        );
    }
}
