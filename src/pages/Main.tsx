import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Map from "../components/Map";

const Main = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const doings = [
    {
      title: "생산관리",
      url: `${process.env.PUBLIC_URL}/img/produce.png`,
      contents: "생산관리 컨설팅 및 소프트웨어 시스템 구축",
    },
    {
      title: "품질관리",
      url: `${process.env.PUBLIC_URL}/img/quality.png`,
      contents: "품질관리 및 각종 인증절차 컨설팅",
    },
    {
      title: "스마트 팩토리",
      url: `${process.env.PUBLIC_URL}/img/factory.png`,
      contents: "스마트공장 구축 소프트웨어 서비스 제공",
    },
  ];

  const partners = [
    {
      url: `${process.env.PUBLIC_URL}/img/daedong.png`,
      grid: 6,
    },
    {
      url: `${process.env.PUBLIC_URL}/img/hipo.png`,
      grid: 3,
    },
    {
      url: `${process.env.PUBLIC_URL}/img/samyoung.png`,
      grid: 3,
    },
  ];

  return (
    <>
      <Box>
        <Container maxWidth={"lg"} sx={{ my: 20 }}>
          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            columns={5}
          >
            <Grid item sm={3} xs={5}>
              <img
                src={`${process.env.PUBLIC_URL}/img/main.png`}
                alt="main"
                style={matches ? { position: "relative", width: "100%" } : {}}
              />
            </Grid>
            <Grid
              item
              sm={2}
              xs={5}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              <Typography variant={"h1"} color={"#1E1C6B"}>
                Generics
              </Typography>
              <br />
              <Typography variant={"h6"}>
                품질, 생산관리의 전산화 <br /> 제네릭스가 함께 합니다.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#F6F6FB", py: { xs: 3, sm: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant={"h3"}
            color={"#1E1C6B"}
            textAlign={matches ? "center" : "left"}
            sx={{ py: { xs: 5, sm: 6 } }}
          >
            We Are Smart Factory <br /> Specialist
          </Typography>
          <Typography
            variant={"body1"}
            pb={2}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
            component={"pre"}
          >
            {matches
              ? `제네릭스는 생산 및 품질관리 최고전문가가
소규모기업을 강소기업으로
이끌어주기 위해 설립되었습니다.`
              : `제네릭스는 생산 및 품질관리 최고전문가가
소규모기업을 강소기업으로 이끌어주기 위해 설립되었습니다.`}
          </Typography>
        </Container>
        <Box sx={{ px: { xs: 2, sm: 0 }, py: { xs: 2, sm: 5 } }}>
          <img
            src={`${process.env.PUBLIC_URL}/img/main_2.png`}
            alt="main_2"
            style={
              matches
                ? { width: "100%" }
                : {
                    width: "100%",
                    height: "440px",
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                  }
            }
          />
        </Box>
        <Container maxWidth="lg">
          <Typography
            variant={"body1"}
            component={"pre"}
            textAlign={matches ? "center" : "right"}
            pt={2}
            pb={4}
          >
            {matches
              ? `제네릭스는 스마트팩토리 및 유통구조를 위한 
소프트웨어를 제공함으로써 파트너사의 전문성 및
업무효율을 높이기 위해 노력하고있습니다.`
              : `제네릭스는 스마트팩토리 및 유통구조를 위한 소프트웨어를 제공함으로써
파트너사의 전문성 및 업무효율을 높이기 위해 노력하고있습니다.`}
          </Typography>
        </Container>
      </Box>
      <Box sx={{ pb: { sm: 30 } }}>
        <Container maxWidth={"lg"}>
          <Box sx={{ py: { xs: 4, sm: 10 } }}>
            <Typography variant={"h3"} color={"#1E1C6B"} textAlign={"center"}>
              Partner
            </Typography>
          </Box>
          <Grid container rowSpacing={5} columnSpacing={2} py={6}>
            {partners.map((obj) => {
              const { url, grid } = obj;
              return (
                <Grid
                  item
                  xs={12}
                  // sm={grid}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={url} alt={url} style={{ objectFit: "cover" }} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#F6F6FB" }}>
        <Container maxWidth="lg" sx={{ pb: 10 }}>
          <Box py={10}>
            <Typography textAlign={"center"} variant={"h3"} color={"#1E1C6B"}>
              What We Do
            </Typography>
          </Box>
          <Grid container rowSpacing={10}>
            {doings.map((array) => {
              const { title, contents, url } = array;
              return (
                <Grid
                  key={title}
                  item
                  sm={4}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box sx={{ width: 170 }}>
                    <Box>
                      <Typography variant={"subtitle1"} textAlign={"center"}>
                        {title}
                      </Typography>
                    </Box>
                    <Box
                      my={4}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <img src={url} alt={title} />
                    </Box>
                    <Box>
                      <Typography
                        variant={"body1"}
                        sx={{ wordBreak: "keep-all" }}
                        textAlign={"center"}
                      >
                        {contents}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={"lg"}>
        <Box sx={{ py: { xs: 10, sm: 20 } }}>
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
                    파트너 문의 : generics200528@daum.net
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
    </>
  );
};

export default Main;
