import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Profile",
    href: "/Profile",
  },
  {
    label: "Preparation",
    childs: [
      {
        label: "Washing",
        href: "/Washing",
      },
      {
        label: "Masking",
        href: "/Masking",
      },
    ],
  },
  {
    label: "Coating",
    childs: [
      {
        label: "Liquid Paint",
        href: "/LiquidCoating",
      },
      {
        label: "Power Coating",
        href: "/PowderCoating",
      },
    ],
  },
  {
    label: "Silk Screening",
    href: "/SilkScreening",
  },
  {
    label: "Gallery",
    href: "/Gallery",
  },
  {
    label: "FAQ",
    href: "/faqs",
  },
  {
    label: "Contact us",
    href: "/ContactUs",
  },
];
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#FFFFFF",
    paddingRight: "50px",
    paddingLeft: "50px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    color: "#e31c0e",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    color: "coral",
    fontWeight: 700,
    size: "18px",
    padding: "5px",
    //  marginLeft: "18px",
  },
  subMenuLable: {
    paddingLeft: 12,
  },
  subMenuButtonLable: {
    paddingLeft: 30,
    color: "coral",
  },
  icon: {
    paddingLeft: 10,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "10px",
  },
  drawerSymbol: {
    color: "coral",
    paddingLeft: "45px",
    paddingTop:25,
    display: 'flex',
    justifyContent:'center'
  },
}));

export default function Header() {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    drawerSymbol,
    subMenuLable,
    subMenuButtonLable,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Grid container xs={4}>
          {femmecubatorLogo}
        </Grid>
        <Grid container xs={8}>
          {getDrawerChoicesForMobile()}
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Grid container>
          <Grid item xs={10}>
            {femmecubatorLogo}
          </Grid>
          <Grid item xs={2}>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
                className: drawerSymbol,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <List className={drawerContainer}>
                {getDrawerChoicesForMobile()}
              </List>
            </Drawer>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoicesForMobile = () => {
    let gridColumnSize = 2;
    return headersData.map((element) => {
      let { href, label, childs } = element;

      gridColumnSize =
        childs != undefined || label.split(" ").length > 1 ? 2 : 1;
      return childs != undefined ? (
        mobileView ? (
          <CollapsableSubMenu {...element} />
        ) : (
          <Grid item xs={gridColumnSize}>
            <CollapsableSubMenu {...element} />
          </Grid>
        )
      ) : mobileView ? (
        <ListItemView {...element} />
      ) : (
        <Grid item xs={gridColumnSize}>
          <ListItemView {...element} />
        </Grid>
      );
    });
  };

  const ListItemView = (props) => {
    let { href, label, childs } = props;
    return (
      <ListItem className={menuButton} xs={2}>
        <ListItemText>
          <Link
            {...{
              href: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <span>{label}</span>
          </Link>
        </ListItemText>
      </ListItem>
    );
  };

  const CollapsableSubMenu = (props) => {
    let { href, label, childs } = props;
    const [openSecondLevel, setOpenSecondLevel] = React.useState(false);
    const handleClickSecondLevel = () => {
      setOpenSecondLevel(!openSecondLevel);
    };

    return (
      <>
        <ListItem
          button
          onClick={handleClickSecondLevel}
          className={menuButton}
        >
          <ListItemText primary={label} className={subMenuLable} />
          {openSecondLevel ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSecondLevel} timeout="auto" unmountOnExit>
          <List component="div">
            {childs.map((element, index) => {
              return (
                <ListItem className={subMenuButtonLable}>
                  <ListItemText>
                    <Link
                      {...{
                        href: element.href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: element.label,
                      }}
                    >
                      <span>{element.label}</span>
                    </Link>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  };

  const femmecubatorLogo = (
    <Typography
      variant={mobileView ? "h2" : "h6"}
      component={mobileView ? "h2" : "h6"}
      className={logo}
    >
      <img
        src="https://i.ibb.co/2dMYZm2/logo-removebg-preview.png"
        alt="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING"
        title="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING"
        height={'auto'}
        width={'100%'}
      />
    </Typography>
  );

  return (
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
