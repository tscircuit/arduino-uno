import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
	pin3: ["VIN"],
	pin4: ["TAB"],
} as const;

export const AMS1117_5_0 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C347223"],
			}}
			manufacturerPartNumber="AMS1117_5_0"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin4"]}
						pcbX="-3.098799999999983mm"
						pcbY="0mm"
						width="2.1999956mm"
						height="3.4999930000000004mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="3.098799999999983mm"
						pcbY="2.2999699999999166mm"
						width="2.1999956mm"
						height="1.0999978mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="3.098799999999983mm"
						pcbY="0mm"
						width="2.1999956mm"
						height="1.0999978mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="3.098799999999983mm"
						pcbY="-2.2999700000000303mm"
						width="2.1999956mm"
						height="1.0999978mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -1.8000218000000814, y: -3.5499801999999363 },
							{ x: 1.7999963999999409, y: -3.5499801999999363 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.8000218000000814, y: 3.5499801999999363 },
							{ x: 1.7999963999999409, y: 3.5499801999999363 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.7999963999999409, y: -3.5499801999999363 },
							{ x: 1.7999963999999409, y: 3.5499801999999363 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.8000218000000814, y: -3.5499801999999363 },
							{ x: -1.7999963999999409, y: 3.5499801999999363 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -4.441000000000031, y: 3.8059999999999263 },
							{ x: 4.466399999999908, y: 3.8059999999999263 },
							{ x: 4.466399999999908, y: -3.80600000000004 },
							{ x: -4.441000000000031, y: -3.80600000000004 },
							{ x: -4.441000000000031, y: 3.8059999999999263 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C347223.obj?uuid=e80246a9471445bfb635be848806a22e",
				// stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C347223.step?uuid=e80246a9471445bfb635be848806a22e",
				pcbRotationOffset: 180,
				modelOriginPosition: { x: 0, y: 0, z: -0.049394 },
			}}
			{...props}
		/>
	);
};
