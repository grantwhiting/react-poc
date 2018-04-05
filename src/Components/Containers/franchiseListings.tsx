import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchFranchise } from '../../Actions';
import { Franchise } from '../../Interfaces/interfaces';
// import { FranchiseListItem } from './franchiseListItem';

interface Props {
    franchise: Franchise[];
    fetchFranchise: any;
}

interface State {
    data: object[];
}

function mapStateToProps({franchise}: any) {
    return { franchise };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchFranchise}, dispatch);
}

class FranchiseListings extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchFranchise();
    }

    // componentDidMount() {
    //     debugger;
    //     this.setState({
    //         data: this.props.fetchFranchise()
    //     });
    // }

    render() {
        return(
            <div>
                <h1>All Franchises</h1>
                {this.renderFranchises(this.props.franchise)}
            </div>
        );
    }

    renderFranchises(franchise: Franchise[]) {
        return(
            franchise.map((item: Franchise) => {
                return(
                    <li key={item.franchiseId}>
                        <h3>{item.name}</h3>
                    </li>
                );
            })
        );
    }

    // render() {
    //     const franchiseListItem = this.state.data.map((item: Franchise) => {
    //         const franchiseProps = {
    //             franchiseId: item.franchiseId,
    //             name: item.name,
    //             address: item.address,
    //             address2: item.address2,
    //             city: item.city,
    //             stateId: item.stateId,
    //             zip: item.zip,
    //             countryId: item.countryId,
    //             localPhone: item.localPhone,
    //             minCapitalMin: item.minCapitalMin,
    //             minCapitalMax: item.minCapitalMax,
    //             minWorthMin: item.minWorthMin,
    //             minWorthMax: item.minWorthMax,
    //             franchiseFeeMin: item.franchiseFeeMin,
    //             franchiseFeeMax: item.franchiseFeeMax,
    //             totalInvestmentMin: item.totalInvestmentMin,
    //             totalInvestmentMax: item.totalInvestmentMax,
    //             lowCost: item.lowCost,
    //             businessOpportunity: item.businessOpportunity,
    //             highCapital: item.highCapital,
    //             shortDescription: item.shortDescription,
    //             generalDescription: item.generalDescription,
    //             createdDate: item.createdDate,
    //             franchiseImage: item.franchiseImage
    //         };
    //         return <FranchiseListItem key={item.franchiseId} {...franchiseProps} />;
    //     });

    //     return(
    //         <ul>
    //             {franchiseListItem}
    //         </ul>
    //     );
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(FranchiseListings);