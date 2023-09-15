export class Product {
    constructor(
      public badges: any[],
      public capacity: number,
      public cityID: string,
      public currencyCode: string,
      public description: string,
      public detailedDescription: string,
      public discountPrimary: string,
      public displayName: string,
      public estimatedTripTime: number,
      public etaStringShort: string,
      public fare: string,
      public hasPromo: boolean,
      public hasRidePass: boolean,
      public id: string,
      public is3p: boolean,
      public isAvailable: boolean,
      public legalConsent: any,
      public meta: string,
      public preAdjustmentValue: string,
      public productImageUrl: string,
      public productUuid: string,
      public reserveEnabled: boolean,
      public __typename: string
    ) {}
  }
  
 export class ProductTier {
    constructor(
      public products: Product[],
      public title: string,
      public __typename: string
    ) {}
  }
  
 export class ResponseFromUberFares {
    constructor(
      public data: {
        products: {
          classificationFilters: any,
          defaultVVID: string,
          productsUnavailableMessage: string,
          renderRankingInformation: boolean,
          tiers: ProductTier[],
          __typename: string
        }
      }
    ) {}
  }
  



// // export class ResponseFromUberFares{
// //     data: {
// //         "products": {
// //             "classificationFilters": null,
// //             "defaultVVID": "",
// //             "productsUnavailableMessage": "",
// //             "renderRankingInformation": boolean,
// //             "tiers": [
// //                 {
// //                     "products": product[],
// //                     "title": "",
// //                     "__typename": ""
// //                 }
// //             ],
// //             "__typename": ""
// //         }
// //     }
// // }

// export class ResponseFromUberFares {
//     data!: {
//           products: {
//               classificationFilters: any;
//               defaultVVID: string;
//               productsUnavailableMessage: string;
//               renderRankingInformation: boolean;
//               tiers: ProductTier[];
//               __typename: string;
//           };
//       };
//   }

// export class Product {
//     badges!: any[];
//     capacity!: number;
//     cityID!: string;
//     currencyCode!: string;
//     description!: string;
//     detailedDescription!: string;
//     discountPrimary!: string;
//     displayName: string;
//     estimatedTripTime: number;
//     etaStringShort: string;
//     fare: string;
//     hasPromo: boolean;
//     hasRidePass: boolean;
//     id: string;
//     is3p: boolean;
//     isAvailable: boolean;
//     legalConsent: any;
//     meta: string;
//     preAdjustmentValue: string;
//     productImageUrl: string;
//     productUuid: string;
//     reserveEnabled: boolean;
//     __typename: string;
//   }
  
//   class ProductTier {
//     products: Product[];
//     title: string;
//     __typename: string;
//   }
  
  

