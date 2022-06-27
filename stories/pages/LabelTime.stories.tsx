import VhBox from '../../pages/components/VhBox';
import Label from '../../pages/components/Label';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: "Atoms/Label",
	component: Label
}

export const Time = () =>
	<VhBox>
		<Label size='xl' primary>8:00am</Label>
	</VhBox>

