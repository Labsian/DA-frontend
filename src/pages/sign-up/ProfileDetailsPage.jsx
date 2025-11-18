import { CalendarIcon, CameraIcon } from "../../components/UseIcons";
import { StyledLink } from "../../components/StyledLink";
import { StyledInput } from "../../components/StyledInput";
import { StyledBtn } from "../../components/StyledBtn";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { MyDrawer } from "../../components/Drawer";
import { MyDatePicker } from "../../components/DatePicker";



export function ProfileDetailsPage() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      fName: null,
      lName: null,
      bDay: null,
      submit: null,
    },
    onSubmit: async (values, helpers) => {},
  });

  return (
    <div className="VerificationApp flex flex-col items-center ">
      <div className="flex justify-between w-full">
        <div></div>
        <StyledLink className="self-end">Skip</StyledLink>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-5 w-full">
        <div className="flex flex-col gap-20 items-center w-full">
          <h1>Profile details</h1>

          <div className="flex flex-col gap-8 w-full">
            <div className="relative w-fit self-center">
              <img src="/assets/photo.svg" alt="df" />
              <StyledBtn
                primary={true}
                styles={
                  "rounded-full border border-[2px] border-white absolute -bottom-2 -right-2"
                }
              >
                <CameraIcon />
              </StyledBtn>
            </div>

            <form className="w-full gap-3 flex flex-col">
              <StyledInput
                formik={formik}
                value={formik.values.fName}
                name="fName"
                label={"First name"}
              />
              <StyledInput
                formik={formik}
                value={formik.values.lName}
                name="lName"
                label={"Last name"}
              />

              <StyledBtn
              type="button"
                onClick={toggleDrawer}
                bgPink={true}
                styles={"bg-[#E9405780] flex items-center gap-3"}
              >
                <CalendarIcon /> Choose birthday date
              </StyledBtn>


              <MyDrawer open={open} onClose={toggleDrawer}>
                <MyDatePicker setOpen={setOpen} onSelect={(date) => {
  console.log("Picked date:", date.format("YYYY-MM-DD")); 
  formik.setFieldValue("bDay", date.format("YYYY-MM-DD")); 
}} />

              </MyDrawer>

              <StyledBtn type={"submit"} primary={true} styles={"mt-10"} className="cursor-pointer">
                Confirm
              </StyledBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
