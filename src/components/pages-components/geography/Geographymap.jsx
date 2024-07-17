import { ResponsiveChoropleth } from "@nivo/geo";
import mapdata from "./data/data";

const Geographymap = ({ data }) => {
  return (
    <ResponsiveChoropleth
      data={data}
      features={mapdata.features}
      margin={{ top: 0, right: 0, bottom: 200, left: 0 }}
      colors="greys"
      domain={[0, 1000000]}
      unknownColor="#39447e"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      projectionScale={185}
      borderWidth={0.5}
      borderColor="#fda485"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#000000",
          itemOpacity: 0,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#F680B8",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Geographymap;
