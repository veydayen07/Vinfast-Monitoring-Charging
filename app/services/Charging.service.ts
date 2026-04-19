import { fetchAPI } from "../api";
import { ChargingStation, GetChargingStationResponse } from "../types/api.type";

export const getChargingStation = async (): Promise<ChargingStation[]> => {
  const res = await fetchAPI<GetChargingStationResponse>(
    "get-charging-stations",
  );
  return res.data;
};
