import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, reset } from '../stitches.config';

const getCssAndReset = () => {
	const css = getCssText();
	reset();
	return css;
};

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}