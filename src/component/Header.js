
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const headersData = [
    {
        label: "Home",
        href: "/listings",
    },
    {
        label: "Profile",
        href: "/mentors",
    },
    {
        label: "Services",
        href: "/account",
    },
    {
        label: "Preparation",
        href: "/logout",
        childs: [{
            label: "Washing",
            href: "/account",
        }, {
            label: "Masking",
            href: "/account",
        }]
    },
    {
        label: "Coating",
        href: "/account",
        childs: [{
            label: "Liquid Paint",
            href: "/account",
        }, {
            label: "Power Coating",
            href: "/account",
        }]
    },
    {
        label: "Slik Screening",
        href: "/logout",
    },
    {
        label: "Gallery",
        href: "/account",
    },
    {
        label: "FAQ",
        href: "/logout",
    },
    {
        label: "Contact us",
        href: "/logout",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFFEFE",
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
    icon:{
        paddingLeft:10
    }
}));

export default function Header() {
    const { header, logo, toolbarButtons,icon } = useStyles();

    const displayDesktop = () => {
        return (
            <Toolbar>
                {femmecubatorLogo}
                <div className={toolbarButtons}>{getMenuButtons(headersData)}</div>
            </Toolbar>
        );
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Custom Paint & Slik Screen Inc.
        </Typography>
    );

    const getMenuButtons = (headersData) => {
        return headersData.map(({ label, href, childs }) => {
            
            return (
                <React.Fragment>
                    {
                        childs != undefined ? SimpleMenu(childs,label) : <Button>{label}</Button>
                    }
                </React.Fragment>

            );
        });
    };

    return (
        <AppBar className={header}>{displayDesktop()}</AppBar>
    );
}


export function SimpleMenu(childs,label) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { header, logo, toolbarButtons,icon } = useStyles();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <React.Fragment>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         {label} { childs != undefined ? <FontAwesomeIcon icon={faAngleDown} className={icon}/>:''}
        </Button>
        
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
            {
            childs.map(({ label, href, childs }) => {
                return (
                    <React.Fragment>
                        {
                            childs != undefined ? SimpleMenu(childs,label) : <StyledMenuItem onClick={handleClose}>{label}</StyledMenuItem>
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