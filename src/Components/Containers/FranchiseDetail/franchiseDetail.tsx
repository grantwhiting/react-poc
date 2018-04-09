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

        if(!data){
            return(
                <div>Loading...</div>
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
                    <div key={info[0].franchiseId}>
                        <h1 className="fdTitle">{info[0].name}</h1>
                         <br/>
                         <span className="fdLocation"> {info[0].address},  {info[0].city},  {location[info[0].stateId]} {info[0].zip} </span>
                        <div><img className="pic_fdSponsor" src={`https://www.findafranchise.com/_img/_franchise/${info[0].franchiseId}/${info[0].franchiseImage.displayImage}`} /> </div>
                        <div className="fdBusinessDescription">Business Description
                            <p>{info[0].shortDescription} <br />
                                Investment Required: {numberWithCommas(info[0].totalInvestmentMin)} {info[0].totalInvestmentMax ? '- ' + numberWithCommas(info[0].totalInvestmentMax) : ''} <br/>
                                Contact Info: {phoneConversion(info[0].localPhone)}
                            </p></div>
                    </div>
                );
            })
        );
    }
}

{/* <div key={info[0].franchiseId}>
<h1 className="fdTitle">{info[0].name}</h1>
<p>{info[0].address}</p>
<p>{info[0].address2}</p>
<p>{info[0].city}</p>
<p>{info[0].minCapitalMin}</p>
<p>{info[0].totalInvestmentMin}</p>
<p>{info[0].totalInvestmentMax}</p>
<p>{info[0].shortDescription}</p>
</div> */}

function mapStateToProps({detail}: any) {
    return { detail };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchDetail}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FranchiseDetail);