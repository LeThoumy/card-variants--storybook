import { VhBox } from '../../pages/components/VhBox';
import { Label } from '../../pages/components/Label';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Label",
	component: Label
}

export const Location = () =>
	<VhBox>
		<Label size='lg' secondary bold>Port Authority</Label>
	</VhBox>

