import * as React from 'react';
import { Franchise } from '../../Interfaces/interfaces';


export const FranchiseListItem = (props: Franchise) => {
    return(
        <li>
            <h3>{props.name}</h3>
        </li>
    );
};
