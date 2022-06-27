/* eslint-disable @next/next/no-img-element */
/* -------------------------- dependencies / Next.js ------------------------- */
import type { NextPage } from 'next'
import Head from 'next/head'
import * as NextImage from "next/image";

/* -------------------------- dependencies / Stitches ------------------------ */
import styles from '../styles/Home.module.css'
import { getCssText } from '../stitches.config'
import { styled, globalCss } from '../stitches.config'
/* ---------------------------- import / Components -------------------------- */
import Chip from './components/Chip'
import Icon from './components/Icons'
import Label from './components/Label'
/* ------------------------------ import / Icons ----------------------------- */
import ArrowSvg from './components/icons/ArrowSvg'
import BusIcon from './components/icons/BusIcon'
import EticketIcon from './components/icons/EticketIcon'
import ClockIcon from './components/icons/ClockIcon'
import BathroomIcon from './components/icons/BathroomIcon'
import WifiIcon from './components/icons/WifiIcon'
import PassNumber from './components/icons/PassNumber'
import BoltIcon from './components/icons/BoltIcon'
import RefundIcon from './components/icons/RefundIcon'
import UstlensilIcon from './components/icons/UstlensilIcon'
import SeatXLIcon from './components/icons/SeatXLIcon'
import ChevronIconLight from './components/icons/ChevronIconLight';


/* -------------------------- Utilities Components -------------------------- */
const Inline = styled('div', {
	display: "Flex",
	FlexDirection: 'row',
	justifyContent: 'space-between',
	rowGap: '$x2dot5',
})

const Stack = styled('div', {
	display: "Flex",
	flexDirection: 'column',
	justifyContent: 'space-between',
})
const Box = styled('div', {
	'& img': {
		width: '100%',
	}
})
const BoxInline = styled('div', {
	display: 'inline-flex',
	justifyItems: 'center',
	alignItems: 'center',
})
const IconisDark = styled('span', {
	'&.material-symbols-outlinedd': {
		fontFamily: 'Material Symbols Rounded',
		color: 'hsla(205, 25%, 53%, 1)',
		backgoundColor: 'transparent',
	}
})

const SellableCard = styled('div', {
	/* --------------------------------- Layout --------------------------------- */
	display: "Flex",
	width: 'auto',
	flexDirection: 'column',
	justifyContent: 'space-between',
	py: '$x2',
	pr: '$x2',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgPrimary',
	border: '1px solid $bdPrimary',
	boxShadow: '$md',
	bdr: '$4',
	/* ----------------------------- Repsonsivenessin' ----------------------------- */
	'@bp1': {
		width: '80vw'
	},
	'@bp2': {
		width: '60vw'
	},
	'@bp3': {
		width: '40vw'
	},
	'@bp4': {
		width: '25vw'
	},
	'@bp5': {
		width: '15vw'
	},
})

const SellCard: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
				<style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</Head>

			<main className={styles.main}>
				{/* -------------------------------------------------------------------------- */
			 /*                           Sellable Card Component                          */
			 /* -------------------------------------------------------------------------- */}
				<SellableCard>
					<Inline>
						<Box css={{ maxWidth: '100px', ml: "$x2dot5" }}>
							<img src="https://imgasset.s3.ca-central-1.amazonaws.com/img--is-greyhound.png" alt="greyhound carrier logo" />
						</Box>
						<Inline>
							<BathroomIcon></BathroomIcon>
							<WifiIcon></WifiIcon>
							<EticketIcon></EticketIcon>
						</Inline>
					</Inline>
					<Inline css={{ my: "$x2dot5", mr: '-$xdot5', justifyContent: 'top', minWidth: 'fit-content' }}>
						<Stack css={{ mr: "10%", ml: "$x2dot5", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot25" }}>8:00am</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Port Authority</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>NEW YORK CITY</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
						<Box css={{ pt: '2px' }} ><ArrowSvg></ArrowSvg></Box>
						<Stack css={{ ml: "10%", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot25" }}>12:30pm</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Union Station</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>WASHINGTON</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
					</Inline>
					<Inline css={{ ml: "$x2", mr: '-$xdot5', mb: '-$x1', alignItems: 'center' }}>
						<BoxInline>
							<Inline css={{ pr: '$x1', pt: '$x1', alignItems: 'center' }}>
								<Icon className='material-symbols-outlined' css={{ color: "$iconPrimary", fontSize: '22px' }}>directions_bus</Icon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>Bus</Label>
							</Inline>
							<Inline css={{ pr: '$x1', pt: '$x1', alignItems: 'center' }}>
								<Icon className='material-symbols-outlined' css={{ color: '$iconPrimary', fontSize: '20px' }}>schedule</Icon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>4h 30m</Label>
							</Inline>
						</BoxInline>
						<Inline css={{ mb: '-($x1)' }}>
							<Chip size="lg">
								<Label size='lg' css={{ pt: '$xdot25' }} bold>$45</Label>
								<ChevronIconLight></ChevronIconLight>
							</Chip>
						</Inline>
					</Inline>
				</SellableCard>
			</main>

			<footer className={styles.footer}>
			</footer>
		</div>
	)
}

export default SellCard
