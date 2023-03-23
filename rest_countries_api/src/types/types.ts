// types defitions
export interface countriesStateType {
    countries: Array<any>,
    status: 'idle' | 'failed' | 'loading' | 'success',
    error: string,
}
interface countryNameType {
    common: string
}

interface flagType {
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
    alt: string
}