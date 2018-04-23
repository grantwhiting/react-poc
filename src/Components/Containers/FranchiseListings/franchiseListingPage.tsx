import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchFranchises } from '../../../Actions';
import { addToFranchiseCart, removeFromFranchiseCart } from '../../../Actions';
import { Franchise } from '../../../Interfaces/interfaces';
import FranchiseListings from './franchiseListings';
import FranchiseContactCart from './franchiseContactCart';
import './franchiseListingPage.css';

interface Props {
    readonly franchises: Franchise[];
    readonly franchiseCart: string[];
    fetchFranchises: any;
    addToFranchiseCart: any;
    removeFromFranchiseCart: any;
    franchiseInCart: boolean;
}
interface State {}

class FranchiseListingsPage extends React.Component<Props, State> {
    public shouldTriggerRemoveFranchise: boolean = false;
    public franchiseId: number = 0;
    public franchiseName: string = '';
    
    constructor(props: Props) {
        super(props);

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    
    componentDidMount(): void {
        this.props.fetchFranchises();
    }

    addToCart(id: number, name: string): void {
        this.props.addToFranchiseCart(name);
        document.cookie = `franchiseInCart_${id}=${name}`;
    }

    removeFromCart(id: number, name: string): void {
        this.props.removeFromFranchiseCart(name);
        document.cookie = `franchiseInCart_${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        this.shouldTriggerRemoveFranchise = true;
        this.franchiseId = id;
        this.franchiseName = name;
    }

    render() {
        return(
            <div>
                <h1>Franchise Listings</h1>
                <div className="franchise-listing-page-content flex-container">
                    <div className="listing-container">
                        <FranchiseListings
                            franchises={this.props.franchises}
                            franchiseInCart={this.props.franchiseInCart}
                            addToCart={this.addToCart}
                            removeFromCart={this.removeFromCart}
                            shouldTriggerRemoveFranchise={this.shouldTriggerRemoveFranchise}
                            franchiseId={this.franchiseId}
                            franchiseName={this.franchiseName}
                        />
                    </div>
                    <div className="cart-container">
                        <FranchiseContactCart 
                            franchises={this.props.franchises} 
                            franchiseCart={this.props.franchiseCart} 
                            removeFromCart={this.removeFromCart}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return { 
        franchises: state.franchises,
        franchiseCart: state.franchiseCart.arr,
        franchiseInCart: state.franchiseCart.franchiseInCart
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchFranchises, addToFranchiseCart, removeFromFranchiseCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FranchiseListingsPage);