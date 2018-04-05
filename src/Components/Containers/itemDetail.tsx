import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchItem } from '../../Actions';
import '../../style/itemDetail.css';
//import { IApiGetAction } from '../../Interfaces/interfaces';

interface Props {
    item: any;
    fetchItem: any;
}
interface State {}

class ItemDetail extends React.Component<Props, State>{
    
    componentWillMount() {
        this.props.fetchItem();
    }

    render() {
        console.log(this.props.item);
        return(
            <div>{this.renderItem()}</div>
        );
    }

    renderItem() {
        // converts api integer into dollar value
        function convertNum(num: number){
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }

        let data = this.props.item[0];
        if (!data) {
            return(
                <div>nothing here</div>
            );
        }
        return(
            data.map(function(info: any) {
                return(
                    <div key={info.id}>
                        <div>
                            <h1 className="detail-franchise-name">{info.name}</h1>
                            <p className="detail-franchise-sdesc">{info.shortDescription}</p>
                            <p>{info.address}, {info.city}, {info.stateId}, {info.zip}</p>
                            <p className="detail-franchise-financial">Minimum Liquid Capital: <b>${convertNum(info.minCapitalMin)}</b></p>
                            <p className="detail-franchise-financial">Total Investment Range <b>${convertNum(info.totalInvestmentMin)}</b> - <b>${convertNum(info.totalInvestmentMax)}</b></p>
                        </div>
                        {/* placeholder for data */}
                        <div>
                            <h3>Sample Data</h3>
                            <p>franchiseId: {info.franchiseId}</p>
                            <p>name: {info.name}</p>
                            <p>address: {info.address}</p>
                            <p>address2: {info.address2}</p>
                            <p>city: {info.city}</p>
                            <p>stateId: {info.stateId}</p>
                            <p>zip: {info.zip}</p>
                            <p>countryId: {info.countryId}</p>
                            <p>localPhone: {info.localPhone}</p>
                            <p>minCapitalMin: {info.minCapitalMin}</p>
                            <p>minCapitalMax: {info.minCapitalMax}</p>
                            <p>minWorthMin: {info.minWorthMin}</p>
                            <p>minWorthMax: {info.minWorthMax}</p>
                            <p>franchiseFeeMin: {info.franchiseFeeMin}</p>
                            <p>franchiseFeeMax: {info.franchiseFeeMax}</p>
                            <p>totalInvestmentMin: {info.totalInvestmentMin}</p>
                            <p>totalInvestmentMax: {info.totalInvestmentMax}</p>
                            <p>lowCost: {info.lowCost}</p>
                            <p>businessOpportunity: {info.businessOpportunity}</p>
                            <p>highCapital: {info.highCapital}</p>
                            <p>shortDescription: {info.shortDescription}</p>
                            <p>generalDescription: {info.generalDescription}</p>
                            <p>createdDate: {info.createdDate}</p>                    
                            <p>display_image: {info.display_image}</p>
                        </div>
                    </div>
                );
            })
        );
    }
}
function mapStateToProps({item}: any) {
    return { item };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({fetchItem}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
