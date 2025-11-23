import { DislikeIcon, LikeIcon } from "./UseIcons";

export const MatchCard = ({ profile }) => {
  return (
    <div
      //   style={{
      //     backgroundImage: `url(${profile.url})`,
      //   }}
      className="relative  
            rounded-2xl shadow-xl overflow-hidden "
    >
      <img src={profile.url} alt="" />
      <h2 className="absolute text-white bottom-13 left-3.5 z-10 text-lg font-bold">
        {profile.name}
      </h2>
      <div className="absolute flex bottom-0 w-full  bg-black/40 backdrop-blur-md text-white">
        <div className="flex-1 flex justify-center py-4 border-r-white-50 border-r">
          <DislikeIcon  stroke={true}/>
        </div>
        <div className="flex-1 flex justify-center my-4">
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};
