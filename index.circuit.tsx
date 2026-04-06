import { UnoCoreSection } from "./lib/uno-core-section";
import { unoOutline } from "./lib/uno-geometry";
import { UnoHeaders } from "./lib/uno-headers";
import { UnoPowerSection } from "./lib/uno-power-section";

export default () => (
	<board
		schematicDisabled
		width="68.6mm"
		height="53.4mm"
		layers={4}
		// routingDisabled
		autorouterVersion="v5"
		outline={unoOutline as any}
		borderRadius="2mm"
		solderMaskColor="blue"
		silkscreenColor="white"
		title="Uno Compatible"
	>
		<UnoHeaders />
		<UnoPowerSection />
		<UnoCoreSection />
	</board>
);
