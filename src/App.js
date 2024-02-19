import "./App.css";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Data from "./booksData";
import Books from "./Books";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";

export default function App() {
  return (
    <div>
      <Search />
      <Message />
      <Breadcrumb />
      <Div1 />
      <Items />
      <SemiFooter />
      <Links />
      <Brands />
      <Footer />
    </div>
  );
}

function valuetext(value) {
  return `${value}pesos`;
}

function Search() {
  return (
    <div className="header2 z-3 sticky-top">
      <nav class="navbar z-3 " style={{ backgroundColor: "#FFFFFF" }}>
        <div className="header">
          <div className="design1">
            <span>
              <a href="">
                <img src="./store-finder.png" /> Store Finder
              </a>
            </span>
            <span>
              <a href="">
                <img src="./blog.png" /> Blog
              </a>
            </span>
            <span>
              <a href="">
                <img src="./bulk-orders.png" /> Bulk Orders
              </a>
            </span>
            <span>
              <a href="">
                <img src="./laking-national.png" /> Laking National
              </a>
            </span>
            <span>
              <a href="">
                <img src="./help.png" /> Help
              </a>
            </span>
            <span>
              <a href="">
                <img src="./contact-us.png" /> Contact Us
              </a>
            </span>
            <span>
              <img src="./delivery-hotline.png" /> Delivery Hotline 8-8888-627
            </span>
          </div>
          <div className="design2">
            <span>
              <a href=""> Hi Guest </a>
            </span>
            <span>
              <a href=""> Sign in </a>
            </span>
          </div>
        </div>
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="./logo1.jpg" style={{ marginLeft: "200px" }} />
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              style={{ width: "1000px" }}
              type="search"
              placeholder="Search our catalogue"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              <img className="imgg" src="./search.png" />
            </button>
          </form>
          <div className="design2">
            <a href="">
              <img className="imgg" src="./user.png" />
            </a>
            <a href="">
              <img className="imgg" src="./heart.png" />
            </a>
            <a href="">
              <Badge badgeContent={1} color="error">
                <a href="">
                  <img className="imgg" src="./shopping-cart.png" />
                </a>
              </Badge>
            </a>
          </div>
        </div>
        <div className="designnavbar">
          <span>
            <a href="">Sale Items</a>
          </span>
          <span>
            <a href="">Shop by Category </a>
          </span>
          <span>
            <a href=""> eBooks</a>
          </span>
          <span>
            <a href="">New Arrivals</a>
          </span>
          <span>
            <a href="">Wattpad</a>
          </span>
          <span>
            <a href="">Manga</a>
          </span>
          <span>
            <a href="">KPOP</a>
          </span>
          <span>
            <a href="">Gift Cards</a>
          </span>
          <span>
            <a href="">eVouchers</a>
          </span>
          <span>
            <a href="">P99 Books</a>
          </span>
          <span>
            <a href="">Pre-order</a>
          </span>
        </div>
      </nav>
    </div>
  );
}
function handleClick(event) {
  event.preventDefault();
}
function Breadcrumb() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#bababa"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link underline="hover" key="2" color="#bababa" onClick={handleClick}>
      All Departments
    </Link>,
    <Typography key="3" color="#bababa">
      KPOP
    </Typography>,
  ];

  return (
    <div
      style={{ marginLeft: "200px", marginBottom: "20px", marginTop: "20px" }}
    >
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </div>
  );
}

function Div1() {
  const [value, setValue] = React.useState([150, 1200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="div1">
      <div
        style={{ borderBottom: "solid", marginTop: "10px", borderWidth: "1px" }}
      >
        <h6>Price</h6>
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ color: "#88827c" }}
            min={150}
            max={1200}
          />
          <span>
            <TextField
              style={{
                display: "inline-block",
                width: "100px",
                fontSize: "12px",
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Php</InputAdornment>
                ),
              }}
            />
            <TextField
              style={{
                display: "inline-block",
                width: "100px",
                marginBottom: "10px",
              }}
              id="outlined-basic"
              label=""
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Php</InputAdornment>
                ),
              }}
            />
          </span>
        </Box>
      </div>
      <div
        style={{ borderBottom: "solid", marginTop: "10px", borderWidth: "1px" }}
      >
        <h6> Author Name </h6>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Jamie Heal (1)" />
          <FormControlLabel
            control={<Checkbox />}
            label="Villa-Real, Aya (1)"
          />
        </FormGroup>
      </div>
      <div
        style={{ borderBottom: "solid", marginTop: "10px", borderWidth: "1px" }}
      >
        <h6> Book Format </h6>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Hardcover (1)" />
          <FormControlLabel control={<Checkbox />} label="Magazine (2)" />
          <FormControlLabel control={<Checkbox />} label="PAPERBACK (2)" />
          <FormControlLabel
            control={<Checkbox />}
            label="Trade Paperback (10)"
          />
          <FormControlLabel control={<Checkbox />} label="TRADEPAPER (1)" />
        </FormGroup>
      </div>
    </div>
  );
}

