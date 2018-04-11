import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import { Link } from 'react-router-dom';
import './franchiseListings.css';
// import { addToFranchiseCart, removeFromFranchiseCart } from '../../../Actions';
// import { createStore } from 'redux';
// import franchiseCart from '../../../Reducers/reducer_franchiseCart';

// const store = createStore(franchiseCart);

interface FranchiseListItemProps extends Franchise {
    addToFranchiseCart: any;
    removeFromFranchiseCart: any;
}

interface State {
    sentToCart: boolean;
}

class FranchiseListItem extends React.Component<FranchiseListItemProps, State> {
    constructor(props: FranchiseListItemProps) {
        super(props);
        this.state = {
           sentToCart: this.existsInCart(this.props.franchiseId)
        };
    }

    addToCart(id: number, name: string) {
        this.setState({
            sentToCart: true
        });

        // add cookie
        document.cookie = `franchiseInCart_${id}=${name}`;

        // add franchise to cart in store
        // store.dispatch(addToFranchiseCart(name));
        this.props.addToFranchiseCart(name);
    }

    removeFromCart(id: number, name: string) {
        this.setState({
            sentToCart: false
        });

        // remove cookie
        document.cookie = `franchiseInCart_${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

        // remove franchise from cart
        // store.dispatch(removeFromFranchiseCart(name));
        this.props.removeFromFranchiseCart(name);
    }

    
    numberWithCommas(amount: number){
        return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    existsInCart(id: number): boolean {
        var name = `franchiseInCart_${id}`;
        var pattern = RegExp(name + '=.[^;]*');
        var matched = document.cookie.match(pattern);
        if (matched) {
            return true;
        }       

        return false;
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
                    key={this.props.franchiseId}
                    className={this.state.sentToCart ? `addedToCart ${this.props.franchiseId}`  : `addToCart ${this.props.franchiseId}`} 
                    onClick={() => {this.state.sentToCart ? this.removeFromCart(this.props.franchiseId, this.props.name) : this.addToCart(this.props.franchiseId, this.props.name);}}
                >
                    {this.state.sentToCart === true ? (<i className="glyphicon glyphicon-ok" />) : ''}
                    {this.state.sentToCart ? ' Added to List' : 'Add to Request List'}
                </button>
            </div>
        );
    }
}

export default FranchiseListItem;