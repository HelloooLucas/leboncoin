import { createGlobalStyle } from "styled-components";
import colors from "./theme/colors";

const GlobalStyle = createGlobalStyle`

	/* CSS RESET */
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}

	/* MY GLOBAL STYLES */

	html {
		font-size: 14px;
		box-sizing: border-box;
		font-family: Lato, 'sans-serif';
		background-color: ${colors.background};
	}

	body {
		max-width: 800px;
		height: 100vh;
		margin: 0 auto;
	}

	button,
	input {
		border: 0;
	}
`;

export default GlobalStyle;
