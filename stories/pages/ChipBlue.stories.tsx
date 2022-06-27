import Chip from '../../pages/components/Chip';
import Icon from '../../pages/components/Icons';
import VhBox from '../../pages/components/VhBox';
import Label from '../../pages/components/Label';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Chip",
	component: Chip
}

export const BlueDefault = () =>
	<VhBox>
		<Chip size="lg" color="blue">
			<Label bold>$45</Label>
			<Icon className='material-symbols-outlinedd' css={{ color: "$blueReg200" }}>chevron_right</Icon>
		</Chip>
	</VhBox>
