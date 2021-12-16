import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    AppBar, Button, makeStyles, Toolbar,
    Typography
} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import React from "react";


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
            <img src="https://i.ibb.co/2dMYZm2/logo-removebg-preview.png" alt="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING" width="458" height="90" title="CUSTOM PAINTS &amp; SILK SCREEN INC. - MASKING, LIQUID PAINT COATING, POWDER COATING &amp; SILK SCREENING" />
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
        <AppBar className={[achorLinks, header]}>{displayDesktop()}</AppBar>
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