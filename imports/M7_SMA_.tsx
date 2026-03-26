import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"]
} as const

export const M7_SMA_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7428238"
  ]
}}
      manufacturerPartNumber="M7_SMA_"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.2000209999999925mm" pcbY="0mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.2000209999998788mm" pcbY="0mm" width="1.9999959999999999mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-0.883894600000076,"y":1.4261845999999423},{"x":-0.883894600000076,"y":-1.426235399999996}]} />
<silkscreenpath route={[{"x":-2.596159400000033,"y":1.4261845999999423},{"x":2.596210199999973,"y":1.4261845999999423}]} />
<silkscreenpath route={[{"x":2.593314599999985,"y":-1.1756390000000465},{"x":2.599994800000104,"y":-1.4148561999999174}]} />
<silkscreenpath route={[{"x":2.596210199999973,"y":1.4261845999999423},{"x":2.6028903999999784,"y":1.1869674000000714}]} />
<silkscreenpath route={[{"x":-2.596159400000033,"y":-1.426235399999996},{"x":2.596210199999973,"y":-1.426235399999996}]} />
<courtyardoutline outline={[{"x":-3.4441770000000815,"y":1.7531720000000632},{"x":3.4566229999999223,"y":1.7531720000000632},{"x":3.4566229999999223,"y":-1.7440280000000712},{"x":-3.4441770000000815,"y":-1.7440280000000712},{"x":-3.4441770000000815,"y":1.7531720000000632}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7428238.obj?uuid=c56c1fbc1c1347d88423209783d0ed2f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7428238.step?uuid=c56c1fbc1c1347d88423209783d0ed2f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -1.1 },
      }}
      {...props}
    />
  )
}