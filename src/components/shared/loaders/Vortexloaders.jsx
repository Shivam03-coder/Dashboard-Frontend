import { Vortex } from "react-loader-spinner";

const Vortexloaders = () => {
  return (
    <div className="h-full w-full Row-center">
      <Vortex
        visible={true}
        height="130"
        width="130"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Vortexloaders;
