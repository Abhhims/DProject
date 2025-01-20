// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   Link,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Divider,
//   useScrollTrigger,
//   Slide,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import PhoneIcon from "@mui/icons-material/Phone";
// import ArrowForwardIosIcon from "@mui/icons-material/East";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import logo from "./logo.png";
// import { useNavigate } from "react-router-dom";

// const HideOnScroll = (props) => {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: undefined });
//   console.log(trigger, "trigger", children, window);

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// };

// const Header = (props) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navigation = useNavigate();
// const {setPathClick,pathClick}=props
//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

// const heandelClickSide=(path)=>{
//   setPathClick(path)
//   if (path === "Latest Activity") {
//     navigation("/activity");
//   } else{
//     navigation("/");
//   }
// }
//   const heandelClick = (path) => {
//     setPathClick(path)
//     if (path === "/activity") {
//       navigation("/activity");
//     } else{
//       navigation("/");
//     }
//   };
//   return (
//     <>
//       <HideOnScroll {...props}>
//         <AppBar
//           position="sticky"
//           elevation={3}
//           sx={{
//             top: { xs: 0, md: "10px", lg: "10px" },
//             backgroundColor: "#fff",
//             borderRadius: { xs: "0", md: "50px", lg: "50px" },
//             padding: {
//               xs: "12px 5px",
//               md: "12px 50px",
//               lg: "12px 50px",
//             },
//             maxWidth: "1440px",
//             width: "100%",
//           }}
//         >
//           <Toolbar
//             sx={{ justifyContent: "space-between", alignItems: "center" }}
//           >
//             {/* Logo */}
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={logo}
//                 alt="Hita Ayu Logo"
//                 style={{ maxWidth: "50px", marginRight: "10px" }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "#007bff",
//                   fontWeight: "bold",
//                   fontSize: { xs: "14px", md: "16px", lg: "18px" },
//                 }}
//               >
//                 Hita.ayu Critical Care LLP
//               </Typography>
//             </Box>

//             {/* Hamburger Menu for Mobile */}
//             <IconButton
//               edge="end"
//               color="inherit"
//               onClick={toggleDrawer}
//               sx={{ display: { xs: "block", md: "none" }, color: "#007bff" }}
//             >
//               <MenuIcon />
//             </IconButton>

//             {/* Navigation Links (Hidden in Mobile) */}
//             <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
//               <Link href="#Home" color={pathClick==="/"?"#1E88E5":"text.primary"} underline="hover">
//                 <span onClick={(_) => heandelClick("/")}>Home</span>
//               </Link>
//               <Link href="#About" color={pathClick==="/About"?"#1E88E5":"text.primary"}  underline="hover">
//                 <span onClick={(_) => heandelClick("/About")}>About Us</span>
//               </Link>
//               <Link href="#Services" color={pathClick==="/Services"?"#1E88E5":"text.primary"}  underline="hover">
//                 <span onClick={(_) => heandelClick("/Services")}>Services</span>
//               </Link>
//               <Link href="#Education" color={pathClick==="/Education"?"#1E88E5":"text.primary"}  underline="hover">
//                 <span onClick={(_) => heandelClick("/Education")}>
//                   Education
//                 </span>
//               </Link>
//               <Link href="#Education" color={pathClick==="/Experience"?"#1E88E5":"text.primary"}  underline="hover">
//                 <span onClick={(_) => heandelClick("/Experience")}>
//                   Experience
//                 </span>
//               </Link>
//               <Link href="#Articles" color={pathClick==="/activity"?"#1E88E5":"text.primary"} underline="hover" >
//                 <span  onClick={(_) => heandelClick("/activity")}>
//                   Latest Activity
//                 </span>
//               </Link>
//               <Link href="#Contact" color={pathClick==="/Contact"?"#1E88E5":"text.primary"}  underline="hover">
//                 <span onClick={(_) => heandelClick("/Contact")}>
//                   Contact Us{" "}
//                 </span>
//               </Link>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>

