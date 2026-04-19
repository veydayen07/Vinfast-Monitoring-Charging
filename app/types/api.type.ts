export interface ChargingStation {
  id: number;
  name: string;
  field_address: string;
  field_latitude: number;
  field_longitude: number;
  field_status: {
    value: "Maintaining" | "Available" | "AllBusy";
    label: "All Busy" | "Maitenance" | "Available";
  };
  field_access_type: string;
  field_parking_fee: boolean;
  opening_hours: {
    twentyfourseven: boolean;
  };
  evses: {
    power: string;
    quantity: number;
  }[];
}

export interface GetChargingStationResponse {
  status: string;
  message: string;
  data: ChargingStation[];
}
