export class LocationData {
    status = "";
    data: LocationDetails = new LocationDetails();
  }
  
  export class LocationDetails {
    address: AddressDetails = new AddressDetails();
    position: PositionDetails = new PositionDetails();
  }
  
  export class AddressDetails {
    location: LocationInfo = new LocationInfo();
    addressLine1 = "";
    provider= "";
  }
  
  export class LocationInfo {
    id= "";
    fullAddress = "";
  }
  
  export class PositionDetails {
    lat = 0;
    lng = 0;
  }
  