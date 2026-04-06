import { ATMEGA16U2_MUR } from "../imports/ATMEGA16U2_MUR";
import { BLM21PG221SN1D } from "../imports/BLM21PG221SN1D";
import { CG0603MLC_05E } from "../imports/CG0603MLC_05E";
import { FDN340P } from "../imports/FDN340P";
import { LMV358IDR } from "../imports/LMV358IDR";
import { LP2985_33DBVR } from "../imports/LP2985_33DBVR";
import { M7_SMA_ } from "../imports/M7_SMA_";
import { DC_050_B250 } from "../imports/DC_050_B250";
import { MF_MSMF050_2 } from "../imports/MF_MSMF050_2";
import { NCP1117ST50T3G } from "../imports/NCP1117ST50T3G";
import { SKRPACE010 } from "../imports/SKRPACE010";
import { A_61729_1011BLF } from "../imports/A_61729_1011BLF";
import { X322516MLB4SI } from "../imports/X322516MLB4SI";

export const UnoPowerSection = () => (
	<group name="power_section" pcbX="0mm" pcbY="0mm">
		<A_61729_1011BLF
			name="USB1"
			pcbX="-27.75mm"
			pcbY="10mm"
			pcbRotation={270}
			schX={-30}
			schY={12}
			connections={{
				VCC: "net.USB_VBUS_RAW",
				D_NEG: "net.USB_CONN_D_NEG",
				D_POS: "net.USB_CONN_D_POS",
				GND: "net.GND",
				SHIELD1: "net.GND",
				SHIELD2: "net.GND",
			}}
		/>
		<MF_MSMF050_2
			name="F1"
			pcbX="-18.5mm"
			pcbY="4mm"
			pcbRotation={0}
			schX={-24}
			schY={12}
			connections={{
				pin1: "net.USB_VBUS_RAW",
				pin2: "net.USB_VBUS",
			}}
		/>
		<CG0603MLC_05E
			name="Z1"
			pcbX="-19mm"
			pcbY="16.5mm"
			schX={-24}
			schY={18}
			connections={{
				pin1: "net.USB_CONN_D_NEG",
				pin2: "net.GND",
			}}
		/>
		<CG0603MLC_05E
			name="Z2"
			pcbX="-15mm"
			pcbY="16.5mm"
			schX={-20}
			schY={18}
			connections={{
				pin1: "net.USB_CONN_D_POS",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R4"
			resistance="22"
			footprint="0402"
			pcbX="-11mm"
			pcbY="16.5mm"
			schX={-14}
			schY={14}
			connections={{
				pin1: "net.USB_CONN_D_NEG",
				pin2: "net.USB_D_NEG",
			}}
		/>
		<resistor
			name="R5"
			resistance="22"
			footprint="0402"
			pcbX="-12.5mm"
			pcbY="14.53mm"
			schX={-14}
			schY={10}
			connections={{
				pin1: "net.USB_CONN_D_POS",
				pin2: "net.USB_D_POS",
			}}
		/>

		<ATMEGA16U2_MUR
			name="U2"
			pinLabels={
				{
					pin1: ["XTAL1"],
					pin2: ["XTAL2"],
					pin3: ["GND"],
					pin4: ["VCC"],
					pin5: ["PC2"],
					pin6: ["PD0"],
					pin7: ["PD1"],
					pin8: ["PD2", "USB_RX"],
					pin9: ["PD3", "USB_TX"],
					pin10: ["PD4", "RXLED"],
					pin11: ["PD5", "TXLED"],
					pin12: ["PD6"],
					pin13: ["PD7", "USB_DTR"],
					pin14: ["PB0", "HWB"],
					pin15: ["PB1", "USB_MISO"],
					pin16: ["PB2", "USB_MOSI"],
					pin17: ["PB3", "USB_SCK"],
					pin18: ["PB4"],
					pin19: ["PB5"],
					pin20: ["PB6"],
					pin21: ["PB7"],
					pin22: ["PC7"],
					pin23: ["PC6"],
					pin24: ["RESET"],
					pin25: ["PC5"],
					pin26: ["PC4"],
					pin27: ["UCAP"],
					pin28: ["UGND"],
					pin29: ["D_POS"],
					pin30: ["D_NEG"],
					pin31: ["UVCC"],
					pin32: ["AVCC"],
					pin33: ["EP"],
				} as any
			}
			pcbX="-10.5mm"
			pcbY="10.5mm"
			schX={-6}
			schY={11}
			connections={{
				GND: "net.GND",
				UGND: "net.GND",
				EP: "net.GND",
				VCC: "net.V5",
				AVCC: "net.V5",
				UVCC: "net.USB_UVCC",
				D_POS: "net.USB_D_POS",
				D_NEG: "net.USB_D_NEG",
				XTAL1: "net.USB_XTAL1",
				pin2: "net.USB_XTAL2",
				pin8: "net.USB_RX",
				pin9: "net.USB_TX",
				pin10: "net.RX_LED_K",
				pin11: "net.TX_LED_K",
				pin13: "net.USB_DTR",
				pin15: "net.USB_MISO",
				pin16: "net.USB_MOSI",
				pin17: "net.USB_SCK",
				pin24: "net.USB_RESET",
				UCAP: "net.USB_UCAP",
			}}
		/>
		<X322516MLB4SI
			name="X2"
			pcbX="-12mm"
			pcbY="2.5mm"
			schX={-5}
			schY={18}
			connections={{
				OSC1: "net.USB_XTAL1",
				OSC2: "net.USB_XTAL2",
				GND1: "net.GND",
				GND2: "net.GND",
			}}
		/>
		<capacitor
			name="C7"
			capacitance="22pF"
			footprint="0402"
			pcbX="-16mm"
			pcbY="0mm"
			schX={-11}
			schY={18}
			connections={{
				pin1: "net.USB_XTAL1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C8"
			capacitance="22pF"
			footprint="0402"
			pcbX="-8mm"
			pcbY="2.5mm"
			schX={0}
			schY={18}
			connections={{
				pin1: "net.USB_XTAL2",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C9"
			capacitance="1uF"
			footprint="0603"
			pcbX="-4.5mm"
			pcbY="13.5mm"
			schX={3}
			schY={14}
			connections={{
				pin1: "net.USB_UCAP",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C10"
			capacitance="100nF"
			footprint="0402"
			pcbX="-6mm"
			pcbY="8mm"
			schX={2}
			schY={8}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<BLM21PG221SN1D
			name="FB1"
			pcbX="-8.5mm"
			pcbY="17mm"
			pcbRotation={90}
			schX={6}
			schY={12}
			connections={{
				pin1: "net.V5",
				pin2: "net.USB_UVCC",
			}}
		/>
		<capacitor
			name="C11"
			capacitance="100nF"
			footprint="0402"
			pcbX="-5mm"
			pcbY="16.5mm"
			schX={10}
			schY={12}
			connections={{
				pin1: "net.USB_UVCC",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R6"
			resistance="10k"
			footprint="0402"
			pcbX="-6.5mm"
			pcbY="5mm"
			schX={3}
			schY={4}
			connections={{
				pin1: "net.V5",
				pin2: "net.USB_RESET",
			}}
		/>
		<resistor
			name="R7"
			resistance="1k"
			footprint="0402"
			pcbX="-1mm"
			pcbY="15mm"
			schX={15}
			schY={14}
			connections={{
				pin1: "net.V5",
				pin2: "net.RX_LED_A",
			}}
		/>
		<led
			name="LED_RX"
			color="yellow"
			footprint="0603"
			pcbX="2mm"
			pcbY="15mm"
			schX={19}
			schY={14}
			connections={{
				anode: "net.RX_LED_A",
				cathode: "net.RX_LED_K",
			}}
		/>
		<resistor
			name="R8"
			resistance="1k"
			footprint="0402"
			pcbX="-1mm"
			pcbY="12mm"
			schX={15}
			schY={10}
			connections={{
				pin1: "net.V5",
				pin2: "net.TX_LED_A",
			}}
		/>
		<led
			name="LED_TX"
			color="yellow"
			footprint="0603"
			pcbX="2mm"
			pcbY="12mm"
			schX={19}
			schY={10}
			connections={{
				anode: "net.TX_LED_A",
				cathode: "net.TX_LED_K",
			}}
		/>
		<resistor
			name="R9"
			resistance="1k"
			footprint="0402"
			pcbX="-1mm"
			pcbY="7mm"
			schX={14}
			schY={6}
			connections={{
				pin1: "net.USB_TX",
				pin2: "net.D0",
			}}
		/>
		<resistor
			name="R10"
			resistance="1k"
			footprint="0402"
			pcbX="-1mm"
			pcbY="4.5mm"
			schX={14}
			schY={2}
			connections={{
				pin1: "net.USB_RX",
				pin2: "net.D1",
			}}
		/>

		<DC_050_B250
			name="J_DC"
			pcbX="-27mm"
			pcbY="-8mm"
			pcbRotation={90}
			schX={-30}
			schY={-16}
			connections={{
				// Per the vendor circuit diagram: pin1/pin4 are the shell contact,
				// pin3 is the center pin, and pin2 is the switched contact.
				pin1: "net.GND",
				pin4: "net.GND",
				pin3: "net.DC_IN",
			}}
		/>
		<M7_SMA_
			name="D1"
			pcbX="-15.95mm"
			pcbY="-4.5mm"
			schX={-22}
			schY={-16}
			connections={{
				A: "net.DC_IN",
				K: "net.VIN",
			}}
		/>
		<NCP1117ST50T3G
			name="U3"
			pcbX="-24.5mm"
			pcbY="-20.5mm"
			pcbRotation={180}
			schX={-14}
			schY={-23}
			connections={{
				pin1: "net.GND",
				VIN: "net.VIN",
				VOUT: "net.V5",
				TAB: "net.V5",
			}}
		/>
		<capacitor
			name="C12"
			capacitance="47uF"
			footprint="1206"
			pcbX="-32mm"
			pcbY="-20.5mm"
			schX={-24}
			schY={-23}
			connections={{
				pin1: "net.VIN",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C13"
			capacitance="47uF"
			footprint="1206"
			pcbX="-16.5mm"
			pcbY="-20.5mm"
			schX={-6}
			schY={-23}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>

		<LP2985_33DBVR
			name="U4"
			pcbX="-10mm"
			pcbY="-17mm"
			pcbRotation={180}
			schX={6}
			schY={-23}
			connections={{
				VIN: "net.V5",
				GND: "net.GND",
				VOUT: "net.V3_3",
				BYPASS: "net.V3_3_BYP",
			}}
		/>
		<capacitor
			name="C14"
			capacitance="1uF"
			footprint="0603"
			pcbX="-6mm"
			pcbY="-18mm"
			schX={12}
			schY={-23}
			connections={{
				pin1: "net.V3_3",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C15"
			capacitance="1uF"
			footprint="0603"
			pcbX="-14mm"
			pcbY="-17mm"
			schX={2}
			schY={-23}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C16"
			capacitance="10nF"
			footprint="0402"
			pcbX="-15.5mm"
			pcbY="-14.5mm"
			schX={8}
			schY={-18}
			connections={{
				pin1: "net.V3_3_BYP",
				pin2: "net.GND",
			}}
		/>

		<LMV358IDR
			name="U5"
			pcbX="-10mm"
			pcbY="-12mm"
			pcbRotation={90}
			schX={18}
			schY={-14}
			connections={{
				VCC_POS: "net.V5",
				GND: "net.GND",
				IN1_P: "net.VIN_DIV",
				IN1_N: "net.V3_3",
				OUT1: "net.USB_GATE",
				IN2_P: "net.GND",
				IN2_N: "net.GND",
			}}
		/>
		<FDN340P
			name="Q1"
			pcbX="-15.7mm"
			pcbY="-8.5mm"
			pcbRotation={180}
			schX={10}
			schY={-10}
			connections={{
				G: "net.USB_GATE",
				S: "net.USB_VBUS",
				D: "net.V5",
			}}
		/>
		<resistor
			name="R11"
			resistance="100k"
			footprint="0402"
			pcbX="2mm"
			pcbY="-16mm"
			schX={24}
			schY={-12}
			connections={{
				pin1: "net.VIN",
				pin2: "net.VIN_DIV",
			}}
		/>
		<resistor
			name="R12"
			resistance="100k"
			footprint="0402"
			pcbX="5mm"
			pcbY="-16mm"
			schX={28}
			schY={-12}
			connections={{
				pin1: "net.VIN_DIV",
				pin2: "net.GND",
			}}
		/>
		<resistor
			name="R13"
			resistance="100k"
			footprint="0402"
			pcbX="-4.5mm"
			pcbY="-10mm"
			schX={24}
			schY={-8}
			connections={{
				pin1: "net.USB_GATE",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			name="C17"
			capacitance="100nF"
			footprint="0402"
			pcbX="8.5mm"
			pcbY="-15mm"
			schX={28}
			schY={-16}
			connections={{
				pin1: "net.V5",
				pin2: "net.GND",
			}}
		/>

		<SKRPACE010
			name="SW1"
			pcbX="-2mm"
			pcbY="-2mm"
			schX={20}
			schY={-2}
			connections={{
				pin1: "net.RESET",
				pin2: "net.GND",
				pin3: "net.RESET",
				pin4: "net.GND",
			}}
		/>
	</group>
);
