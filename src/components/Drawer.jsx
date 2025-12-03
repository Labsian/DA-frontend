import Drawer from "@mui/material/Drawer";

export const MyDrawer = ({ children, open, onClose }) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden", // important
        },
      }}
    >
      <div className="p-5 rounded-2xl">{children}</div>
    </Drawer>
  );
};
