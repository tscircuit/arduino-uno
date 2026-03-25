import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["K"],
	pin2: ["A"],
} as const;

export const SS14 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2480"],
			}}
			manufacturerPartNumber="SS14"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="1.9649440000000595mm"
						pcbY="0mm"
						width="1.5199868mm"
						height="1.6800068mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.9649440000000595mm"
						pcbY="0mm"
						width="1.5199868mm"
						height="1.6800068mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -0.7238745999998173, y: 0 },
							{ x: 0.7500112000000172, y: 0 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.24998679999998785, y: 0.49999899999988884 },
							{ x: -0.24998679999998785, y: -0.4999990000000025 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.25001220000012836, y: 0.49999899999988884 },
							{ x: -0.24998679999998785, y: 0 },
							{ x: 0.25001220000012836, y: -0.4999990000000025 },
							{ x: 0.25001220000012836, y: 0.49999899999988884 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.099995799999988, y: -1.071143399999869 },
							{ x: 2.099995799999988, y: -1.2999973999999384 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.099995799999988, y: 1.299997400000052 },
							{ x: 2.099995799999988, y: 1.0711433999999826 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.099995799999988, y: 1.299997400000052 },
							{ x: 2.099995799999988, y: 1.299997400000052 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.099995799999988, y: 1.0711433999999826 },
							{ x: -2.099995799999988, y: 1.299997400000052 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.099995799999988, y: -1.2999973999999384 },
							{ x: -2.099995799999988, y: -1.071143399999869 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.099995799999988, y: -1.2999973999999384 },
							{ x: -2.099995799999988, y: -1.2999973999999384 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -2.9677999999998974, y: 1.5453999999999724 },
							{ x: 2.9932000000000016, y: 1.5453999999999724 },
							{ x: 2.9932000000000016, y: -1.5962000000000671 },
							{ x: -2.9677999999998974, y: -1.5962000000000671 },
							{ x: -2.9677999999998974, y: 1.5453999999999724 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2480.obj?uuid=2ad98c37c5614ad18681cbd22e4725e1",
				// stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2480.step?uuid=2ad98c37c5614ad18681cbd22e4725e1",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: -1.05 },
			}}
			{...props}
		/>
	);
};
