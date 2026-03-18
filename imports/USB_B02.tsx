import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["GND3"]
} as const

export const USB_B02 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C498174"
  ]
}}
      manufacturerPartNumber="USB_B02"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="1.249934000000053mm" pcbY="1.725060049999911mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.2499339999999393mm" pcbY="1.725060049999911mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.2499339999999393mm" pcbY="-1.4748319500000662mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.249934000000053mm" pcbY="-1.4748319500000662mm" outerDiameter="1.5999967999999998mm" holeDiameter="0.9999979999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-6.020054000000073mm" pcbY="-0.7750619500001221mm" outerDiameter="3.4999930000000004mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.020054000000073mm" pcbY="-0.7750619500001221mm" outerDiameter="3.4999930000000004mm" holeDiameter="2.5000203999999995mm" shape="circle" />
<silkscreenpath route={[{"x":2.286228600000072,"y":3.617385449999915},{"x":3.6832286000001204,"y":2.220385449999867},{"x":3.6832286000001204,"y":-3.3676145499999848},{"x":-3.6827713999999787,"y":-3.3676145499999848},{"x":-3.6827713999999787,"y":2.220385449999867},{"x":-2.2857713999999305,"y":3.617385449999915},{"x":-1.9047713999999587,"y":3.617385449999915}]} />
<silkscreenpath route={[{"x":2.2859745999999177,"y":3.6174108500000557},{"x":-1.9050253999999995,"y":3.6174108500000557}]} />
<silkscreenpath route={[{"x":5.968949199999884,"y":1.2055538499998875},{"x":5.968949199999884,"y":5.713063250000005}]} />
<silkscreenpath route={[{"x":-6.00003879999997,"y":-2.755982549999999},{"x":-6.00003879999997,"y":-5.46293675000004},{"x":5.968949199999884,"y":-5.46293675000004},{"x":5.968949199999884,"y":-2.755423750000091}]} />
<silkscreenpath route={[{"x":-6.00003879999997,"y":5.713063250000005},{"x":-6.00003879999997,"y":1.206112649999909}]} />
<silkscreenpath route={[{"x":-6.00003879999997,"y":5.713063250000005},{"x":5.99993720000009,"y":5.713063250000005}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=43d0a3d6300b4d809995d7822ac8dd4a&pn=C498174",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -0.00005079999993995443, y: -0.07493635000014365, z: -1.7250584500000172 },
      }}
      {...props}
    />
  )
}