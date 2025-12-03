import Grid from "@mui/material/Grid";
import { useState } from "react";
import { MatchCard } from "../../components/MatchCard";
import { Scrollbar } from "../../components/scrollbar";
import { SortIcon } from "../../components/UseIcons";
import { StyledBtn } from "./../../components/StyledBtn";

export function Matches() {
  const [profiles, setProfiles] = useState([
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
  ]);

  return (
    <main className="flex flex-col justify-between max-w-screen overflow-hidden pb-2.5" style={{height:"calc(100vh - 60px)"}}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className=" flex justify-between items-center">
            <h2>Discover</h2>
            <StyledBtn secondary={true}>
              <SortIcon />
            </StyledBtn>
          </div>
          <p>This is a list of people who have liked you and your matches.</p>
        </div>
        <div className="flex w-full justify-center items-center gap-2.5">
          <div className="flex-1 bg-black opacity-40" />
          <span>Today</span>
          <div className="flex-1 bg-black opacity-40" />
        </div>

        <Scrollbar sx={{ height: "calc(100vh - 136px)" }}>
          <Grid
            // className={"w-fit"}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            justifySelf={"center"}
          >
            {profiles.map((profile, index) => (
              <Grid item xs={6} key={index} justifyItems={"center"}>
                <MatchCard profile={profile} />
              </Grid>
            ))}
          </Grid>
        </Scrollbar>
      </div>
    </main>
  );
}
