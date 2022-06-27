import { VhBox } from '../../pages/components/VhBox';
import { Label } from '../../pages/components/Label';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Label",
	component: Label
}

export const Map = () =>
	<VhBox>
		<Label size='xs' link>Map</Label>
	</VhBox>

