import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import './franchiseContactCart.css';
import {Link} from 'react-router-dom';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
    removeFromCart: any;
    // addToFranchiseCart: any;
}
interface State {}



class FranchiseContactCart extends React.Component<Props, State> {

    getFranchiseCartData() {
        const arr = this.props.franchises.filter((item: Franchise) => this.props.franchiseCart.indexOf(item.name) >= 0);
        return arr.map((item: Franchise) => {
            return (
                <li key={item.franchiseId} className="list-group-item">
                    <span>
                        <Link to={`/franchise-opportunities/${item.shortName}-franchise-for-sale/`}>
                            {item.name}
                        </Link>
                        <button className="remove-button" onClick={() => {this.props.removeFromCart(item.franchiseId, item.name);}}>X</button>
                    </span>
                </li>
            );
        });
    }

    render() {
        return(
            <div className="franchise-contact-cart list-group">
                <li className="list-group-item list-group-item-info title">Franchise Request List</li>
                {this.props.franchiseCart[0] === '' && this.props.franchiseCart.length === 1 || this.props.franchiseCart.length === 0 ? <li className="list-group-item">Select franchises that you want to learn more about!</li> : ''}
                {this.getFranchiseCartData()}
            </div>
        );
    }
}

export default FranchiseContactCart;