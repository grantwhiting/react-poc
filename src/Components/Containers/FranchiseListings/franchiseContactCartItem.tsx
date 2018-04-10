import * as React from 'react';

interface Props {
    franchiseName: string;
}
interface State {}

class FranchiseContactCartItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <span>{this.props.franchiseName}</span>;
    }
}

export default FranchiseContactCartItem;