import { styled } from '../../stitches.config';
import type * as Stitches from '../../stitches.config';


export const Chip = styled('button', {
	/* ----------------------------- Default Styles ----------------------------- */
	display: 'inline-flex',
	backgroundColor: '$blueReg500',
	color: '$txtOverBg',
	bdr: '32px',
	placeItems: 'center',
	cursor: 'pointer',
	p: '$x1 $x1dot5 $x1 $x2dot5',
	/* -------------------------------- Variants -------------------------------- */
	variants: {
		size: {
			md: {
				fontFamily: 'codec',
				fontSize: '$xs',
				bdr: '$pill',
			},
			lg: {
				fontFamily: 'codec',
				fontSize: "$lg",
				bdr: '$pill',
			}
		},
		color: {
			blue: {
				backgroundColor: '$blueReg500',
				color: '$txtOverBg',
			},
			neutral: {
				backgroundColor: '$bgSecondaryTransparent'
			},
			subtle: {
				backgroundColor: '$blueAccent500Transparent'
			}

		},
	},
});
type Variants = Stitches.VariantProps<typeof Chip>;