"use client";
import React, { useEffect, useState } from "react";
import { ChargingStation, GetChargingStationResponse } from "../types/api.type";
import { getChargingStation } from "../services/Charging.service";
import { getProvinces } from "../utils/utils";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type ChargingStationTable = {
  stationName: string;
  status: "On charging" | "Offline" | "Online";
  province: string;
};

const columnsHelper = createColumnHelper<ChargingStationTable>();
const columns = [
  columnsHelper.accessor("stationName", {
    header: "Station Name",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnsHelper.accessor("province", {
    header: "Province",
    cell: (info) => info.getValue(),
  }),
];

const Table = ({ data }: { data: GetChargingStationResponse }) => {
  const [allChargingStations, setAllChargingStations] = useState<
    ChargingStation[]
  >([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    const getChargingStationsData = async () => {
      try {
        const res = await fetch(
          "https://vinfastauto.id/api/vinfast/get-charging-stations",
        );
        const data: GetChargingStationResponse = await res.json();
        setAllChargingStations(data.data);
      } catch (error) {
        console.error("Failed to fetch charging stations:", error);
      }
    };
    getChargingStationsData();
  }, []);

  useEffect(() => {
    setAllChargingStations(data.data);
  }, []);

  const reqData: ChargingStationTable[] = allChargingStations.map((station) => {
    let status: string;

    if (station.field_status.value === "Available") {
      status = "Online";
    } else if (station.field_status.value === "Maintaining") {
      status = "On charging";
    } else {
      status = "Offline";
    }
    return {
      stationName: station.name,
      status: status as ChargingStationTable["status"],
      province: getProvinces(station.field_address),
    };
  });

  const table = useReactTable({
    data: reqData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table border={1} className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className="cursor-pointer"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {{
                  asc: " 🔼",
                  desc: " 🔽",
                }[header.column.getIsSorted() as string] ?? null}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
