import { StyledBtn } from "../../components/StyledBtn";
import { StyledLink } from "../../components/StyledLink";
import {
  ArrowIcon,
  DislikeIcon,
  LikeIcon,
  LocationIcon,
  ReadIcon,
  SendIcon,
  StarIcon,
} from "../../components/UseIcons";

export const Profile = () => {
  return (
    <main className="flex flex-col gap-10">
      <div className="relative">
        <img className="w-full" src="/assets/girl4.svg" alt="" />
        <button
          className="rounded-2xl border border-white text-white bg-white/20 hover:bg-white/40 absolute top-10 left-10 p-2 rotate-180"
        ><ArrowIcon/></button>
        <div className="bg-white w-full rounded-t-[60px] absolute  bottom-0 h-15">
          <div className="flex justify-around items-center absolute w-full bottom-8 z-20">
            <button className="bg-white rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
              <DislikeIcon />
            </button>
            <StyledBtn
              primary={true}
              styles=" rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4"
            >
              <LikeIcon size="42" />
            </StyledBtn>

            <button className="bg-white rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
              <StarIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h2>Jessica Parker, 23</h2>
          <p>Proffesional model</p>
        </div>
        <StyledBtn secondary={true}>
          <SendIcon />
        </StyledBtn>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h3>Location</h3>
          <p>Proffesional model</p>
        </div>
        <StyledBtn
          type="button"
          bgPink={true}
          styles={"bg-[#E9405780] flex items-center gap-1"}
        >
          {" "}
          <LocationIcon />1 km
        </StyledBtn>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h3>About</h3>
          <p>
            My name is Jessica Parker and I enjoy meeting new people and finding
            ways to help them have an uplifting experience. I enjoy reading..
          </p>
          <div className="mt-1">
            <StyledLink>Read More</StyledLink>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div className="flex flex-col gap-1.5">
          <h3>Interests</h3>

          <div className="flex gap-1.5">
            <StyledBtn mixed>fffff</StyledBtn>
            <StyledBtn commonInterest>
              <div className="flex items-center gap-1">
                <ReadIcon />
                fffff
              </div>
            </StyledBtn>
          </div>
        </div>
      </div>
      <div className="px-10 gap-1 flex flex-col">
        <div className="flex justify-between w-full items-center">
          <h3>Gallary</h3>
          <StyledLink to={"gallary"}>See More</StyledLink>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="/assets/photo (6).svg" className="rounded-xl w-full" />
          <img src="/assets/photo (2).svg" className="rounded-xl w-full" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <img src="/assets/photo (3).svg" className="rounded-xl w-full" />
          <img src="/assets/photo (4).svg" className="rounded-xl w-full" />
          <img src="/assets/photo (5).svg" className="rounded-xl w-full" />
        </div>
        <div>
          <div className="flex space-between"></div>
        </div>
      </div>
    </main>
  );
};
