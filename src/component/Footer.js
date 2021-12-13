import React from 'react';
import { ThemeProvider } from "styled-components";
import { Footer } from './../../components/footer/Footer';

const theme = {
	colors: {
		primary: "#4B59F7",
		primaryDark: "#0467FB",
		white: "#fff",
		main: "#101522",
		grayDark: "#242424",
		grayOne: "#1c2237",
		grayLight: "#a9b3c1",
		grayLighter: "#f7f8fa"
	}
};

const footerObject={
	nameOfCompany:'Custom Print Inc',
	companyLogo:'',
	linkGroups:[
		{
			nameOfGroup:'About Us',
			links:[{
				name:'How it works',
				link:''
			},
			{
				name:'Testinomials',
				link:''
			},
			{
				name:'Careers',
				link:''
			},
			{
				name:'Investors',
				link:''
			},
			{
				name:'Terms of Service',
				link:''
			}]
		},
		{
			nameOfGroup:'Contact Us',
			links:[{
				name:'Contact',
				link:''
			},
			{
				name:'Support',
				link:''
			},
			{
				name:'Destinations',
				link:''
			},
			{
				name:'Sponsorships',
				link:''
			}]
		},
		{
			nameOfGroup:'Videos',
			links:[{
				name:'Submit Video',
				link:''
			},
			{
				name:'Ambassadors',
				link:''
			},
			{
				name:'Agency',
				link:''
			},
			{
				name:'Influencer',
				link:''
			}]
		},
		{
			nameOfGroup:'Social Media',
			links:[{
				name:'Instagram',
				link:''
			},
			{
				name:'Facebook',
				link:''
			},
			{
				name:'Youtube',
				link:''
			},
			{
				name:'Twitter',
				link:''
			}]
		}
	],
	socialLinks:[
		{
			name:'Facebook',
			logo:'',
			link:''
		},
		{
			name:'Instagram',
			logo:'',
			link:''
		},
		{
			name:'Youtube',
			logo:'',
			link:''
		},
		{
			name:'Twitter',
			logo:'',
			link:''
		},
		{
			name:'LinkedIn',
			logo:'',
			link:''
		}
	]
};


// With theme
export default function FooterComponent(){
	
   return <div>
		<ThemeProvider theme={theme}>
			<Footer footerObject={footerObject}/>
		</ThemeProvider>
	</div>
}