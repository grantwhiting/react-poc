import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
}
interface State {}

class FranchiseContactCart extends React.Component<Props, State> {

    getFranchiseCartData() {
        let franchiseCartArray: any[] = [];
        franchiseCartArray = this.props.franchises.map((item: Franchise) => {
            if (this.props.franchiseCart.indexOf(item.name) >= 0) {
                return item.name;
            }
            return;
        });

        return franchiseCartArray;
    }

    render() {
        return(
            <div className="franchise-contact-cart">
                {this.props.franchiseCart.map((item: string, idx: number) => {
                    return <p key={idx}>{item}</p>;
                })}
            </div>
        );
    }
}

export default FranchiseContactCart;