import React, { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

declare global {
  interface Window {
    kakao: any;
  }
}

interface mapProps {
  latitude: number;
  longitude: number;
  code: string;
}

const Map = (props: mapProps) => {
  const { latitude, longitude, code } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      new window.kakao.maps.load(() => {
        let container = document.getElementById(code);
        let options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          draggable: false,
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        ); // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다
      });
    };
  });

  return (
    <Box id={code} style={{ width: "100%", height: matches ? 250 : 500 }} />
  );
};

export default Map;
