import { useState } from "react";
import { MyDrawer } from "../../components/Drawer";
import { MessageBox } from "../../components/MessageBox";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledInput } from "../../components/StyledInput";
import { SearchIcon, SettingIcon } from "../../components/UseIcons";
import { Activities } from "./Activities";
import { MessagesList } from "./MessagesList";

export const Messages = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col gap-5">
      <div className=" flex justify-between items-center">
        <h2>Messages</h2>
        <StyledBtn secondary={true}>
          <SettingIcon />
        </StyledBtn>
      </div>
      <StyledInput
        label={
          <div className="flex gap-2.5  opacity-40">
            {" "}
            <SearchIcon /> <p>Search</p>
          </div>
        }
      />
      <div>
        <h3>Activities</h3>
        <Activities />
      </div>{" "}
      <div>
        <h3>Messages</h3>
        <MessagesList />
      </div>{" "}
      <MyDrawer open={open} onClose={toggleDrawer}>
        <MessageBox />
      </MyDrawer>
    </main>
  );
};
