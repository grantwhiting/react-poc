import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import './franchiseContactCart.css';
import {Link} from 'react-router-dom';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
    removeFromCart: any;
}

const FranchiseContactCart = (props: Props) => {
    const getFranchiseCartData = () => {
        const arr = props.franchises.filter((item: Franchise) => props.franchiseCart.indexOf(item.name) >= 0);
        return arr.map((franchise: Franchise) => {
            return(
                <li key={franchise.franchiseId} className="list-group-item">
                    <span>
                        <Link to={`/franchise-opportunities/${franchise.shortName}-franchise-for-sale/`}>
                            {franchise.name}
                        </Link>
                        <button className="remove-button" onClick={() => {props.removeFromCart(franchise.franchiseId, franchise.name);}}>&times;</button>
                    </span>
                </li>
            );
        });
    };

    return(
        <div className="franchise-contact-cart list-group">
            <li className="list-group-item list-group-item-info title">Franchise Request List</li>
            {props.franchiseCart[0] === '' && props.franchiseCart.length === 1 || props.franchiseCart.length === 0 ? <li className="list-group-item">Select franchises that you want to learn more about!</li> : ''}
            {getFranchiseCartData()}
        </div>
    );
};

export default FranchiseContactCart;