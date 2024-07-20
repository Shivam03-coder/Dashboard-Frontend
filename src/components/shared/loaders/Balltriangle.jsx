import { DNA } from "react-loader-spinner";

const Balltriangle = () => {
  return (
    <div className="h-screen w-full Row-center">
      <DNA
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

export default Balltriangle;
