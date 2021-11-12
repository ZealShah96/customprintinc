"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = require("../Button");

var _fa = require("react-icons/fa");

var _Footer = require("./Footer.elements");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Footer = function Footer() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterContainer, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterSubscription, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterSubHeading, {
        children: "Join our exclusive membership to receive the latest news and trends"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterSubText, {
        children: "You can unsubscribe at any time"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.Form, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FormInput, {
          name: "email",
          type: "email",
          placeholder: "Your Email"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          fontBig: true,
          children: "Subscribe"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinksContainer, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinksWrapper, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinkItems, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLinkTitle, {
            children: "About Us"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/sign-up",
            children: "How it works"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Testimoni"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Careers"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Investors"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Terms of Service"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinkItems, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLinkTitle, {
            children: "Contact Us"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Contact"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Support"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Destinations"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Sponsorships"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinksWrapper, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinkItems, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLinkTitle, {
            children: "Videos"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Submit Video"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Ambassadors"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Agency"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Influencer"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.FooterLinkItems, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLinkTitle, {
            children: "Social Media"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Instagram"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Facebook"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Youtube"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.FooterLink, {
            href: "/",
            children: "Twitter"
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialMedia, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.SocialMediaWrap, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.SocialLogo, {
          href: "/",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIcon, {}), "ULTRA"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.WebsiteRights, {
          children: "ULTRA \xA9 2020"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Footer.SocialIcons, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIconLink, {
            href: "/",
            target: "_blank",
            "aria-label": "Facebook",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebook, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIconLink, {
            href: "/",
            target: "_blank",
            "aria-label": "Instagram",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaInstagram, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIconLink, {
            href: "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",
            rel: "noopener noreferrer",
            target: "_blank",
            "aria-label": "Youtube",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaYoutube, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIconLink, {
            href: "/",
            target: "_blank",
            "aria-label": "Twitter",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTwitter, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.SocialIconLink, {
            href: "/",
            target: "_blank",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLinkedin, {})
          })]
        })]
      })
    })]
  });
};

var _default = Footer;
exports["default"] = _default;

//# sourceMappingURL=Footer.js.map