// export class product {
//     "badges": [];
//     "capacity": 4;
//     "cityID": "88";
//     "currencyCode": "USD";
//     "description": "UberX";
//     "detailedDescription": "Affordable, everyday rides";
//     "discountPrimary": "";
//     "displayName": "UberX";
//     "estimatedTripTime": 1031;
//     "etaStringShort": "9 mins";
//     "fare": "$5.85";
//     "hasPromo": false;
//     "hasRidePass": false;
//     "id": "865";
//     "is3p": false;
//     "isAvailable": true;
//     "legalConsent": null;
//     "meta": "{\"cityID\":\"88\",\"etd\":{\"meta\":{\"lighthouseRequestUuid\":\"808597cc-f5d4-4b94-a7a0-4f8588b5b051\"},\"estimatedTripTime\":1031,\"legalDisclaimer\":\"Your \\\"latest arrival time\\\" factors in traffic and any additional pickups and drop-offs along your route. It is not a guarantee.\",\"estimateRequestTime\":0,\"etdDisplayString\":\"\",\"estimatedSoloOnTripTime\":404},\"fareEstimateInfo\":{},\"fareFlowUUID\":\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\",\"fareRequestUUID\":\"af5f5b13-9e74-4a89-b623-64ce895396c2\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"fareUUID\":\"\",\"pricingParams\":{\"packageVariantUUID\":\"af5f5b13-9e74-4a89-b623-64ce895396c2\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"requestLocation\":{\"latitude\":38.873754,\"longitude\":-94.664654}},\"productUuid\":\"21f33585-b70b-5556-829d-05b2431a5826\",\"upfrontFare\":{\"capacity\":1,\"currencyCode\":\"USD\",\"destinationLat\":38.8871021,\"destinationLng\":-94.6849515,\"fare\":\"5.85\",\"originLat\":38.873754,\"originLng\":-94.664654,\"signature\":{\"expiresAt\":1694716992,\"issuedAt\":1694716752,\"signature\":\"{\\\"packageVariantUUID\\\":\\\"af5f5b13-9e74-4a89-b623-64ce895396c2\\\",\\\"fareSessionUUID\\\":\\\"6564bed5-7aef-40ee-b794-b015df93b0ff\\\",\\\"fareFlowUUID\\\":\\\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\\\"}\",\"version\":\"pricing_params_v1\"},\"vehicleViewId\":865,\"uuid\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"dynamicFareInfo\":{\"isSobriety\":false,\"multiplier\":1,\"uuid\":\"5cfff791-3b0b-4f2f-acda-ee7437fe4295\",\"surgeSuppressionThreshold\":0},\"surgeMultiplier\":1,\"viaLocations\":[],\"unmodifiedDistance\":3676},\"vehicleViewID\":865,\"originalArgs\":{\"destinations\":[{\"latitude\":38.8871021,\"longitude\":-94.6849515}],\"includeClassificationFilters\":false,\"includeRecommended\":false,\"pickup\":{\"latitude\":38.873754,\"longitude\":-94.664654},\"targetProductType\":null}}";
//     "preAdjustmentValue": "";
//     "productImageUrl": "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png";
//     "productUuid": "21f33585-b70b-5556-829d-05b2431a5826";
//     "reserveEnabled": false;
//     "__typename": "RVWebCommonProduct"
// }

