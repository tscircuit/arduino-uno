import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["OUT1"],
	pin2: ["IN1_N"],
	pin3: ["IN1_P"],
	pin4: ["GND"],
	pin5: ["IN2_P"],
	pin6: ["IN2_N"],
	pin7: ["OUT2"],
	pin8: ["VCC_POS"],
} as const;

export const LMV358IDR = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C63813"],
			}}
			manufacturerPartNumber="LMV358IDR"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin5"]}
						pcbX="1.9049999999999727mm"
						pcbY="2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="0.6349999999999909mm"
						pcbY="2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="-0.6349999999999909mm"
						pcbY="2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="-1.9050000000000864mm"
						pcbY="2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="1.9049999999999727mm"
						pcbY="-2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="0.6349999999999909mm"
						pcbY="-2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-0.6349999999999909mm"
						pcbY="-2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.9050000000000864mm"
						pcbY="-2.569972000000007mm"
						width="0.5880099999999999mm"
						height="2.0450048mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -2.5262078000000656, y: -1.5214091999999937 },
							{ x: -2.5262078000000656, y: 1.5214092000001074 },
							{ x: 2.526207799999952, y: 1.5214092000001074 },
							{ x: 2.526207799999952, y: -1.5214091999999937 },
							{ x: -2.5262078000000656, y: -1.5214091999999937 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -3.0439999999999827, y: 3.552000000000021 },
							{ x: 2.7899999999999636, y: 3.552000000000021 },
							{ x: 2.7899999999999636, y: -3.80600000000004 },
							{ x: -3.0439999999999827, y: -3.80600000000004 },
							{ x: -3.0439999999999827, y: 3.552000000000021 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C63813.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C63813.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: 0 },
			}}
			{...props}
		/>
	);
};
