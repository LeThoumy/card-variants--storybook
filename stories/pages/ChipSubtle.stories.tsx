import VhBox from '../../pages/components/VhBox';
import Chip from '../../pages/components/Chip';
import Label from '../../pages/components/Label';
import Icon from '../../pages/components/Icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Chip",
	component: Chip
}

export const Base = () =>
	<VhBox>
		<Chip size="lg" color='neutral'>
			<Label size='lg' primary bold>Itinerary</Label>
			<Icon className='material-symbols-outlinedd' css={{ color: "$iconPrimary" }}>chevron_right</Icon>
		</Chip>
	</VhBox>