// // {
// //     "badges": [],
// //     "capacity": 4,
// //     "cityID": "88",
// //     "currencyCode": "USD",
// //     "description": "UberX",
// //     "detailedDescription": "Affordable, everyday rides",
// //     "discountPrimary": "",
// //     "displayName": "UberX",
// //     "estimatedTripTime": 1031,
// //     "etaStringShort": "9 mins",
// //     "fare": "$5.85",
// //     "hasPromo": false,
// //     "hasRidePass": false,
// //     "id": "865",
// //     "is3p": false,
// //     "isAvailable": true,
// //     "legalConsent": null,
// //     "meta": "{\"cityID\":\"88\",\"etd\":{\"meta\":{\"lighthouseRequestUuid\":\"808597cc-f5d4-4b94-a7a0-4f8588b5b051\"},\"estimatedTripTime\":1031,\"legalDisclaimer\":\"Your \\\"latest arrival time\\\" factors in traffic and any additional pickups and drop-offs along your route. It is not a guarantee.\",\"estimateRequestTime\":0,\"etdDisplayString\":\"\",\"estimatedSoloOnTripTime\":404},\"fareEstimateInfo\":{},\"fareFlowUUID\":\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\",\"fareRequestUUID\":\"af5f5b13-9e74-4a89-b623-64ce895396c2\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"fareUUID\":\"\",\"pricingParams\":{\"packageVariantUUID\":\"af5f5b13-9e74-4a89-b623-64ce895396c2\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"requestLocation\":{\"latitude\":38.873754,\"longitude\":-94.664654}},\"productUuid\":\"21f33585-b70b-5556-829d-05b2431a5826\",\"upfrontFare\":{\"capacity\":1,\"currencyCode\":\"USD\",\"destinationLat\":38.8871021,\"destinationLng\":-94.6849515,\"fare\":\"5.85\",\"originLat\":38.873754,\"originLng\":-94.664654,\"signature\":{\"expiresAt\":1694716992,\"issuedAt\":1694716752,\"signature\":\"{\\\"packageVariantUUID\\\":\\\"af5f5b13-9e74-4a89-b623-64ce895396c2\\\",\\\"fareSessionUUID\\\":\\\"6564bed5-7aef-40ee-b794-b015df93b0ff\\\",\\\"fareFlowUUID\\\":\\\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\\\"}\",\"version\":\"pricing_params_v1\"},\"vehicleViewId\":865,\"uuid\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"dynamicFareInfo\":{\"isSobriety\":false,\"multiplier\":1,\"uuid\":\"5cfff791-3b0b-4f2f-acda-ee7437fe4295\",\"surgeSuppressionThreshold\":0},\"surgeMultiplier\":1,\"viaLocations\":[],\"unmodifiedDistance\":3676},\"vehicleViewID\":865,\"originalArgs\":{\"destinations\":[{\"latitude\":38.8871021,\"longitude\":-94.6849515}],\"includeClassificationFilters\":false,\"includeRecommended\":false,\"pickup\":{\"latitude\":38.873754,\"longitude\":-94.664654},\"targetProductType\":null}}",
// //     "preAdjustmentValue": "",
// //     "productImageUrl": "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png",
// //     "productUuid": "21f33585-b70b-5556-829d-05b2431a5826",
// //     "reserveEnabled": false,
// //     "__typename": "RVWebCommonProduct"
// // },
// // {
// //     "badges": [],
// //     "capacity": 4,
// //     "cityID": "88",
// //     "currencyCode": "USD",
// //     "description": "Comfort",
// //     "detailedDescription": "Newer cars with extra legroom",
// //     "discountPrimary": "",
// //     "displayName": "Comfort",
// //     "estimatedTripTime": 887,
// //     "etaStringShort": "7 mins",
// //     "fare": "$9.18",
// //     "hasPromo": false,
// //     "hasRidePass": false,
// //     "id": "20019541",
// //     "is3p": false,
// //     "isAvailable": true,
// //     "legalConsent": null,
// //     "meta": "{\"cityID\":\"88\",\"etd\":{\"meta\":{\"lighthouseRequestUuid\":\"808597cc-f5d4-4b94-a7a0-4f8588b5b051\"},\"estimatedTripTime\":887,\"legalDisclaimer\":\"Your \\\"latest arrival time\\\" factors in traffic and any additional pickups and drop-offs along your route. It is not a guarantee.\",\"estimateRequestTime\":0,\"etdDisplayString\":\"\",\"estimatedSoloOnTripTime\":404},\"fareEstimateInfo\":{},\"fareFlowUUID\":\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\",\"fareRequestUUID\":\"c809b8b5-c665-4b95-a68c-07ebe0e89058\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"fareUUID\":\"\",\"pricingParams\":{\"packageVariantUUID\":\"c809b8b5-c665-4b95-a68c-07ebe0e89058\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"requestLocation\":{\"latitude\":38.873754,\"longitude\":-94.664654}},\"productUuid\":\"46355a16-d48a-514f-813b-24ac098923d5\",\"upfrontFare\":{\"capacity\":1,\"currencyCode\":\"USD\",\"destinationLat\":38.8871021,\"destinationLng\":-94.6849515,\"fare\":\"9.18\",\"originLat\":38.873754,\"originLng\":-94.664654,\"signature\":{\"expiresAt\":1694716992,\"issuedAt\":1694716752,\"signature\":\"{\\\"packageVariantUUID\\\":\\\"c809b8b5-c665-4b95-a68c-07ebe0e89058\\\",\\\"fareSessionUUID\\\":\\\"6564bed5-7aef-40ee-b794-b015df93b0ff\\\",\\\"fareFlowUUID\\\":\\\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\\\"}\",\"version\":\"pricing_params_v1\"},\"vehicleViewId\":20019541,\"uuid\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"dynamicFareInfo\":{\"isSobriety\":false,\"multiplier\":1,\"uuid\":\"5cfff791-3b0b-4f2f-acda-ee7437fe4295\",\"surgeSuppressionThreshold\":0},\"surgeMultiplier\":1,\"viaLocations\":[],\"unmodifiedDistance\":3676},\"vehicleViewID\":20019541,\"originalArgs\":{\"destinations\":[{\"latitude\":38.8871021,\"longitude\":-94.6849515}],\"includeClassificationFilters\":false,\"includeRecommended\":false,\"pickup\":{\"latitude\":38.873754,\"longitude\":-94.664654},\"targetProductType\":null}}",
// //     "preAdjustmentValue": "",
// //     "productImageUrl": "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/package_UberComfort_new_2022.png",
// //     "productUuid": "46355a16-d48a-514f-813b-24ac098923d5",
// //     "reserveEnabled": false,
// //     "__typename": "RVWebCommonProduct"
// // },
// // {
// //     "badges": [],
// //     "capacity": 6,
// //     "cityID": "88",
// //     "currencyCode": "USD",
// //     "description": "UberXL",
// //     "detailedDescription": "Affordable rides for groups up to 6",
// //     "discountPrimary": "",
// //     "displayName": "UberXL",
// //     "estimatedTripTime": 840,
// //     "etaStringShort": "6 mins",
// //     "fare": "$9.40",
// //     "hasPromo": false,
// //     "hasRidePass": false,
// //     "id": "2295",
// //     "is3p": false,
// //     "isAvailable": true,
// //     "legalConsent": null,
// //     "meta": "{\"cityID\":\"88\",\"etd\":{\"meta\":{\"lighthouseRequestUuid\":\"808597cc-f5d4-4b94-a7a0-4f8588b5b051\"},\"estimatedTripTime\":840,\"legalDisclaimer\":\"Your \\\"latest arrival time\\\" factors in traffic and any additional pickups and drop-offs along your route. It is not a guarantee.\",\"estimateRequestTime\":0,\"etdDisplayString\":\"\",\"estimatedSoloOnTripTime\":404},\"fareEstimateInfo\":{},\"fareFlowUUID\":\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\",\"fareRequestUUID\":\"f7b8486f-a577-4e0f-ab66-3cf493912d8c\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"fareUUID\":\"\",\"pricingParams\":{\"packageVariantUUID\":\"f7b8486f-a577-4e0f-ab66-3cf493912d8c\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"requestLocation\":{\"latitude\":38.873754,\"longitude\":-94.664654}},\"productUuid\":\"f79f6ab9-4b1a-581a-b8ea-69b64c199128\",\"upfrontFare\":{\"capacity\":1,\"currencyCode\":\"USD\",\"destinationLat\":38.8871021,\"destinationLng\":-94.6849515,\"fare\":\"9.4\",\"originLat\":38.873754,\"originLng\":-94.664654,\"signature\":{\"expiresAt\":1694716992,\"issuedAt\":1694716752,\"signature\":\"{\\\"packageVariantUUID\\\":\\\"f7b8486f-a577-4e0f-ab66-3cf493912d8c\\\",\\\"fareSessionUUID\\\":\\\"6564bed5-7aef-40ee-b794-b015df93b0ff\\\",\\\"fareFlowUUID\\\":\\\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\\\"}\",\"version\":\"pricing_params_v1\"},\"vehicleViewId\":2295,\"uuid\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"dynamicFareInfo\":{\"isSobriety\":false,\"multiplier\":1,\"uuid\":\"5cfff791-3b0b-4f2f-acda-ee7437fe4295\",\"surgeSuppressionThreshold\":0},\"surgeMultiplier\":1,\"viaLocations\":[],\"unmodifiedDistance\":3676},\"vehicleViewID\":2295,\"originalArgs\":{\"destinations\":[{\"latitude\":38.8871021,\"longitude\":-94.6849515}],\"includeClassificationFilters\":false,\"includeRecommended\":false,\"pickup\":{\"latitude\":38.873754,\"longitude\":-94.664654},\"targetProductType\":null}}",
// //     "preAdjustmentValue": "",
// //     "productImageUrl": "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/package_UberXL_new_2022.png",
// //     "productUuid": "f79f6ab9-4b1a-581a-b8ea-69b64c199128",
// //     "reserveEnabled": false,
// //     "__typename": "RVWebCommonProduct"
// // },
// // {
// //     "badges": [],
// //     "capacity": 4,
// //     "cityID": "88",
// //     "currencyCode": "USD",
// //     "description": "Uber Pet",
// //     "detailedDescription": "Affordable rides for you and your pet",
// //     "discountPrimary": "",
// //     "displayName": "Uber Pet",
// //     "estimatedTripTime": 1076,
// //     "etaStringShort": "10 mins",
// //     "fare": "$10.85",
// //     "hasPromo": false,
// //     "hasRidePass": false,
// //     "id": "20036211",
// //     "is3p": false,
// //     "isAvailable": true,
// //     "legalConsent": null,
// //     "meta": "{\"cityID\":\"88\",\"etd\":{\"meta\":{\"lighthouseRequestUuid\":\"808597cc-f5d4-4b94-a7a0-4f8588b5b051\"},\"estimatedTripTime\":1076,\"legalDisclaimer\":\"Your \\\"latest arrival time\\\" factors in traffic and any additional pickups and drop-offs along your route. It is not a guarantee.\",\"estimateRequestTime\":0,\"etdDisplayString\":\"\",\"estimatedSoloOnTripTime\":404},\"fareEstimateInfo\":{},\"fareFlowUUID\":\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\",\"fareRequestUUID\":\"bdbdfca3-c29f-4390-821e-6e9724a767c1\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"fareUUID\":\"\",\"pricingParams\":{\"packageVariantUUID\":\"bdbdfca3-c29f-4390-821e-6e9724a767c1\",\"fareSessionUUID\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"requestLocation\":{\"latitude\":38.873754,\"longitude\":-94.664654}},\"productUuid\":\"3f1fa631-8a2f-587a-9d14-b819373af4cf\",\"upfrontFare\":{\"capacity\":1,\"currencyCode\":\"USD\",\"destinationLat\":38.8871021,\"destinationLng\":-94.6849515,\"fare\":\"10.85\",\"originLat\":38.873754,\"originLng\":-94.664654,\"signature\":{\"expiresAt\":1694716992,\"issuedAt\":1694716752,\"signature\":\"{\\\"packageVariantUUID\\\":\\\"bdbdfca3-c29f-4390-821e-6e9724a767c1\\\",\\\"fareSessionUUID\\\":\\\"6564bed5-7aef-40ee-b794-b015df93b0ff\\\",\\\"fareFlowUUID\\\":\\\"7fb931fc-8b7b-4a40-a037-8cc095e9862e\\\"}\",\"version\":\"pricing_params_v1\"},\"vehicleViewId\":20036211,\"uuid\":\"6564bed5-7aef-40ee-b794-b015df93b0ff\",\"dynamicFareInfo\":{\"isSobriety\":false,\"multiplier\":1,\"uuid\":\"5cfff791-3b0b-4f2f-acda-ee7437fe4295\",\"surgeSuppressionThreshold\":0},\"surgeMultiplier\":1,\"viaLocations\":[],\"unmodifiedDistance\":3676},\"vehicleViewID\":20036211,\"originalArgs\":{\"destinations\":[{\"latitude\":38.8871021,\"longitude\":-94.6849515}],\"includeClassificationFilters\":false,\"includeRecommended\":false,\"pickup\":{\"latitude\":38.873754,\"longitude\":-94.664654},\"targetProductType\":null}}",
// //     "preAdjustmentValue": "",
// //     "productImageUrl": "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_Pet.png",
// //     "productUuid": "3f1fa631-8a2f-587a-9d14-b819373af4cf",
// //     "reserveEnabled": false,
// //     "__typename": "RVWebCommonProduct"
// // }
