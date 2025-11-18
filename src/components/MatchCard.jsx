export const MatchCard = ({ profile }) => {
  return (
    <div
      //   style={{
      //     backgroundImage: `url(${profile.url})`,
      //   }}
      className="relative  
           bg-cover bg-center rounded-2xl shadow-xl overflow-hidden w-[50%] h-auto"
    >
      <img src={profile.url} alt="" />
      <div className="absolute bottom-0 w-full p-4 bg-black/40 backdrop-blur-md text-white">
        <h2 className="text-lg font-bold">{profile.name}</h2>
      </div>
    </div>
  );
};
