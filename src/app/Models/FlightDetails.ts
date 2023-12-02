export class AirProducts{
    originationAirportCode = '';
    destinationAirportCode = '';
    fastestDuration: number = 0;
    containsAvailability = true;
    containsNonstop = true;
    containsBeforeNoon = true;
    containsNoonToSix = true;
    containsAfterSix = true;
    containsTimeOfDay = true;
    containsStops = true;
    containsDirect = true;
    containsOnlyPlaneChange = true;
    currencyCode = true;
    details: FlightDetails[] = [];
}


export class FlightData{
    searchResults: SearchResults = new SearchResults
}

export class SearchResults{
    fareSummary: any[] | undefined;
    airProducts: AirProducts[] = [ ];
    promoToken: any | undefined;
}


export class AllFightsDetails{
    data: FlightData = new FlightData;
    success : boolean = false;
}

export class FlightDetails {
    originationAirportCode= '';
    destinationAirportCode= '';
    departureTime= '';
    arrivalTime= '';
    nextDay = true;
    totalDuration=1;
    flightNumbers: string[] = [];
    filterTags: string[] = [];
    departureDateTime: string = '';
    arrivalDateTime: string = '';
    segments: FlightSegment[] = [];
    fareProducts: FareProducts = new FareProducts;
}

export class FareProducts{
    ADULT : ADULT = new ADULT
}

export class ADULT{
    WGA: FareProductDetails = new FareProductDetails;
    BUS: FareProductDetails = new FareProductDetails;
    PLU: FareProductDetails = new FareProductDetails;
    ANY: FareProductDetails = new FareProductDetails;
}

export class FlightSegment {
    originationAirportCode: string | undefined;
    destinationAirportCode: string | undefined;
    flightNumber: string | undefined;
    duration: string | undefined;
    numberOfStops: number | undefined;
    departureTime: string| undefined;
    arrivalTime: string| undefined;
    departureDateTime: string| undefined;
    arrivalDateTime: string| undefined;
    operatingCarrierCode: string| undefined;
    marketingCarrierCode: string| undefined;
    aircraftEquipmentType: string| undefined;
    wifiOnBoard: boolean| undefined;
    stopsDetails: FlightStopDetails[]| undefined;
}

export class FlightStopDetails {
    originationAirportCode: string| undefined;
    destinationAirportCode: string| undefined;
    flightNumber: string| undefined;
    legDuration: number| undefined;
    stopDuration: number| undefined;
    departureTime: string| undefined;
    arrivalTime: string| undefined;
    departureDateTime: string| undefined;
    arrivalDateTime: string| undefined;
}

export class FareProductDetails {
    productId: string| undefined;
    pricingContext: {
        cff: string;
        paxType: string;
        prcPaxType: string;
        pricingFlow: string;
        flowType: string
    }| undefined;
    passengerType: string| undefined;
    availabilityStatus: string| undefined;
    originalFare: any; // Adjust the type based on actual structure
    fare: Fare = new Fare;
    waivedFare: any; // Adjust the type based on actual structure
}

export class Fare{
    baseFare: BaseFare = new BaseFare;
    totalTaxesAndFees: TotalTaxesAndFees = new TotalTaxesAndFees
    totalFare: TotalFare = new TotalFare;
    accrualPoints: string = "";
}

export class BaseFare{
    value = "";
    currencyCode = ""
}

export class TotalTaxesAndFees {
    value = "";
    currencyCode = "";
}
export class TotalFare {
    value = "";
    currencyCode = "";
}

// fare: {
//     baseFare: {
//         value: string;
//         currencyCode: string;
//     };
//     totalTaxesAndFees: {
//         value: string;
//         currencyCode: string;
//     };
//     totalFare: {
//         value: string;
//         currencyCode: string;
//     };
//     accrualPoints: string = "";
// } ;