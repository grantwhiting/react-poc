import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchDetail } from '../../Actions';
// import { Franchise } from '../../Interfaces/interfaces';

interface Props {
    detail: any;
    data: any;
    fetchDetail: any;
    id: any;
    match: any;
}

interface State {
    // data: object[];
}

class FranchiseDetail extends React.Component<Props,State>{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchDetail(id);
    }

    render(){
        // console.log(this.props.detail[0], 'DETAIL PROPS');
        return(
            <div>{this.renderDetails()}</div>
        );
       
    }
    renderDetails(){
        let data = this.props.detail;

        if(!data){
            return(
                <div>Loading...</div>
            );
        }
        return(
            data.map(function(info: any){
                return(
                    <div key={info[0].franchiseId}>
                        <h1>{info[0].name}</h1>
                        <p>{info[0].address}</p>
                        <p>{info[0].address2}</p>
                        <p>{info[0].city}</p>
                        <p>{info[0].minCapitalMin}</p>
                        <p>{info[0].totalInvestmentMin}</p>
                        <p>{info[0].totalInvestmentMax}</p>
                        <p>{info[0].shortDescription}</p>
                    </div>
                );
            })
        );
    }
}

function mapStateToProps({detail}: any) {
    return { detail };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchDetail}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FranchiseDetail);