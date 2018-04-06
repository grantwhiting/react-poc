import * as React from 'react';
import { Franchise } from '../../Interfaces/interfaces';


export const FranchiseListItem = (franchise: Franchise) => {
    return(
        <div>
            <h3>{franchise.name}</h3>
        </div>
    );
};
