import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
const EditModal = ({rowsdata}) => {
  const [openAdd, setOpenAdd] = useState(true);
  const [action, setAction] = React.useState(rowsdata.action_type || "");
  const [name, setName] = useState(rowsdata.name || "");
  const [scheduleid, setScheduleId] = useState(rowsdata.schedule_id || "");
  const [channelactions, setChannelActions] = useState(rowsdata.channel_actions || "");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid red",
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      const formattedchannelactions = channelactions
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
      const response = await axios.put(
        "http://localhost:5000/api/policies",
        {
          name: name,
          action_type: action,
          schedule_id: scheduleid,
          channel_actions: formattedchannelactions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("full response - ", response);
      if (response.status >= 200 && response.status < 300) {
        console.log("Response:", response);
        setAction("");
        setName("");
        setScheduleId("");
        setChannelActions("");
        setOpenAdd(false);
      } else {
        console.log("there is error");
      }
    } catch (error) {
      console.log("error is - ", error);
    }
  };

  return (
    <>
      {openAdd && (
        <Box sx={style}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl sx={{ width: 100 }}>
            <InputLabel id="action-select-label">Action</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={action}
              onChange={handleChange}
              label="action"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"ALLOW"}>Allow</MenuItem>
              <MenuItem value={"BLOCK"}>Block</MenuItem>
              <MenuItem value={"READ-ONLY"}>Read-only</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Schedule Id"
            variant="outlined"
            value={scheduleid}
            onChange={(e) => setScheduleId(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="channel actions"
            variant="outlined"
            value={channelactions}
            onChange={(e) => setChannelActions(e.target.value)}
          />

          <Button onClick={handleSubmit}>Update data</Button>
        </Box>
      )}
    </>
  );
};
export default EditModal;
