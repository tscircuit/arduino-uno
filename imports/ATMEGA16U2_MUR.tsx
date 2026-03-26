import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["XTAL1"],
  pin2: ["pin2"],
  pin3: ["GND"],
  pin4: ["VCC"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["UCAP"],
  pin28: ["UGND"],
  pin29: ["D_POS"],
  pin30: ["D_NEG"],
  pin31: ["UVCC"],
  pin32: ["AVCC"],
  pin33: ["EP"]
} as const

export const ATMEGA16U2_MUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C507117"
  ]
}}
      manufacturerPartNumber="ATMEGA16U2_MUR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.7500600000000759mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.249934000000053mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.2499359999999342mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.24993599999982052mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.2499339999999393mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.7500599999999622mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="1.7500599999999622mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="1.2499339999999393mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.24993599999982052mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.2499359999999342mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.249934000000053mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.7500600000000759mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="0mm" pcbY="0mm" width="3.7999924mm" height="3.7999924mm" shape="rect" />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.080488599999967}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.080488599999967}]} />
<courtyardoutline outline={[{"x":-3.2472000000001344,"y":3.0440000000000964},{"x":3.043999999999869,"y":3.0440000000000964},{"x":3.043999999999869,"y":-3.0693999999999733},{"x":-3.2472000000001344,"y":-3.0693999999999733},{"x":-3.2472000000001344,"y":3.0440000000000964}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C507117.obj?uuid=8f04bea36b684c6088784cbd78ede88c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C507117.step?uuid=8f04bea36b684c6088784cbd78ede88c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}