//       {/* Sidebar Drawer */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         PaperProps={{
//           sx: {
//             width: "300px",
//             height: "auto",
//             maxHeight: "800px",
//             boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//           },
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
//           <img
//             src={logo}
//             alt="Hita Ayu Logo"
//             style={{ width: "42px", marginRight: "10px" }}
//           />
//           <Typography
//             sx={{
//               color: "#007bff",
//               fontWeight: "bold",
//               fontSize: { xs: "14px", md: "16px", lg: "18px" },
//             }}
//           >
//             Hita.ayu Critical Care LLP
//           </Typography>
//         </Box>
//         <Divider sx={{ my: 2 }} />
//         <List>
//           {[
//             { text: "Home", link: "#Home" },
//             { text: "About Us", link: "#About" },
//             { text: "Education", link: "#Education" },
//             { text: "Experience", link: "#Education" },
//             { text: "Services", link: "#Services" },
//             { text: "Latest Activity", link: "#Articles" },
//             { text: "Contact Us", link: "#Contact" },
//           ].map((item) => (
//             <ListItem
//               button
//               onClick={() =>{
//                 heandelClickSide(item.text) 
//                  setDrawerOpen(false)}}
//               component="a"
//               href={item.link}
//               key={item.text}
//             >
//               <ListItemText
//                 children={
//                   <Typography
//                     sx={{ fontSize: { xs: "12px", md: "15px", lg: "16px" } }}
//                   >
//                     {item.text}
//                   </Typography>
//                 }
//               />
//               <ListItemIcon>
//                 <ArrowForwardIosIcon
//                   sx={{ color: "#007bff", fontSize: "16px" }}
//                 />
//               </ListItemIcon>
//             </ListItem>
//           ))}
//         </List>
//         <Box sx={{ textAlign: "center", mt: 3 }}>
//           <Link href="tel:+919867768221" sx={{ color: "#007bff" }}>
//             <PhoneIcon sx={{ mr: 1 }} /> +91 9867768221
//           </Link>
//         </Box>
//         <Divider sx={{ my: 2 }} />
//         <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//           <IconButton color="primary" href="#">
//             <FacebookIcon />
//           </IconButton>
//           <IconButton color="primary" href="#">
//             <InstagramIcon />
//           </IconButton>
//           <IconButton color="primary" href="#">
//             <YouTubeIcon />
//           </IconButton>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "./Icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/East";
import TwitterIcon from './Twit.png';
import FacebookIcon from "./fb.png";
import InstagramIcon from "./Insta.png";
import YouTubeIcon from "./Youth.png";
import logo from "./logo.png";
import star from "./star.png"
import { useNavigate } from "react-router-dom";
 
const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: undefined });
  console.log(trigger, "trigger", children, window);
 
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
 
