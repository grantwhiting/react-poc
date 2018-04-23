import * as React from 'react';
import { Franchise } from '../../../Interfaces/interfaces';
import FranchiseListItem from './franchiseListItem';

interface Props {
    franchises: Franchise[];
    franchiseInCart: boolean;
    addToCart: any;
    removeFromCart: any;
    shouldTriggerRemoveFranchise:  boolean;
    franchiseId: number;
    franchiseName: string;
}

const FranchiseListings = (props: Props) => {
    const renderFranchiseList = () => {
        if (props.franchises.length === 0) {
            return <div>Loading franchises...</div>;
        }

        const franchiseListItem = props.franchises.map((franchise: Franchise) => {
            const franchiseListItemProps = {
                franchiseId: franchise.franchiseId,
                name: franchise.name,
                shortName: franchise.shortName,
                address: franchise.address,
                address2: franchise.address2,
                city: franchise.city,
                stateId: franchise.stateId,
                zip: franchise.zip,
                countryId: franchise.countryId,
                localPhone: franchise.localPhone,
                minCapitalMin: franchise.minCapitalMin,
                minCapitalMax: franchise.minCapitalMax,
                minWorthMin: franchise.minWorthMin,
                minWorthMax: franchise.minWorthMax,
                franchiseFeeMin: franchise.franchiseFeeMin,
                franchiseFeeMax: franchise.franchiseFeeMax,
                totalInvestmentMin: franchise.totalInvestmentMin,
                totalInvestmentMax: franchise.totalInvestmentMax,
                lowCost: franchise.lowCost,
                businessOpportunity: franchise.businessOpportunity,
                highCapital: franchise.highCapital,
                shortDescription: franchise.shortDescription,
                generalDescription: franchise.generalDescription,
                createdDate: franchise.createdDate,
                franchiseImage: franchise.franchiseImage
            };
            
            return(
                <FranchiseListItem 
                    key={franchise.franchiseId} 
                    {...franchiseListItemProps} 
                    franchiseInCart={props.franchiseInCart} 
                    addToCart={props.addToCart} 
                    removeFromCart={props.removeFromCart} 
                    shouldTriggerRemoveFranchise={props.shouldTriggerRemoveFranchise}
                    franchiseIdToRemove={props.franchiseId}
                    franchiseNameToRemove={props.franchiseName}
                />
            );
        });

        return <div className="search-results">{franchiseListItem}</div>;
    };

    return renderFranchiseList();
};

export default FranchiseListings;