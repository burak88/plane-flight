"use client";
import React, { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {  getAirportRes } from "@/service";
import ProgressArea from "./components/Progress";
export default function HomePage() {
  const { allAirports } = useAppSelector((state) => state.airportSlice);
  const dispatch = useAppDispatch();
  const Map = useMemo(
    () =>
      dynamic(() => import("./components/MyMap/DynamicMap"), {
        loading: () => <ProgressArea/>,
        ssr: false,
      }),
    []
  );
  useEffect(() => {
   dispatch(getAirportRes());
  }, []);
  return (
    <div>
      <Map />
    </div>
  );
}
