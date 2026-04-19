"use client";
import React, { useEffect, useState } from "react";
import { ChargingStation } from "../types/api.type";
import { getChargingStation } from "../services/Charging.service";

const Table = () => {
  const [allChargingStations, setAllChargingStations] = useState<
    ChargingStation[]
  >([]);

  useEffect(() => {
    const getChargingStationsData = async () => {
      try {
        const data = await getChargingStation();
        setAllChargingStations(data);
      } catch (error) {
        console.error("Failed to fetch charging stations:", error);
      }
    };
    getChargingStationsData();
  }, []);
  return <div></div>;
};

export default Table;
