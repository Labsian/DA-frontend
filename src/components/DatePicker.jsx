import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledBtn } from './StyledBtn';
import { useState } from 'react';

export const MyDatePicker = ({onSelect,setOpen}) => {
      const [selectedDate, setSelectedDate] = useState(null);

  const handleSave = () => {
    if (onSelect) {
      onSelect(selectedDate); 
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
      value={selectedDate}
       onChange={(newValue) => setSelectedDate(newValue)}
      
        sx={{
            display:"flex",
            flexDirection: "column",
            alignItems:"center",
          "& .MuiPickersDay-root": { fontWeight: 500, borderRadius: "50%", },
          "& .MuiPickersDay-root.Mui-selected": { backgroundColor: "#E94057", color: "white" },
          "& .MuiPickersDay-root:hover": { backgroundColor: "#E9405780" },
          "& .MuiPickersCalendarHeader-label": { fontSize: "1rem", fontWeight: 600, fontSize:"20px", color:"#E94057"},
        }}
      />
      <StyledBtn onClick={()=>{handleSave(); setOpen(false)}} styles={"w-full"} primary={true}>Save</StyledBtn>
    </LocalizationProvider>
  );
};
