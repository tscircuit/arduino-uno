import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin1_alt1"]
} as const

export const DC_050_B250 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C720583"
  ]
}}
      manufacturerPartNumber="DC_050_B250"
      footprint={<footprint>
        <hole pcbX="1.2501880000000938mm" pcbY="0mm" diameter="1.7999964mm" />
<hole pcbX="-3.249930000000063mm" pcbY="0mm" diameter="1.5999967999999998mm" />
<smtpad portHints={["pin1"]} pcbX="-3.249930000000063mm" pcbY="5.734050000000025mm" width="2.6999945999999997mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="3.249930000000063mm" pcbY="5.734050000000025mm" width="2.6999945999999997mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-3.249930000000063mm" pcbY="-5.734050000000025mm" width="2.6999945999999997mm" height="3.1999935999999995mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.949956000000043mm" pcbY="-5.734050000000025mm" width="2.6999945999999997mm" height="3.1999935999999995mm" shape="rect" />
<silkscreenpath route={[{"x":-1.6687799999999697,"y":-4.44500000000005},{"x":1.36893299999997,"y":-4.44500000000005}]} />
<silkscreenpath route={[{"x":4.831054599999902,"y":4.572000000000003},{"x":5.083022600000049,"y":4.572000000000003},{"x":5.083022600000049,"y":-0.759002799999962},{"x":5.086019799999917,"y":-0.7619999999999436},{"x":6.450025199999914,"y":-0.7619999999999436},{"x":6.450025199999914,"y":-4.440986800000019}]} />
<silkscreenpath route={[{"x":4.831206999999949,"y":-4.44500000000005},{"x":6.450025199999914,"y":-4.44500000000005}]} />
<silkscreenpath route={[{"x":1.36893299999997,"y":4.572000000000003},{"x":1.668754599999943,"y":4.572000000000003}]} />
<silkscreenpath route={[{"x":-5.936665799999901,"y":4.572000000000003},{"x":-5.936665799999901,"y":-4.44500000000005}]} />
<silkscreenpath route={[{"x":-4.8310546000001295,"y":4.572000000000003},{"x":-8.249919999999975,"y":4.572000000000003}]} />
<silkscreenpath route={[{"x":1.36893299999997,"y":4.572000000000003},{"x":-1.6687546000000566,"y":4.572000000000003}]} />
<silkscreenpath route={[{"x":-8.249919999999975,"y":4.572000000000003},{"x":-8.249919999999975,"y":-4.44500000000005},{"x":-4.831080000000043,"y":-4.44500000000005}]} />
<courtyardoutline outline={[{"x":-8.60532999999998,"y":7.571550000000116},{"x":6.804469999999924,"y":7.571550000000116},{"x":6.804469999999924,"y":-7.584249999999997},{"x":-8.60532999999998,"y":-7.584249999999997},{"x":-8.60532999999998,"y":7.571550000000116}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C720583.obj?uuid=27d9d5d4a4cc47858590cc9c27217355",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C720583.step?uuid=27d9d5d4a4cc47858590cc9c27217355",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.8490076000000287, y: 0, z: -0.0000024000000000690136 },
      }}
      {...props}
    />
  )
}