const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = useNavigate();
 
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [pathClick, setPathClick] = useState("/")
 
  const heandelClickSide = (path) => {
    if (path === "Latest Activity") {
      navigation("/activity");
    } else {
      navigation("/");
    }
  }
  const heandelClick = (path) => {
    setPathClick(path)
    if (path === "/activity") {
      navigation("/activity");
    } else {
      navigation("/");
    }
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          elevation={3}
          sx={{
            top: { xs: 0, md: "10px", lg: "10px" },
            backgroundColor: "#fff",
            borderRadius: { xs: "0", md: "50px", lg: "50px" },
            padding: {
              xs: "12px 5px",
              md: "12px 25px",
              lg: "12px 50px",
            },
            maxWidth: "1440px",
            width: "100%",
          }}
        >
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Hita Ayu Logo"
                style={{ maxWidth: "50px", marginRight: "10px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#007bff",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", md: "16px", lg: "18px" },
                }}
              >
                Hita<img src={star} style={{ width: '8px', height: '10px', margin: '-2px 0px' }} />ayu Critical Care LLP
              </Typography>
            </Box>
 
            {/* Hamburger Menu for Mobile */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", md: "none" }, color: "#007bff" }}
            >
              <MenuIcon />
            </IconButton>
 
            {/* Navigation Links (Hidden in Mobile) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
              <Link href="#Home" color={pathClick === "/" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/")}>Home</span>
              </Link>
              <Link href="#About" color={pathClick === "/About" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/About")}>About Us</span>
              </Link>
              <Link href="#Services" color={pathClick === "/Services" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/Services")}>Services</span>
              </Link>
              <Link href="#Education" color={pathClick === "/Education" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/Education")}>
                  Education
                </span>
              </Link>
              <Link href="#Education" color={pathClick === "/Experience" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/Experience")}>
                  Experience
                </span>
              </Link>
              <Link href="#Articles" color={pathClick === "/activity" ? "#1E88E5" : "text.primary"} underline="hover" >
                <span onClick={(_) => heandelClick("/activity")}>
                  Latest Activity
                </span>
              </Link>
              <Link href="#Contact" color={pathClick === "/Contact" ? "#1E88E5" : "text.primary"} underline="hover">
                <span onClick={(_) => heandelClick("/Contact")}>
                  Contact Us{" "}
                </span>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
 
      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "300px",
            height: "auto",
            maxHeight: "800px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
          <img
            src={logo}
            alt="Hita Ayu Logo"
            style={{ width: "42px", marginRight: "10px" }}
          />
          <Typography
            sx={{
              color: "#007bff",
              fontWeight: "bold",
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
            }}
          >
            Hita<img src={star} style={{ width: '8px', height: '10px', margin: '-2px 0px' }} />ayu Critical Care LLP
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <List>
          {[
            { text: "Home", link: "#Home" },
            { text: "About Us", link: "#About" },
            { text: "Education", link: "#Education" },
            { text: "Experience", link: "#Education" },
            { text: "Services", link: "#Services" },
            { text: "Latest Activity", link: "#Activity" },
            { text: "Contact Us", link: "#Contact" },
          ].map((item) => (
            <ListItem
              button
              onClick={() => {
                heandelClickSide(item.text)
                setDrawerOpen(false)
              }}
              component="a"
              href={item.link}
              key={item.text}
            >
              <ListItemText
                children={
                  <Typography
                    sx={{ fontSize: { xs: "12px", md: "15px", lg: "16px" } }}
                  >
                    {item.text}
                  </Typography>
                }
              />
              <ListItemIcon>
                <ArrowForwardIosIcon
                  sx={{ color: "#007bff", fontSize: "16px" }}
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: "center", mt: 3, marginRight:'10px'}}>
          <Link href="tel:+919867768221" sx={{ color: "#007bff" }}>
            <img src={PhoneIcon} style={{ width: '20px', height: '20px', marginRight: '10px', marginBottom: '-5px',marginLeft:'-104px' }} /> +91 9867768221
          </Link>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span style={{width:'100px',height:'20px', fontSize:'10px', marginTop:'13px'}}>@ Copyright © 2024</span>
          <IconButton color="primary" href="#" style={{marginBottom:'30px'}}>
           <img src={TwitterIcon} style={{width:'25px', height:'25px'}}/>
          </IconButton>
          <IconButton color="primary" href="#" style={{marginBottom:'30px'}}>
          <img src={FacebookIcon} style={{width:'25px', height:'25px'}}/>
          </IconButton>
          <IconButton color="primary" href="#" style={{marginBottom:'30px'}}>
          <img src={InstagramIcon} style={{width:'25px', height:'25px'}}/>
          </IconButton>
          <IconButton color="primary" href="#" style={{marginBottom:'30px'}}>
          <img src={YouTubeIcon} style={{width:'25px', height:'25px'}}/>
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};
 
export default Header;