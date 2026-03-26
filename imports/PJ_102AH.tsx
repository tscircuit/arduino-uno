import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["VIN_IN"],
	pin2: ["GND"],
	pin3: ["SW"],
} as const;

export const PJ_102AH = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			manufacturerPartNumber="PJ-102AH"
			footprint="kicad:Connector_BarrelJack/BarrelJack_CUI_PJ-102AH_Horizontal"
			{...props}
		/>
	);
};
