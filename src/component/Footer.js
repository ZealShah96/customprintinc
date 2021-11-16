import React from 'react';
import { Footer } from './../../components/footer/Footer';
import { ThemeProvider } from "styled-components";

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
// With theme
export default function FooterComponent(){
	
   return <div>
		<ThemeProvider theme={theme}>
			<Footer />
		</ThemeProvider>
	</div>
}