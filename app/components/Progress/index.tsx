import { Box, CircularProgress, Typography } from "@mui/material";

export default function ProgressArea() {
  return (
    <>
      <Box sx={{ display: "flex" , alignItems:"center",justifyContent:"center"}}>
        <CircularProgress />
        <Typography>Harita Yükleniyor Lütfen Bekleyiniz...</Typography>
      </Box>
    </>
  );
}
