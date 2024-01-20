import { AirportData } from "@/baselib";
import {  CardContent, Typography } from "@mui/material";
export default function AirportDetailModal(props: AirportData) {
  return (
    <>
      <div>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
             {props.city}
            </Typography>
            <Typography variant="h5" component="div">
             {props.country}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             {props.name}
            </Typography>
            <Typography variant="body2">
              <p><b>Time Zone</b></p>
            {props.timezone.name}
            <br/>
            {props.timezone.abbrName}
            </Typography>
          </CardContent>
      </div>
    </>
  );
}
