import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchFranchise } from '../../Actions';
import { Franchise } from '../../Interfaces/interfaces';
import { FranchiseListItem } from './franchiseListItem';
// import { FranchiseListItem } from './franchiseListItem';

interface Props {
    franchise: any;
    fetchFranchise: any;
}

interface State {
    data: object[];
}

class FranchiseListings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            data: this.props.fetchFranchise()
        });
    }

    render() {
        const franchiseListItem = this.props.franchise.map((item: Franchise) => {
            const props = {
                franchiseId: item.franchiseId,
                name: item.name,
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
            return <FranchiseListItem key={item.franchiseId} {...props} />;
        });

        return(
            <div>
                <h1>Franchise List</h1>
                <div className="franchise-list">
                    {franchiseListItem}
                </div>
            </div>
        );
    }
}

function mapStateToProps({franchise}: any) {
    return { franchise };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchFranchise}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FranchiseListings);