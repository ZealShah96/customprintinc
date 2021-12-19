import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    AppBar, Button, Drawer, IconButton, makeStyles, MenuIcon, Toolbar,
    Typography
} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
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
        childs: [{
            label: "Washing",
            href: "/Washing",
        }, {
            label: "Masking",
            href: "/Masking",
        }]
    },
    {
        label: "Coating",
        href: "/account",
        childs: [{
            label: "Liquid Paint",
            href: "/LiquidCoating",
        }, {
            label: "Power Coating",
            href: "/PowderCoating",
        }]
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
        backgroundColor: '#FFFFFF',
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        color: "#e31c0e",
        textAlign: "left",
    },
    // this group of buttons will be aligned to the right side
    toolbarButtons: {
        marginLeft: 'auto',
    },
    icon: {
        paddingLeft: 10
    },
    achorLinks: {
        "& a":{
            textDecoration: 'none'
        }
    },
    button: {
        color: 'coral',
        fontWeight: '600'
    }
}));



export default function Header() {
    const { header, logo, toolbarButtons, achorLinks,button } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
      });

      const { mobileView } = state;


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
            <Toolbar>
                {femmecubatorLogo}
                <div className={toolbarButtons}>{getMenuButtons(headersData)}</div>
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
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
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
              <div className={drawerContainer}>{getMenuButtons(headersData)}</div>
            </Drawer>
    
            <div>{femmecubatorLogo}</div>
          </Toolbar>
        );
      };
    

    const femmecubatorLogo = (
        <Typography variant={mobileView?"h2":"h6"} component={mobileView?"h2":"h6"} className={logo}>
            <img src="https://i.ibb.co/2dMYZm2/logo-removebg-preview.png" alt="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING" width={((window.innerWidth/1920)*458)} height={((window.innerHeight/720)*90)} title="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING" />
        </Typography>
    );

    const getMenuButtons = (headersData) => {
        return headersData.map(({ label, href, childs }) => {

            return (
                <React.Fragment className={achorLinks}>
                    {
                        childs !== undefined ? SimpleMenu(childs, label) : <Link to={href} replace><Button className={button}>{label}</Button></Link>
                    }
                </React.Fragment>

            );
        });
    };


    return (
        <AppBar className={[achorLinks, header]}>{mobileView?displayMobile():displayDesktop()}</AppBar>
    );
}


export function SimpleMenu(childs, label) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { icon,achorLinks } = useStyles();
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment >
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.button}>
                <Button className={classes.button}>{label}</Button>
                {childs !== undefined ? <FontAwesomeIcon icon={faAngleDown} className={icon} /> : ''}
            </Button>

            <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={achorLinks}
            >
                {
                    childs.map(({ label, href, childs }) => {
                        return (
                            <React.Fragment>
                                {
                                    childs !== undefined ? SimpleMenu(childs, label) : <StyledMenuItem onClick={handleClose} className={'Header'}><Link to={href} replace className={classes.button}>{label}</Link></StyledMenuItem>
                                }
                            </React.Fragment>

                        );
                    })
                }
            </StyledMenu>
        </React.Fragment>
    );
}

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        className={'Header'}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);