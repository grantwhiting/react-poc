import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchFranchises } from '../../../Actions';
import { addToFranchiseCart, removeFromFranchiseCart } from '../../../Actions';
import { Franchise } from '../../../Interfaces/interfaces';
import FranchiseListings from './franchiseListings';
import FranchiseContactCart from './franchiseContactCart';

interface Props {
    readonly franchises: Franchise[];
    readonly franchiseCart: string[];
    fetchFranchises: any;
    addToFranchiseCart: any;
    removeFromFranchiseCart: any;
}
interface State {}

class FranchiseListingsPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchFranchises();
    }

    render() {
        return(
            <div className="franchise-listing-page-content">
                <FranchiseListings
                    franchises={this.props.franchises}
                    addToFranchiseCart={this.props.addToFranchiseCart}
                    removeFromFranchiseCart={this.props.removeFromFranchiseCart}
                />
                <FranchiseContactCart franchises={this.props.franchises} franchiseCart={this.props.franchiseCart} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return { 
        franchises: state.franchises,
        franchiseCart: state.franchiseCart.arr
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchFranchises, addToFranchiseCart, removeFromFranchiseCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FranchiseListingsPage);