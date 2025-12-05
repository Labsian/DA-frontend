import { Avatar } from "./Avatar";
import { Scrollbar } from "./scrollbar";
import { StyledBtn } from "./StyledBtn";
import { MoreIcon } from "./UseIcons";

export const MessageBox = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex gap-2 w-full p-2 ">
        <Avatar size={"66px"} path="/assets/girl1.svg" />
        <div className="flex  justify-between  w-full">
          <div className="flex flex-col justify-center pb-2">
            <h3 className="font-bold">mitra</h3>
            <p className="opacity-40">online</p>
          </div>
          <StyledBtn styles={"py-0"} secondary={true}>
            <MoreIcon />
          </StyledBtn>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-2.5">
        <div className="flex-1 h-px bg-black opacity-20" />
        <span>Today</span>
        <div className="flex-1 h-px bg-black opacity-20" />
      </div>
      <Scrollbar sx={{ height: "calc(100vh - 360px)" }}></Scrollbar>
    </main>
  );
};
