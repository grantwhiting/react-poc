import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import FranchiseListItem from './franchiseListItem';

interface Props {
    franchises: Franchise[];
    franchiseInCart: boolean;
    addToCart: any;
    removeFromCart: any;
}

interface State {}

class FranchiseListings extends React.Component<Props, State> {

    renderFranchiseList() {
        if (this.props.franchises.length === 0) {
            return <div>Loading franchises...</div>;
        }
        
        const franchiseListItem = this.props.franchises.map((item: Franchise) => {
            const props = {
                franchiseId: item.franchiseId,
                name: item.name,
                shortName: item.shortName,
                address: item.address,
                address2: item.address2,
                city: item.city,
                stateId: item.stateId,
                zip: item.zip,
                countryId: item.countryId,
                localPhone: item.localPhone,
                minCapitalMin: item.minCapitalMin,
                minCapitalMax: item.minCapitalMax,
                minWorthMin: item.minWorthMin,
                minWorthMax: item.minWorthMax,
                franchiseFeeMin: item.franchiseFeeMin,
                franchiseFeeMax: item.franchiseFeeMax,
                totalInvestmentMin: item.totalInvestmentMin,
                totalInvestmentMax: item.totalInvestmentMax,
                lowCost: item.lowCost,
                businessOpportunity: item.businessOpportunity,
                highCapital: item.highCapital,
                shortDescription: item.shortDescription,
                generalDescription: item.generalDescription,
                createdDate: item.createdDate,
                franchiseImage: item.franchiseImage
            };
            
            return <FranchiseListItem key={item.franchiseId} {...props} franchiseInCart={this.props.franchiseInCart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />;
        });

        return <div className="search-results">{franchiseListItem}</div>;
    }

    render() {
        return this.renderFranchiseList();
    }
}

export default FranchiseListings;