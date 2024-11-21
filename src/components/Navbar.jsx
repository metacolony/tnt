import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="static"
      className="!backdrop-blur !bg-white/80 !shadow-xl px-5"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="!flex !flex-row !justify-start !items-center !gap-20"
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            className="!font-Gandom !text-3xl text-Charcol cursor-default"
          >
            نخ تاپ
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="flex flex-row justify-start items-center gap-14 font-Gandom text-xl text-Charcol max-2xl:gap-11"
          >
            <Link to={"https://survey.porsline.ir/s/24bbwg2W"}>
              فرم ثبت نام
            </Link>
            <Link to={"/rules"}>قوانین و مقررات</Link>
            <Link to={"/helpfile"}>فایل راهنما</Link>
            <Link to={"/aboutus"}>درباره ما</Link>
            <Link to={"****"}>ورود به مرکز تولیدکنندگان</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
