import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND"],
  pin5: ["EH1"],
  pin6: ["pin5_alt1"]
} as const

export const BF_90_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C456014"
  ]
}}
      manufacturerPartNumber="BF_90_"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="-1.249933999999996mm" pcbY="0.7249350499999991mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.249933999999996mm" pcbY="0.7249350499999991mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="1.249933999999996mm" pcbY="2.724931049999995mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.249933999999996mm" pcbY="2.724931049999995mm" outerDiameter="1.6999966mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.1163199999999875mm" pcbY="-1.774932949999993mm" outerDiameter="3.5999928mm" holeDiameter="2.3999951999999998mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.116320000000002mm" pcbY="-1.774932949999993mm" outerDiameter="3.5999928mm" holeDiameter="2.3999951999999998mm" shape="circle" />
<silkscreenpath route={[{"x":6.099987800000008,"y":0.2561272500000058},{"x":6.099987800000008,"y":4.225055049999995}]} />
<silkscreenpath route={[{"x":6.099987800000008,"y":-11.974912549999985},{"x":6.099987800000008,"y":-3.805993149999992}]} />
<silkscreenpath route={[{"x":-6.099987799999994,"y":-3.805993149999992},{"x":-6.099987799999994,"y":-11.974912549999985}]} />
<silkscreenpath route={[{"x":-6.099987799999994,"y":4.225055049999995},{"x":-6.099987799999994,"y":0.2561272500000058}]} />
<silkscreenpath route={[{"x":-6.099987799999994,"y":-11.974912549999985},{"x":6.099987800000008,"y":-11.974912549999985}]} />
<silkscreenpath route={[{"x":6.099987800000008,"y":4.225055049999995},{"x":-6.099987799999994,"y":4.225055049999995}]} />
<silkscreenpath route={[{"x":6.099987800000008,"y":4.225055049999995},{"x":6.108950095608833,"y":4.221342745608851},{"x":6.112662400000005,"y":4.212380450000012}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=58dc162521af4c349641dfb9c764ae33&pn=C456014",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -3.8599427499999877, z: -2.774929349999991 },
      }}
      {...props}
    />
  )
}