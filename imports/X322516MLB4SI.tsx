import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["OSC1"],
	pin2: ["GND1"],
	pin3: ["OSC2"],
	pin4: ["GND2"],
} as const;

export const X322516MLB4SI = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C13738"],
			}}
			manufacturerPartNumber="X322516MLB4SI"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.1000739999999496mm"
						pcbY="-0.8750299999999243mm"
						width="1.3999972mm"
						height="1.1999975999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="1.1000739999999496mm"
						pcbY="-0.8750299999999243mm"
						width="1.3999972mm"
						height="1.1999975999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="1.1000739999999496mm"
						pcbY="0.8750300000000379mm"
						width="1.3999972mm"
						height="1.1999975999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-1.1000739999999496mm"
						pcbY="0.8750300000000379mm"
						width="1.3999972mm"
						height="1.1999975999999999mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -2.029459999999972, y: 1.7213071999999556 },
							{ x: -2.029459999999972, y: -1.6786859999999706 },
							{ x: 2.070531800000026, y: -1.6786859999999706 },
							{ x: 2.070531800000026, y: 1.7213071999999556 },
							{ x: -2.029459999999972, y: 1.7213071999999556 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.286000000000058, y: -1.396872999999914 },
							{ x: -2.286000000000058, y: -1.9048729999999523 },
							{ x: -1.7780000000001337, y: -1.9048729999999523 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -2.536000000000058, y: 1.9774540000000798 },
							{ x: 2.3327999999999065, y: 1.9774540000000798 },
							{ x: 2.3327999999999065, y: -2.154745999999932 },
							{ x: -2.536000000000058, y: -2.154745999999932 },
							{ x: -2.536000000000058, y: 1.9774540000000798 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C13738.obj?uuid=3d8e5f33629249f9a4089449c02742d4",
				// stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C13738.step?uuid=3d8e5f33629249f9a4089449c02742d4",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: -0.01 },
			}}
			{...props}
		/>
	);
};
