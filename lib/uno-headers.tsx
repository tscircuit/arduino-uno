export const UnoHeaders = () => (
  <group name="headers_section">
    <pinheader
      name="J_PWR"
      doNotPlace
      pinCount={8}
      pinLabels={{
        pin1: "IOREF",
        pin2: "RESET",
        pin3: "3V3",
        pin4: "5V",
        pin5: "GND",
        pin6: "GND2",
        pin7: "VIN",
        pin8: "NC",
      }}
      pcbPinLabels={{
        pin1: "IOREF",
        pin2: "RST",
        pin3: "3V3",
        pin4: "5V",
        pin5: "GND",
        pin6: "GND",
        pin7: "VIN",
        pin8: "NC",
      }}
      showSilkscreenPinLabels
      pcbX="2.54mm"
      pcbY="-24.13mm"
      pcbRotation={0}
      schX={-22}
      schY={-3}
      schFacingDirection="right"
      connections={{
        pin1: "net.V5",
        pin2: "net.RESET",
        pin3: "net.V3_3",
        pin4: "net.V5",
        pin5: "net.GND",
        pin6: "net.GND",
        pin7: "net.VIN",
      }}
    />

    <pinheader
      name="J_A"
      doNotPlace
      pinCount={6}
      pinLabels={{
        pin1: "A0",
        pin2: "A1",
        pin3: "A2",
        pin4: "A3",
        pin5: "A4",
        pin6: "A5",
      }}
      pcbPinLabels={{
        pin1: "A0",
        pin2: "A1",
        pin3: "A2",
        pin4: "A3",
        pin5: "A4",
        pin6: "A5",
      }}
      showSilkscreenPinLabels
      pcbX="22.86mm"
      pcbY="-24.13mm"
      pcbRotation={0}
      schX={17}
      schY={7}
      schFacingDirection="left"
      connections={{
        pin1: "net.A0",
        pin2: "net.A1",
        pin3: "net.A2",
        pin4: "net.A3",
        pin5: "net.A4",
        pin6: "net.A5",
      }}
    />

    <pinheader
      name="J_D0"
      doNotPlace
      pinCount={8}
      pinLabels={{
        pin1: "D0",
        pin2: "D1",
        pin3: "D2",
        pin4: "D3",
        pin5: "D4",
        pin6: "D5",
        pin7: "D6",
        pin8: "D7",
      }}
      pcbPinLabels={{
        pin1: "0",
        pin2: "1",
        pin3: "2",
        pin4: "3",
        pin5: "4",
        pin6: "5",
        pin7: "6",
        pin8: "7",
      }}
      showSilkscreenPinLabels
      pcbX="20.32mm"
      pcbY="24.13mm"
      pcbRotation={0}
      schX={17}
      schY={-3}
      schFacingDirection="left"
      connections={{
        pin1: "net.D0",
        pin2: "net.D1",
        pin3: "net.D2",
        pin4: "net.D3",
        pin5: "net.D4",
        pin6: "net.D5",
        pin7: "net.D6",
        pin8: "net.D7",
      }}
    />

    <pinheader
      name="J_D1"
      doNotPlace
      pinCount={10}
      pinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "AREF",
        pin4: "GND",
        pin5: "D13",
        pin6: "D12",
        pin7: "D11",
        pin8: "D10",
        pin9: "D9",
        pin10: "D8",
      }}
      pcbPinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "AREF",
        pin4: "GND",
        pin5: "13",
        pin6: "12",
        pin7: "11",
        pin8: "10",
        pin9: "9",
        pin10: "8",
      }}
      showSilkscreenPinLabels
      pcbX="-4.06mm"
      pcbY="24.13mm"
      pcbRotation={0}
      schX={17}
      schY={-13}
      schFacingDirection="left"
      connections={{
        pin1: "net.A5",
        pin2: "net.A4",
        pin3: "net.AREF",
        pin4: "net.GND",
        pin5: "net.D13",
        pin6: "net.D12",
        pin7: "net.D11",
        pin8: "net.D10",
        pin9: "net.D9",
        pin10: "net.D8",
      }}
    />

    <pinheader
      name="J_ICSP"
      doNotPlace
      pinCount={6}
      doubleRow
      pinLabels={{
        pin1: "MISO",
        pin2: "5V",
        pin3: "SCK",
        pin4: "MOSI",
        pin5: "RESET",
        pin6: "GND",
      }}
      pcbPinLabels={{
        pin1: "MISO",
        pin2: "5V",
        pin3: "SCK",
        pin4: "MOSI",
        pin5: "RST",
        pin6: "GND",
      }}
      showSilkscreenPinLabels
      pcbX="30.61mm"
      pcbY="1.27mm"
      pcbRotation={90}
      schX={-2}
      schY={-13}
      schFacingDirection="up"
      connections={{
        pin1: "net.D12",
        pin2: "net.V5",
        pin3: "net.D13",
        pin4: "net.D11",
        pin5: "net.RESET",
        pin6: "net.GND",
      }}
    />

    <hole name="H1" pcbX="-31mm" pcbY="20.5mm" diameter="3.2mm" />
    <hole name="H2" pcbX="31mm" pcbY="19.5mm" diameter="3.2mm" />
    <hole name="H3" pcbX="31mm" pcbY="-22mm" diameter="3.2mm" />
    <hole name="H4" pcbX="-18.5mm" pcbY="-22.5mm" diameter="3.2mm" />
  </group>
)
