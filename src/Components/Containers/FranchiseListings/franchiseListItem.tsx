import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import { Link } from 'react-router-dom';
import './franchiseListings.css';

interface FranchiseListItemProps extends Franchise {
    franchiseInCart: boolean;
    addToCart: any;
    removeFromCart: any;
}

interface State {
    franchiseInCart: boolean;
}

class FranchiseListItem extends React.Component<FranchiseListItemProps, State> {

    constructor(props: FranchiseListItemProps) {
        super(props);

        this.state = {
            franchiseInCart: this.existsInCart(this.props.franchiseId)
        };
    }

    addToCart(id: number, name: string): void {
        this.props.addToCart(id, name);

        this.setState({
            franchiseInCart: true
        });
    }

    removeFromCart(id: number, name: string): void {
        this.props.removeFromCart(id, name);

        this.setState({
            franchiseInCart: false
        });
    }
    
    numberWithCommas(amount: number): string {
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
                    className={this.state.franchiseInCart ? `addedToCart ${this.props.franchiseId}`  : `addToCart ${this.props.franchiseId}`} 
                    onClick={() => {this.state.franchiseInCart ? this.removeFromCart(this.props.franchiseId, this.props.name) : this.addToCart(this.props.franchiseId, this.props.name);}}
                >
                    {this.state.franchiseInCart ? (<i className="glyphicon glyphicon-ok" />) : ''}
                    {this.state.franchiseInCart ? ' Added to List' : 'Add to Request List'}
                </button>
            </div>
        );
    }
}

export default FranchiseListItem;