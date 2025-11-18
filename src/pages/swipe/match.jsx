import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../components/StyledBtn";
import { LikeIcon } from "../../components/UseIcons";

export const Match = () => {
    const navigate= useNavigate()
  return (
    <main className="flex flex-col items-center gap-6 mt-6 ">
      <div className="relative w-[300px]  h-[400px]">
        {/* Card 1 */}
        <div className="absolute top-0 right-0">
          <div className="relative">
            <img src="assets/boy.svg" alt="" className="block w-40 h-[240px]" />

            <button className="absolute -top-3 left-3 bg-white text-[#E94057] rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-3 z-10">
              <LikeIcon size="24" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute bottom-0 left-0">
          <div className="relative">
            <img
              src="assets/girl1.svg"
              alt=""
              className="block w-40 h-[240px]"
            />

            <button className="absolute -bottom-3 right-3 bg-white text-[#E94057] rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-3 z-10">
              <LikeIcon size="24" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-[#E94057]">It's a match!</h1>
        <p>Start a conversation now with each other</p>
      </div>
      <div className="flex flex-col gap-3 items-center w-full">
        <StyledBtn styles={"w-full"} primary={true}>Say hello</StyledBtn>
        <StyledBtn styles={"w-full"} onClick={()=>navigate("/swipe")} bgPink={true}>Keep swiping</StyledBtn>
      </div>
    </main>
  );
};
