import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Typography } from "@mui/material";
import { icon } from "leaflet";
import { useAppSelector } from "@/lib/hooks";
import AirportDetailModal from "../AirportDetailCard";
export default function DynamicMap() {
  const { allAirports } = useAppSelector((state) => state.airportSlice);
  const planeIcon = icon({
    iconUrl: "/plane-i.png",
    iconSize: [25, 25],
  });

  return (
    <>
      <MapContainer
        center={{ lat: 43.302059, lng: -8.37725 }}
        zoom={12}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allAirports.slice(0, 100)?.map((item, index) => (
          <>
            <Marker
              position={{ lat: item.lat, lng: item.lon }}
              icon={planeIcon}
              key={index}
              bubblingMouseEvents
            >
              <Popup>
                <AirportDetailModal {...item} />
              </Popup>
              <Tooltip>
                <Typography>{item.name}</Typography>
              </Tooltip>
            </Marker>
          </>
        ))}
      </MapContainer>
    </>
  );
}
