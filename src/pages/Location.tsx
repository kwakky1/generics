import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Map from "../components/Map";

const Location = () => {
  return (
    <Container maxWidth={"lg"}>
      <Box py={20}>
        <Grid
          container
          maxWidth={"lg"}
          direction="row-reverse"
          rowSpacing={10}
          columnSpacing={4}
        >
          <Grid item xs={12} sm={4}>
            <Box>
              <Box>
                <Typography
                  variant={"h3"}
                  color={"#1E1C6B"}
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  Contact Us
                </Typography>
              </Box>
              <Box mt={3} mb={6}>
                <Typography
                  variant={"subtitle1"}
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  회사 주소
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  인천광역시 계양구 서운산단로1길 19 <br />
                  5층 8호(서운동,DSE지식산업센터)
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant={"subtitle1"}
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  이메일 주소
                </Typography>
                <Typography
                  variant={"body1"}
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  파트너 문의 : kwakuy@naver.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Map
              latitude={37.53172880550523}
              longitude={126.75315960664159}
              code={"location"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Location;
