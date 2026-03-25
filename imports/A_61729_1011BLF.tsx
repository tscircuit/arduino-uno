import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["VCC"],
	pin2: ["D_NEG"],
	pin3: ["D_POS"],
	pin4: ["GND"],
	pin5: ["SHIELD1"],
	pin6: ["SHIELD2"],
} as const;

export const A_61729_1011BLF = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C254704"],
			}}
			manufacturerPartNumber="A_61729_1011BLF"
			footprint={
				<footprint>
					<platedhole
						portHints={["pin1"]}
						pcbX="1.2500609999999597mm"
						pcbY="2.6799603499999876mm"
						outerDiameter="1.5999967999999998mm"
						holeDiameter="0.9999979999999999mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin2"]}
						pcbX="-1.2500609999999597mm"
						pcbY="2.6799603499999876mm"
						outerDiameter="1.5999967999999998mm"
						holeDiameter="0.9999979999999999mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin3"]}
						pcbX="-1.2500609999999597mm"
						pcbY="0.6799643499999775mm"
						outerDiameter="1.5999967999999998mm"
						holeDiameter="0.9999979999999999mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin4"]}
						pcbX="1.2500609999999597mm"
						pcbY="0.6799643499999775mm"
						outerDiameter="1.5999967999999998mm"
						holeDiameter="0.9999979999999999mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin5"]}
						pcbX="-6.019927000000052mm"
						pcbY="-2.0299616500000184mm"
						outerDiameter="2.8999941999999996mm"
						holeDiameter="2.3000207999999995mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin6"]}
						pcbX="6.019927000000052mm"
						pcbY="-2.0299616500000184mm"
						outerDiameter="2.8999941999999996mm"
						holeDiameter="2.3000207999999995mm"
						shape="circle"
					/>
					<silkscreenpath
						route={[
							{ x: 6.099936999999954, y: -12.469971250000071 },
							{ x: -6.100038600000062, y: -12.469971250000071 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.099936999999954, y: -3.7091810499999838 },
							{ x: 6.099936999999954, y: -12.469971250000071 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.831721000000016, y: 3.530022150000036 },
							{ x: 6.099936999999954, y: 3.530022150000036 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.099936999999954, y: 3.530022150000036 },
							{ x: 6.099936999999954, y: -0.3507422499999393 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -6.100038600000062, y: -3.7091810499999838 },
							{ x: -6.100038600000062, y: -12.469971250000071 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -6.100038600000062, y: 3.530022150000036 },
							{ x: -6.100038600000062, y: -0.3507422499999393 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -6.100038600000062, y: 3.530022150000036 },
							{ x: -1.8318480000000363, y: 3.530022150000036 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.6682739999999967, y: 3.530022150000036 },
							{ x: 0.6681469999999763, y: 3.530022150000036 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -7.773860999999897, y: 3.9858383499999945 },
							{ x: 7.76293899999996, y: 3.9858383499999945 },
							{ x: 7.76293899999996, y: -12.71936165000011 },
							{ x: -7.773860999999897, y: -12.71936165000011 },
							{ x: -7.773860999999897, y: 3.9858383499999945 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C254704.obj?uuid=8304474df4984c73847b11032a36c55c",
				// stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C254704.step?uuid=8304474df4984c73847b11032a36c55c",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 12.5, z: -5.6900059999999995 },
			}}
			{...props}
		/>
	);
};
