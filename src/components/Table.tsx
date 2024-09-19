"use client"

import React, { useMemo } from "react";
import type { TeamsData, TouristsData, TripsData } from "@/app/Dashboard/action";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import { useRouter } from "next/navigation";

type CellsTable = {
  accessorKey: string
  header: string
}[]


export default function App({data, type}: {data: TripsData | TeamsData | TouristsData, type: string}) {
  const router = useRouter();

  console.log(data);
  const columns = useMemo(
    () => {
      let array : CellsTable = [];
      Object.keys(data[0]).map(ele => array.push({
        accessorKey: ele,
        header: ele.toUpperCase()
      }))
      return array
    }, 
    []
  );


  const table = useMaterialReactTable({
    // @ts-ignore
    data,
    columns,
    initialState: { 
      columnVisibility: type === "trips" ? {
        id: false,
        team_id: false,
        StartDate: false,
        EndDate: false,
        StartBooking: false,
        EndBooking: false,
        Location: false,
        SubLimit: false,
        Cost: false,
        Description: false,
        Retrieve: false,
        Requirements: false,
        TripPhoto: false,   
        RetrieveEndDate: false,
        Percent: false,

      } :
      { 
        team_id: false,
        Description: false,
        ContactInfo: false,
        ProfilePhoto: false,
        Followers: false,
      }  
    },
    muiTableBodyCellProps: ({row}: {row:any}) => ({
      onClick: () => {
        if(type != "tourists") {
          router.push(`/Dashboard/${type === "trips" ? "trips" : "teams"}/${type === "trips" ? row.original.id : row.original.team_id}`);
        }
      }
    })
    })

  return <MaterialReactTable table={table} />;
}

// muiTableBodyRowProps: ({ row }: { row: any}) => ({
//   onClick: (event: any) => {
//     console.info(event, row.id);
//   },