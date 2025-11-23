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
    <main className="flex flex-col justify-between h-full max-w-screen overflow-hidden pb-2.5">
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
          <div className="flex-1 h-px bg-black opacity-40" />
          <span>Today</span>
          <div className="flex-1 h-px bg-black opacity-40" />
        </div>

        <Scrollbar sx={{ height: "485px" }}>
          <Grid
            className={"w-full "}
            container
            spacing={2}
            justifyItems={"center"}
            alignItems={"center"}
          >
            {profiles.map((profile, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                key={index}
                justifyItems={"center"}
              >
                <MatchCard profile={profile} />
              </Grid>
            ))}
          </Grid>
        </Scrollbar>
      </div>
    </main>
  );
}
