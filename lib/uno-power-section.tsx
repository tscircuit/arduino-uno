import { AMS1117_3_3 } from "../imports/AMS1117_3_3";
import { AMS1117_5_0 } from "../imports/AMS1117_5_0";
import { A_61729_1011BLF } from "../imports/A_61729_1011BLF";
import { CH340C } from "../imports/CH340C";
import { SS14 } from "../imports/SS14";
import { regulator5vPinLabels } from "./uno-geometry";

export const UnoPowerSection = () => (
	<group name="power_section">
		<A_61729_1011BLF
			name="USB1"
			pcbX="-27.75mm"
			pcbY="10mm"
			pcbRotation={270}
			schX={-19}
			schY={2}
			connections={{
				VCC: "net.USB_VBUS",
				D_NEG: "net.USB_D_NEG",
				D_POS: "net.USB_D_POS",
				GND: "net.GND",
				SHIELD1: "net.GND",
				SHIELD2: "net.GND",
			}}
		/>

		<CH340C
			name="U2"
			pcbX="-16.5mm"
			pcbY="11mm"
			schX={-8}
			schY={2}
			connections={{
				GND: "net.GND",
				TXD: "net.D0",
				RXD: "net.D1",
				V3: "net.USB_3V3_INT",
				UD_POS: "net.USB_D_POS",
				UD_NEG: "net.USB_D_NEG",
				DTR: "net.USB_DTR",
				VCC: "net.V5",
			}}
		/>

		<SS14
			name="D1"
			pcbX="-20mm"
			pcbY="0mm"
			schX={-17}
			schY={8}
			connections={{
				A: "net.USB_VBUS",
				K: "net.V5",
			}}
		/>

		<AMS1117_5_0
			name="U3"
			pinLabels={regulator5vPinLabels as any}
			pcbX="-25mm"
			pcbY="-12mm"
			pcbRotation={180}
			schX={-10}
			schY={-13}
			connections={{
				pin1: "net.GND",
				VIN: "net.VIN",
				pin2: "net.V5",
				pin4: "net.V5",
			}}
		/>
		<AMS1117_3_3
			name="U4"
			pcbX="-12mm"
			pcbY="-12mm"
			pcbRotation={180}
			schX={2}
			schY={-13}
			connections={{
				pin1: "net.GND",
				VIN: "net.V5",
				pin2: "net.V3_3",
				pin4: "net.V3_3",
			}}
		/>

		<capacitor
			name="C7"
			doNotPlace
			capacitance="100nF"
			footprint="0402"
			pcbX="-18mm"
			pcbY="4mm"
			schX={-8}
			schY={8}
			connections={{
				pin1: "net.USB_3V3_INT",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C8"
			doNotPlace
			capacitance="10uF"
			footprint="0805"
			pcbX="-31mm"
			pcbY="-18mm"
			schX={-16}
			schY={-17}
			connections={{
				pin1: "net.VIN",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C9"
			doNotPlace
			capacitance="10uF"
			footprint="0805"
			pcbX="-24mm"
			pcbY="-18mm"
			schX={-6}
			schY={-17}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C10"
			doNotPlace
			capacitance="10uF"
			footprint="0805"
			pcbX="-12mm"
			pcbY="-18mm"
			schX={1}
			schY={-17}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C11"
			doNotPlace
			capacitance="10uF"
			footprint="0805"
			pcbX="-6mm"
			pcbY="-18mm"
			schX={7}
			schY={-17}
			connections={{
				pin1: "net.V3_3",
				pin2: "net.GND",
			}}
		/>
	</group>
);
