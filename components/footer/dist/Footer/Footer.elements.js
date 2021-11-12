"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconLink = exports.SocialIcons = exports.WebsiteRights = exports.SocialIcon = exports.SocialLogo = exports.SocialMediaWrap = exports.SocialMedia = exports.FooterLink = exports.FooterLinkTitle = exports.FooterLinkItems = exports.FooterLinksWrapper = exports.FooterLinksContainer = exports.FormInput = exports.Form = exports.FooterSubText = exports.FooterSubHeading = exports.FooterSubscription = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fa = require("react-icons/fa");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 4rem 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])), function (props) {
  return props.theme.colors.main;
});

exports.FooterContainer = FooterContainer;

var FooterSubscription = _styledComponents["default"].section(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n  padding: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.white;
});

exports.FooterSubscription = FooterSubscription;

var FooterSubHeading = _styledComponents["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n  margin-bottom: 24px;\n  font-size: 24px;\n"])));

exports.FooterSubHeading = FooterSubHeading;

var FooterSubText = _styledComponents["default"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 24px;\n  font-size: 20px;\n"])));

exports.FooterSubText = FooterSubText;

var Form = _styledComponents["default"].form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n    width: 80%;\n  }\n"])));

exports.Form = Form;

var FormInput = _styledComponents["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 10px 20px;\n  border-radius: 2px;\n  margin-right: 10px;\n  outline: none;\n  border: none;\n  font-size: 16px;\n  border: 1px solid ", ";\n  &::placeholder {\n    color: ", ";\n  }\n  @media screen and (max-width: 820px) {\n    width: 100%;\n    margin: 0 0 16px 0;\n  }\n"])), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grayDark;
});

exports.FormInput = FormInput;

var FooterLinksContainer = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n  @media screen and (max-width: 820px) {\n    padding-top: 32px;\n  }\n"])));

exports.FooterLinksContainer = FooterLinksContainer;

var FooterLinksWrapper = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"])));

exports.FooterLinksWrapper = FooterLinksWrapper;

var FooterLinkItems = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  width: 160px;\n  box-sizing: border-box;\n  color: ", ";\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.white;
});

exports.FooterLinkItems = FooterLinkItems;

var FooterLinkTitle = _styledComponents["default"].h2(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n"])));

exports.FooterLinkTitle = FooterLinkTitle;

var FooterLink = _styledComponents["default"].a(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none;\n  margin-bottom: 0.5rem;\n  &:hover {\n    color: ", ";\n    transition: 0.3s ease-out;\n  }\n"])), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.primaryDark;
});

exports.FooterLink = FooterLink;

var SocialMedia = _styledComponents["default"].section(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  width: 100%;\n"])));

exports.SocialMedia = SocialMedia;

var SocialMediaWrap = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  max-width: 1000px;\n  margin: 40px auto 0 auto;\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"])));

exports.SocialMediaWrap = SocialMediaWrap;

var SocialLogo = _styledComponents["default"].a(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  color: ", ";\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n"])), function (props) {
  return props.theme.colors.white;
});

exports.SocialLogo = SocialLogo;
var SocialIcon = (0, _styledComponents["default"])(_fa.FaMagento)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-right: 10px;\n"])));
exports.SocialIcon = SocialIcon;

var WebsiteRights = _styledComponents["default"].small(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-bottom: 16px;\n"])), function (props) {
  return props.theme.colors.white;
});

exports.WebsiteRights = WebsiteRights;

var SocialIcons = _styledComponents["default"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"])));

exports.SocialIcons = SocialIcons;

var SocialIconLink = _styledComponents["default"].a(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 24px;\n"])), function (props) {
  return props.theme.colors.white;
});

exports.SocialIconLink = SocialIconLink;

//# sourceMappingURL=Footer.elements.js.map