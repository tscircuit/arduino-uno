import { ATMEGA328P_AU } from "../imports/ATMEGA328P_AU";
import { X322516MLB4SI } from "../imports/X322516MLB4SI";
import { atmegaPinLabels } from "./uno-geometry";

export const UnoCoreSection = () => (
	<group name="core_section" pcbX="0mm" pcbY="0mm">
		<ATMEGA328P_AU
			name="U1"
			pinLabels={atmegaPinLabels as any}
			showPinAliases
			pcbX="8mm"
			pcbY="2mm"
			schX={4}
			schY={0}
			schPinArrangement={{
				topSide: { pins: ["VCC1", "VCC2", "AVCC"], direction: "left-to-right" },
				bottomSide: {
					pins: ["GND1", "GND2", "GND3", "AREF"],
					direction: "left-to-right",
				},
				leftSide: {
					pins: ["RESET", "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7"],
					direction: "top-to-bottom",
				},
				rightSide: {
					pins: [
						"A0",
						"A1",
						"A2",
						"A3",
						"A4",
						"A5",
						"D8",
						"D9",
						"D10",
						"D11",
						"D12",
						"D13",
					],
					direction: "top-to-bottom",
				},
			}}
			connections={{
				pin1: "net.D3",
				pin2: "net.D4",
				pin3: "net.GND",
				pin4: "net.V5",
				pin5: "net.GND",
				pin6: "net.V5",
				pin7: "net.XTAL1",
				pin8: "net.XTAL2",
				pin9: "net.D5",
				pin10: "net.D6",
				pin11: "net.D7",
				pin12: "net.D8",
				pin13: "net.D9",
				pin14: "net.D10",
				pin15: "net.D11",
				pin16: "net.D12",
				pin17: "net.D13",
				pin18: "net.V5",
				pin20: "net.AREF",
				pin21: "net.GND",
				pin23: "net.A0",
				pin24: "net.A1",
				pin25: "net.A2",
				pin26: "net.A3",
				pin27: "net.A4",
				pin28: "net.A5",
				pin29: "net.RESET",
				pin30: "net.D0",
				pin31: "net.D1",
				pin32: "net.D2",
			}}
		/>

		<X322516MLB4SI
			name="X1"
			pcbX="8mm"
			pcbY="-10mm"
			schX={3}
			schY={10}
			connections={{
				OSC1: "net.XTAL1",
				OSC2: "net.XTAL2",
				GND1: "net.GND",
				GND2: "net.GND",
			}}
		/>
		<capacitor
			name="C1"
			capacitance="22pF"
			footprint="0402"
			pcbX="4mm"
			pcbY="-12mm"
			schX={-2}
			schY={10}
			connections={{
				pin1: "net.XTAL1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C2"
			capacitance="22pF"
			footprint="0402"
			pcbX="12mm"
			pcbY="-12mm"
			schX={8}
			schY={10}
			connections={{
				pin1: "net.XTAL2",
				pin2: "net.GND",
			}}
		/>

		<resistor
			name="R1"
			resistance="10k"
			footprint="0402"
			pcbX="-1mm"
			pcbY="8mm"
			schX={-5}
			schY={4}
			connections={{
				pin1: "net.V5",
				pin2: "net.RESET",
			}}
		/>
		<capacitor
			name="C3"
			capacitance="100nF"
			footprint="0402"
			pcbX="-6mm"
			pcbY="8mm"
			schX={-12}
			schY={4}
			connections={{
				pin1: "net.USB_DTR",
				pin2: "net.RESET",
			}}
		/>

		<capacitor
			name="C4"
			capacitance="100nF"
			footprint="0402"
			pcbX="2mm"
			pcbY="13mm"
			schX={-5}
			schY={-5}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C5"
			capacitance="100nF"
			footprint="0402"
			pcbX="16mm"
			pcbY="13mm"
			schX={1}
			schY={-5}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C6"
			capacitance="100nF"
			footprint="0402"
			pcbX="21mm"
			pcbY="4mm"
			schX={7}
			schY={-5}
			connections={{
				pin1: "net.AREF",
				pin2: "net.GND",
			}}
		/>

		<resistor
			name="R2"
			resistance="1k"
			footprint="0402"
			pcbX="-12mm"
			pcbY="-5mm"
			schX={-14}
			schY={-1}
			connections={{
				pin1: "net.V5",
				pin2: "net.PWR_LED",
			}}
		/>
		<led
			name="LED_PWR"
			color="green"
			footprint="0603"
			pcbX="-9mm"
			pcbY="-5mm"
			schX={-10}
			schY={-1}
			connections={{
				anode: "net.PWR_LED",
				cathode: "net.GND",
			}}
		/>

		<resistor
			name="R3"
			resistance="1k"
			footprint="0402"
			pcbX="19mm"
			pcbY="-3mm"
			schX={10}
			schY={4}
			connections={{
				pin1: "net.D13",
				pin2: "net.L_LED",
			}}
		/>
		<led
			name="LED_L"
			color="amber"
			footprint="0603"
			pcbX="23mm"
			pcbY="-3mm"
			schX={14}
			schY={4}
			connections={{
				anode: "net.L_LED",
				cathode: "net.GND",
			}}
		/>
	</group>
);
