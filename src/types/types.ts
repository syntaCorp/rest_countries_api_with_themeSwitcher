// types defitions
export interface countriesStateType {
    countries: Array<any>,
    status: 'idle' | 'failed' | 'loading' | 'success',
    error: string,
}
export interface countryNameType {
    common: string
}

export interface flagType {
    png: string
    svg: string,
    alt: string
}

export interface CountryType {
    name: countryNameType,
    capital: string,
    population: number,
    region: string,
    flags: flagType,
    alt: string, 
    cca3: string
}

export interface PosterType {
    country: Array<any>,
    status: string, //'failed' | 'loading' | 'success',
    error: string,
}

export type searchPropType = {
    searchTerm: string;
    region: string;
}