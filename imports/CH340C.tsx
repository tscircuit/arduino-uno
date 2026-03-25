import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["GND"],
	pin2: ["TXD"],
	pin3: ["RXD"],
	pin4: ["V3"],
	pin5: ["UD_POS"],
	pin6: ["UD_NEG"],
	pin7: ["pin7"],
	pin8: ["OUT"],
	pin9: ["CTS"],
	pin10: ["DSR"],
	pin11: ["RI"],
	pin12: ["DCD"],
	pin13: ["DTR"],
	pin14: ["RTS"],
	pin15: ["R232"],
	pin16: ["VCC"],
} as const;

export const CH340C = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C7464026"],
			}}
			manufacturerPartNumber="CH340C"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-4.44500000000005mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-3.175000000000068mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-1.9050000000000864mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-0.6349999999999909mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="0.6349999999999909mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="1.9049999999999727mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="3.1749999999999545mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="4.444999999999936mm"
						pcbY="-2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin16"]}
						pcbX="-4.44500000000005mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="-3.175000000000068mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="-1.9050000000000864mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="-0.6349999999999909mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="0.6349999999999909mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="1.9049999999999727mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="3.1749999999999545mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="4.444999999999936mm"
						pcbY="2.8724860000000945mm"
						width="0.5599937999999999mm"
						height="1.7450053999999997mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -5.076190000000111, y: -1.7713960000000952 },
							{ x: -5.076190000000111, y: 1.7713959999999815 },
							{ x: 5.076189999999997, y: 1.7713959999999815 },
							{ x: 5.076189999999997, y: -1.7713960000000952 },
							{ x: -5.076190000000111, y: -1.7713960000000952 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -5.58400000000006, y: 3.704400000000078 },
							{ x: 5.329999999999927, y: 3.704400000000078 },
							{ x: 5.329999999999927, y: -3.9583999999998696 },
							{ x: -5.58400000000006, y: -3.9583999999998696 },
							{ x: -5.58400000000006, y: 3.704400000000078 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C7464026.obj?uuid=07126628bc464d5389bb996c52812f54",
				// stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7464026.step?uuid=07126628bc464d5389bb996c52812f54",
				pcbRotationOffset: 90,
				modelOriginPosition: { x: 0, y: 0, z: 0.000575 },
			}}
			{...props}
		/>
	);
};
