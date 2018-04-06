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

    componentDidMount() {
        this.setState({
            data: this.props.fetchFranchise()
        });
    }

    render() {
        const franchiseListItem = this.props.franchise.map((item: Franchise[]) => {
            const props = {
                franchiseId: item[0].franchiseId,
                name: item[0].name,
                address: item[0].address,
                address2: item[0].address2,
                city: item[0].city,
                stateId: item[0].stateId,
                zip: item[0].zip,
                countryId: item[0].countryId,
                localPhone: item[0].localPhone,
                minCapitalMin: item[0].minCapitalMin,
                minCapitalMax: item[0].minCapitalMax,
                minWorthMin: item[0].minWorthMin,
                minWorthMax: item[0].minWorthMax,
                franchiseFeeMin: item[0].franchiseFeeMin,
                franchiseFeeMax: item[0].franchiseFeeMax,
                totalInvestmentMin: item[0].totalInvestmentMin,
                totalInvestmentMax: item[0].totalInvestmentMax,
                lowCost: item[0].lowCost,
                businessOpportunity: item[0].businessOpportunity,
                highCapital: item[0].highCapital,
                shortDescription: item[0].shortDescription,
                generalDescription: item[0].generalDescription,
                createdDate: item[0].createdDate,
                franchiseImage: item[0].franchiseImage
            };
            
            return <FranchiseListItem key={item[0].franchiseId} {...props} />;
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