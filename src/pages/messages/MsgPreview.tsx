import { Avatar } from "../../components/Avatar";

export const MsgPreview = ({profile}:{profle:{ name: string, story: boolean, url: string }}) => {
  return (
    <div className="flex gap-2 w-full p-2 ">
      <Avatar size={"48px"} path={profile.url} />
      <div className="flex  justify-between  w-full border-b-1 border-b-[#E8E6EA]">
        <div className="flex flex-col justify-between pb-2">
          <p className="font-bold">{profile.name}</p>
          <p>dfdvddv</p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-[12px] text-[#ADAFBB] opacity-20 font-bold">
            fgvdf
          </p>
          <div className="w-4 h-4 bg-(--clr-primary-1) rounded-full text-white flex justify-center items-center pt-1">
            <h4 className="font-bold">1</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
