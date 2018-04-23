import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchDetail } from '../../../Actions';
import './franchiseDetail.css';
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
        // console.log(data, 'RENDER DETAILS DATA');
        // console.log(data, 'DATA NAME');
        if(!data){
            return(
                <div>.</div>
            );
        }

        function numberWithCommas(amount: number){
            return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        function phoneConversion(s: number){
            var s2 = (''+s).replace(/\D/g, '');
            var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
            return (!m) ? '' : '(' + m[1] + ') ' + m[2] + '-' + m[3];
        }

        const location = {
            4: 'AZ',
            6: 'CA',
            7: 'CO',
            11: 'FL',
            12: 'GA',
            22: 'MD',
            45: 'TX'
        };

        return(
            data.map(function(info: any){
                return(
                    <div key={info.franchiseId}>
                        <h1 className="fdTitle">{info.name}</h1>
                        <hr />
                         <span className="fdLocation"> {info.address},  {info.city},  {location[info.stateId]} {info.zip} </span>
                        <div><img className="pic_fdSponsor" src={`https://www.findafranchise.com/_img/_franchise/${info.franchiseId}/${info.franchiseImage.displayImage}`} /> </div>
                        <div className="fdBusinessDescription">Business Description
                            <p>{info.shortDescription} <br />
                                Investment Required: {numberWithCommas(info.totalInvestmentMin)} {info.totalInvestmentMax ? '- ' + numberWithCommas(info.totalInvestmentMax) : ''} <br/>
                                Contact Info: {phoneConversion(info.localPhone)}
                            </p></div>
                    </div>
                );
            })
        );
    }
}

function mapStateToProps({detail}: any, ownProps: any) {
    // console.log(detail);
    return { detail: detail[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchDetail}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FranchiseDetail);