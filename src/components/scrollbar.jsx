import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";
import "simplebar-react/dist/simplebar.min.css";

export const Scrollbar = styled(SimpleBar)(({ theme }) => ({
  height: "100%",
  maxHeight: "100%",
  overflowX: "hidden",
  backgroundColor: theme.palette.background.paper,
  "& .simplebar-scrollbar::before": {
    backgroundColor: theme.palette.grey[400],
  },
}));
