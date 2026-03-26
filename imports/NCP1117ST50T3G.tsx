import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["VOUT"],
  pin3: ["VIN"],
  pin4: ["TAB"]
} as const

export const NCP1117ST50T3G = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C17314"
  ]
}}
      manufacturerPartNumber="NCP1117ST50T3G"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="2.857499999999959mm" pcbY="-2.2999699999999166mm" width="2.4649938000000002mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.857499999999959mm" pcbY="0mm" width="2.4649938000000002mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.857499999999959mm" pcbY="2.2999700000000303mm" width="2.4649938000000002mm" height="1.0500106mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.8575000000000728mm" pcbY="0mm" width="2.4649938000000002mm" height="3.5399979999999998mm" shape="rect" />
<silkscreenpath route={[{"x":-1.3963904000000866,"y":-3.4012124000000767},{"x":-1.3963904000000866,"y":3.4012124000000767},{"x":1.396390399999973,"y":3.4012124000000767},{"x":1.396390399999973,"y":-3.4012124000000767},{"x":-1.3963904000000866,"y":-3.4012124000000767}]} />
<courtyardoutline outline={[{"x":-4.339400000000069,"y":3.653599999999983},{"x":4.720399999999927,"y":3.653599999999983},{"x":4.720399999999927,"y":-3.6535999999998694},{"x":-4.339400000000069,"y":-3.6535999999998694},{"x":-4.339400000000069,"y":3.653599999999983}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C17314.obj?uuid=e80246a9471445bfb635be848806a22e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C17314.step?uuid=e80246a9471445bfb635be848806a22e",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.049394 },
      }}
      {...props}
    />
  )
}