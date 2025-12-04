import { useState } from "react";
import { Avatar } from "../../components/Avatar";

export const Activities = () => {
  const [profiles, setProfiles] = useState([
    { name: "Emily", story: false, url: "/assets/girl1.svg" },
    { name: "Anna", story: true, url: "/assets/girl2.svg" },
    { name: "Sophie", story: true, url: "/assets/girl3.svg" },
    { name: "Emily", story: true, url: "/assets/girl1.svg" },
    { name: "Anna", story: true, url: "/assets/girl2.svg" },
    { name: "Sophie", story: true, url: "/assets/girl3.svg" },
    { name: "Emily", story: true, url: "/assets/girl1.svg" },
    { name: "Anna", story: true, url: "/assets/girl2.svg" },
    { name: "Sophie", story: true, url: "/assets/girl3.svg" },
  ]);
  return (
    <div>
      <div className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap px-1">
        {profiles.map((profile, index) => (
          <div key={index} className="h-full flex flex-col justify-between">
            <Avatar path={profile.url} story={profile.story} />
            <p className="text-center text-sm  font-bold">{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