function Items() {
  const [sort, sortBy] = React.useState("");
  const bookData = Data();
  const handleChange = (event) => {
    sortBy(event.target.value);
  };
  return (
    <div className="div2">
      <span>
        <h6>Showing 16 items.</h6>{" "}
      </span>
      <FormControl sx={{ m: 1, minWidth: 120 }} style={{ float: "right" }}>
        <span> Sort By:</span>
        <Select
          value={sort}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={10}>Relevance</MenuItem>
          <MenuItem value="">New products first</MenuItem>
          <MenuItem value={20}>Name, A to Z</MenuItem>
          <MenuItem value={30}>Name, Z to A</MenuItem>
          <MenuItem value={40}>Cheapest first</MenuItem>
          <MenuItem value={50}>Most expensive first</MenuItem>
          <MenuItem value={60}>In stock first</MenuItem>
        </Select>
      </FormControl>
      <div className="center">
        <ul className="items">
          {bookData.map((books) => (
            <Books booksObj={books} key={books.name} />
          ))}
        </ul>
      </div>
      <span>
        <h6> Showing 1 - 16 of 16 items. </h6>
      </span>
    </div>
  );
}

function SemiFooter() {
  return (
    <div className="widths">
      <div className="semifooter">
        <div className="semifooter">
          <h5>Get our latest news and special sales</h5>
          <div class="input-group mb-3" style={{ width: "300px" }}>
            <input
              type="text"
              class="form-control"
              placeholder="Your email address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="butn" type="button" id="button-addon2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="semifooter">
          <h5> Visit Your Local Store </h5>
          200++ Branches Nationwide
          <br></br>
          <div className="butncntr">
            <button className="butn"> Find a store </button>
          </div>
        </div>
        <div className="semifooter">
          <h5>Follow our social media accounts for news and updates</h5>
          <div className="inline center">
            <a href="">
              {" "}
              <img className="logo" src="./igicon.png" />{" "}
            </a>
            <a href="">
              {" "}
              <img className="logo" src="./fblogo.png" />{" "}
            </a>
            <a href="">
              {" "}
              <img className="logo" src="./t.png" />{" "}
            </a>
            <a href="">
              {" "}
              <img className="logo" src="./yt.png" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="sticky-top">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="secondary" aria-label="message" className="float">
          <img className="message" src="messenger.png" />
        </Fab>
      </Box>
    </div>
  );
}

function Links() {
  return (
    <div className="width">
      <div className="links1">
        <h4> About NBS </h4>
        <br></br>
        <a href=""> About Us </a> <br />
        <a href=""> Mission and Vision </a> <br />
        <a href=""> NBS Foundation </a> <br />
        <a href=""> Laking National </a> <br />
        <a href=""> Careers </a> <br />
      </div>
      <div className="links1">
        <a href=""> Blog</a> <br />
        <a href=""> Branch Directory</a> <br />
        <a href=""> Brand Lists</a> <br />
        <a href=""> Events</a> <br />
        <a href=""> Product Index </a> <br />
      </div>
      <div className="links1">
        <h4> Customer Services</h4> <br />
        <a href=""> FAQ</a> <br />
        <a href=""> Help Center </a> <br />
        <a href=""> Exchange and Return</a> <br />
        <a href=""> Your Account </a> <br />
        <a href=""> How to Buy</a> <br />
      </div>
      <div className="links1">
        <a href=""> Shipping and Delivery</a> <br />
        <a href=""> Payment Method </a> <br />
        <a href=""> Gift Card</a> <br />
        <a href=""> Contact Us </a> <br />
      </div>
      <div className="links1">
        You can pay through:
        <br />
        <ul className="inline">
          <img src="payment-visa.gif" />
          <img src="payment-mastercard.gif" />
          <img src="partner-ecpay.gif" />
          <img src="payment-cod.gif" />
          <img src="payment-deposit.gif" />
          <br />
          <img src="partner-gcash.gif" />
          <img src="payment-center.gif" />
          <img src="grabpay.jpg" />
          <img src="shopee-pay.jpg" />
        </ul>
        <br />
        <div className="inline">
          Payment partner:
          <br />
          <img src="partner-dragonpay.gif" />
          <img src="maya-footer.png" />
        </div>{" "}
        <div className="inline">
          Shipping partner:
          <br />
          <img src="shipping-2go.gif" />
        </div>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <div className="width">
      <div className="brands">
        <h4>Brands</h4>
        <h6>Avenue Mandarine</h6>
        <h6>ban.do</h6>
        <h6>Caran D' Ache</h6>
        <h6>kate spade new york</h6>
      </div>
      <div className="inline">
        <h6>Crocodile Creek</h6> <h6>Heidi Swapp</h6> <h6>Itoya</h6>{" "}
        <h6>Meri Meri</h6>
      </div>
      <div className="inline">
        <h6>Kid Made Modern</h6> <h6>Kikki K</h6> <h6>Leuchtturm1917</h6>{" "}
        <h6>Sennelier </h6>
      </div>
      <div className="inline">
        <h6>Ooly </h6> <h6>PanPastel </h6> <h6>Rhodia</h6> <br />
      </div>
      <div className="inline">
        <h6>Sheaffer </h6> <h6>ZIPIT</h6> <h6>Chameleon </h6> <br />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="width">
      <div className="footer">
        <div>
          <img style={{ width: "170px", height: "51px" }} src="footer.png" />
        </div>
      </div>
      <div className="inlinefooter">
        ©2023 National Book Store. <br />
        Questions? You may call us at (Mon-Sun 8AM-8PM) (632)8-8888-627 <br />
        <a href=""> Terms of Use</a>
        <a href=""> Privacy Policy</a>
      </div>
    </div>
  );
}
