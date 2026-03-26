import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const CG0603MLC_05E = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C840634"
  ]
}}
      manufacturerPartNumber="CG0603MLC_05E"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.7533639999998059mm" pcbY="0mm" width="0.8064754mm" height="0.8640064000000001mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.7533639999999195mm" pcbY="0mm" width="0.8064754mm" height="0.8640064000000001mm" shape="rect" />
<silkscreenpath route={[{"x":0.42621199999996406,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":0.6606031999999686},{"x":0.42621199999996406,"y":0.6606031999999686}]} />
<silkscreenpath route={[{"x":-0.42621200000007775,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":0.6606031999999686},{"x":-0.42621200000007775,"y":0.6606031999999686}]} />
<courtyardoutline outline={[{"x":-1.647000000000162,"y":0.9103999999999814},{"x":1.6216000000000577,"y":0.9103999999999814},{"x":1.6216000000000577,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":0.9103999999999814}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C840634.obj?uuid=6bd5cd867e9542ebae21caaf5d2d4c4d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C840634.step?uuid=6bd5cd867e9542ebae21caaf5d2d4c4d",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.004999999999999977, y: 0, z: -0.01 },
      }}
      {...props}
    />
  )
}