"use client";
import React, { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getAirports } from "@/service";

export default function HomePage() {
  const { allAirports } = useAppSelector((state) => state.airportSlice);
  const dispatch = useAppDispatch();
  const Map = useMemo(
    () =>
      dynamic(() => import("./components/MyMap/DynamicMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  useEffect(() => {
  dispatch(getAirports())
  }, []);
  return (
    <div>
      <Map />
    </div>
  );
}
