import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
}
interface State {}

class FranchiseContactCart extends React.Component<Props, State> {

    getFranchiseCartData() {
        debugger;
        // const franchiseCartArray = this.props.franchises.map((item: Franchise) => {
        //     if (this.props.franchiseCart.indexOf(item.name) >= 0) {
        //         return item.name;
        //     }
        //     return;        
        // });

        const arr = this.props.franchises.filter((item: Franchise) => this.props.franchiseCart.indexOf(item.name) >= 0);

        return arr;
    }

    render() {
        return(
            <div className="franchise-contact-cart">
                {this.getFranchiseCartData().map((item: Franchise, idx: number) => {
                    return <p key={idx}>{item.name}</p>;
                })}
            </div>
        );
    }
}

export default FranchiseContactCart;