export class ResponseFromLyftFares {
    constructor(
        public offer_id: string,
        public offers: Offer[],
        public categories: any[],
        public preselected_offer_product_id: string,
        public offer_selector_session_id: string,
        public offer_selector_decision_tree: any,
        public desired_client_polling_rate_sec: string,
        public panel_constraint: any
    ){}
}

export class Offer {
    id: string;
    offer_product_id: string;
    offer_token: string;
    cost_estimate: CostEstimate;
    ride_type_details: RideTypeDetails;
    ride_pickup_details: any; // You can define a proper type for this if needed
    ride_travel_details: RideTravelDetails;
    availability_details: AvailabilityDetails;
  
    constructor(data: any) {
      this.id = data.id;
      this.offer_product_id = data.offer_product_id;
      this.offer_token = data.offer_token;
      this.cost_estimate = new CostEstimate(data.cost_estimate);
      this.ride_type_details = new RideTypeDetails(data.ride_type_details);
      this.ride_pickup_details = data.ride_pickup_details;
      this.ride_travel_details = new RideTravelDetails(data.ride_travel_details);
      this.availability_details = new AvailabilityDetails(data.availability_details);
    }
  }
  
  class CostEstimate {
    constructor(
      public price_quote_id: string = "",
      public cost_token: string = "",
      public ride_type: string = "lyft",
      public estimated_cost_cents_max: string = "0",
      public estimated_cost_cents_min: string = "0",
      public upfront_cost_cents: string = "0",
      public currency: string = "USD",
      public apple_pay_pre_auth_cents: string = "0",
      public primetime_percentage: string = "0%",
      public primetime_multiplier: number = 1.0,
      public is_scheduled_ride: boolean = false,
      public cost_token_expiry_time: string = "",
      public price_changed: boolean = false,
      public estimated_duration_seconds: string = "0",
      public line_items: LineItem[] = [],
      public stops_adjustment_threshold: StopsAdjustmentThreshold = new StopsAdjustmentThreshold(),
      public estimated_distance_in_miles: number = 0
    ) {}
  }
  
  class LineItem {
    constructor(
      public description: string = "",
      public amount: string = "0",
      public currency: string = "USD"
    ) {}
  }
  
  class StopsAdjustmentThreshold {
    constructor(
      public origin: Origin = new Origin()
    ) {}
  }
  
  class Origin {
    constructor(
      public lat: number = 0,
      public lng: number = 0,
      public range_in_meters: number = 0
    ) {}
  }
  
  
  export class RideTypeDetails {
    ride_type: string;
    seats: number;
    // Add other properties here...
  
    constructor(data: any) {
      this.ride_type = data.ride_type;
      this.seats = data.seats;
      // Initialize other properties as needed...
    }
  }
  
  export class RideTravelDetails {
    pickup_estimate: PickupEstimate;
    dropoff_estimate: DropoffEstimate;
    // Add other properties here...
  
    constructor(data: any) {
      this.pickup_estimate = new PickupEstimate(data.pickup_estimate);
      this.dropoff_estimate = new DropoffEstimate(data.dropoff_estimate);
      // Initialize other properties as needed...
    }
  }
  
  export class PickupEstimate {
    time_range: TimeRange;
    duration_range: DurationRange;
    timezone: string;
    // Add other properties here...
  
    constructor(data: any) {
      this.time_range = new TimeRange(data.time_range);
      this.duration_range = new DurationRange(data.duration_range);
      this.timezone = data.timezone;
      // Initialize other properties as needed...
    }
  }
  
  export class DropoffEstimate {
    time_range: TimeRange;
    duration_range: DurationRange;
    timezone: string;
    // Add other properties here...
  
    constructor(data: any) {
      this.time_range = new TimeRange(data.time_range);
      this.duration_range = new DurationRange(data.duration_range);
      this.timezone = data.timezone;
      // Initialize other properties as needed...
    }
  }
  
  export class TimeRange {
    timestamp_ms: string;
    // Add other properties here...
  
    constructor(data: any) {
      this.timestamp_ms = data.timestamp_ms;
      // Initialize other properties as needed...
    }
  }
  
  export class DurationRange {
    duration_ms: string;
    // Add other properties here...
  
    constructor(data: any) {
      this.duration_ms = data.duration_ms;
      // Initialize other properties as needed...
    }
  }
  
  export class AvailabilityDetails {
    display: number;
    latest: number;
    // Add other properties here...
  
    constructor(data: any) {
      this.display = data.display;
      this.latest = data.latest;
      // Initialize other properties as needed...
    }
  }
  