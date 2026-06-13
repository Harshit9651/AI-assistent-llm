import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <div
      className="
      max-w-3xl
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      p-5
      "
    >

      <Skeleton
        height={15}
        count={1}
        baseColor="#27272a"
        highlightColor="#3f3f46"
      />

      <Skeleton
        className="mt-3"
        height={15}
        count={3}
        baseColor="#27272a"
        highlightColor="#3f3f46"
      />

    </div>
  );
};

export default Loader;