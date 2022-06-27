import { VhBox } from '../../pages/components/VhBox';
import { Label } from '../../pages/components/Label';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Label",
	component: Label
}

export const City = () =>
	<VhBox>
		<Label size='xs' secondary css={{ textTransform: 'uppercase' }}>New york city</Label>
	</VhBox>

