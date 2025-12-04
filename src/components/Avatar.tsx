export const Avatar = ({
  size = "66px",
  path,
  story
}: {
  size?: string;
  path: string;
  story?: boolean;
}) => {
  return (
    <div className={`border-box rounded-full w-fit flex justify-center items-center overflow-hidden ${story?' border-2 border-(--clr-primary-1)':'border-2 border-white'}`}>
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-gray-200 flex justify-center items-center overflow-hidden border-2 border-white"
      >
        <img
          style={{ width: size, height: size, objectFit: "cover" }}
          src={path}
          alt=""
        />
      </div>
    </div>
  );
};
