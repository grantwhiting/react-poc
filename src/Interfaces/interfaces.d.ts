// add all global interfaces here

export interface Franchise {
    franchiseId: number,
    name: string,
    shortName: string;
    address: string,
    address2: string,
    city: string,
    stateId: number,
    zip: string,
    countryId: number,
    localPhone: string,
    minCapitalMin: number,
    minCapitalMax: number,
    minWorthMin: number,
    minWorthMax: number,
    franchiseFeeMin: number,
    franchiseFeeMax: number,
    totalInvestmentMin: number,
    totalInvestmentMax: number,
    lowCost: number,
    businessOpportunity: number,
    highCapital: number,
    shortDescription: string,
    generalDescription: string,
    createdDate: Date,
    franchiseImage: FranchiseImage;
}

interface FranchiseImage {
    imageId: number;
    displayImage: string;
    imageWidth: number;
    franchiseId: number;
}