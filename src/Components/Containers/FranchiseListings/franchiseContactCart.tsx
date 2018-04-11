import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import './franchiseContactCart.css';
import {Link} from 'react-router-dom';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
    removeFromFranchiseCart: any;
    // addToFranchiseCart: any;
}
interface State {}



class FranchiseContactCart extends React.Component<Props, State> {

    removeFromCart(id: number, name: string){
        document.cookie = `franchiseInCart_${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        this.props.removeFromFranchiseCart(name);
        // const selected = document.getElementsByClassName(`${id}`);
       
        // if(selected[0].classList.contains('addedToCart')){
        //     selected[0].classList.remove('addedToCart');
        //     console.log(selected[0].innerHTML);
        //     selected[0].classList.add('addToCart');
        //     selected[0].innerHTML = 'Add to Request List';
        // }
        // console.log(selected);
    }


    getFranchiseCartData() {
        const arr = this.props.franchises.filter((item: Franchise) => this.props.franchiseCart.indexOf(item.name) >= 0);
        return arr.map((item: Franchise) => {
            return (
                <li key={item.franchiseId} className="list-group-item">
                    <span>
                        <Link to={`/franchise-opportunities/${item.shortName}-franchise-for-sale/`}>
                            {item.name}
                        </Link>
                        {/* <button className="remove-button" onClick={() => {this.removeFromCart(item.franchiseId, item.name);}}>X</button> */}
                    </span>
                </li>
            );
        });
    }

    render() {
        console.log(this.props.franchiseCart,'FRANCHISE CART');
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