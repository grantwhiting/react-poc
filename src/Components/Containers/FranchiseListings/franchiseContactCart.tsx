import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import { connect } from 'react-redux';

interface Props {
    franchises: Franchise[];
    franchiseCart: string[];
}
interface State {}

class FranchiseContactCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

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
        debugger;
        return(
            <div className="franchise-contact-cart">
                {this.props.franchiseCart.map((item: string, idx: number) => {
                    return <p key={idx}>{item}</p>;
                })}
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return { 
        franchiseCart: state.franchiseCart.arr
    };
}

export default connect(mapStateToProps)(FranchiseContactCart);