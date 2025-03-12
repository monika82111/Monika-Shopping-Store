import React from "react";
import HeaderComponent from "./Components/Header/index.jsX";
import FooterComponent from "./Components/Footer/index.jsx";
// import MenShirtPage from "./Components/Content/MenShirtPage";
import Product from "./Components/Content/Product";
// import MenShoes from "./Components/Content/MenShoes.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Apidata from "./Apidata";
const App = () => (
  <div className="App">
    <Router>
      <HeaderComponent />
      <Routes>
  {/* <Route path="/apidata" element={<Apidata />} /> */}
        <Route path = "/:category" element = {<Product/>} />
      </Routes>
      <FooterComponent />
    </Router>
  </div>
);
export default App;






// import { useState } from "react";
// import Grid2 from "@mui/material/Grid2";
// import {
//   TextField,
//   Button,
//   Typography,
//   CircularProgress,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import React from "react";

// const networkChannelsList = ["Email", "FTP", "HTTP/S", "Chat", "Plaintext"];
// const endpointChannelsList = [
//   "Apps",
//   "RemovableDrives",
//   "LocalDrives",
//   "Directories",
//   "LAN",
//   "Bluetooth",
// ];

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     actionType: "",
//     networkChannels: {},
//     endpointChannels: {},
//   });

//   // Initialize dynamic fields
//   const initializeChannels = (channels) => {
//     return channels.reduce((acc, channel) => {
//       acc[channel] = { action: "", included: "", excluded: "" };
//       return acc;
//     }, {});
//   };

//   useState(() => {
//     setFormData((prev) => ({
//       ...prev,
//       networkChannels: initializeChannels(networkChannelsList),
//       endpointChannels: initializeChannels(endpointChannelsList),
//     }));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const keys = name.split(".");

//     setFormData((prev) => {
//       if (keys.length === 1) {
//         return { ...prev, [name]: value };
//       }
//       return {
//         ...prev,
//         [keys[0]]: {
//           ...prev[keys[0]],
//           [keys[1]]: {
//             ...prev[keys[0]][keys[1]],
//             [keys[2]]: value,
//           },
//         },
//       };
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   const processInput = (input) => {
//   //     return input
//   //       .split(",")
//   //       .map((item) => item.trim())
//   //       .filter((item) => item !== "");
//   //   };

//   //   const formatChannels = (channels) => {
//   //     return Object.entries(channels).reduce((acc, [key, value]) => {
//   //       acc[key] = {
//   //         action: value.action,
//   //         included: processInput(value.included),
//   //         excluded: processInput(value.excluded),
//   //       };
//   //       return acc;
//   //     }, {});
//   //   };

//   //   const payload = {
//   //     name: formData.name,
//   //     description: formData.description,
//   //     action_type: formData.actionType,
//   //     schedule_id: "527913ce-66b2-452c-9a38-2c548ff3977d",
//   //     channel_actions: {
//   //       network_channels: formatChannels(formData.networkChannels),
//   //       endpoint_channels: formatChannels(formData.endpointChannels),
//   //     },
//   //   };

//   //   console.log("Request Body:", payload);
//   //   setLoading(false);
//   //   setFormData({
//   //         name: "",
//   //         description: "",
//   //         actionType: "",
//   //         schedule_id: "", // Assuming this is a fixed ID
//   //         networkChannels: {
//   //           emailAction: "",
//   //           included: "",
//   //           excluded: "",
//   //         },
//   //         endpointChannels: {
//   //           appsAction: "",
//   //           included: "",
//   //           excluded: "",
//   //         },
//   //       });
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const processInput = (input) => {
//       return input
//         .split(",")
//         .map((item) => item.trim())
//         .filter((item) => item !== "");
//     };

//     const formatChannels = (channels) => {
//       return Object.entries(channels).reduce((acc, [key, value]) => {
//         acc[key] = {
//           action: value.action,
//           included: processInput(value.included),
//           excluded: processInput(value.excluded),
//         };
//         return acc;
//       }, {});
//     };

//     const payload = {
//       name: formData.name,
//       description: formData.description,
//       action_type: formData.actionType,
//       schedule_id: "527913ce-66b2-452c-9a38-2c548ff3977d",
//       channel_actions: {
//         network_channels: formatChannels(formData.networkChannels),
//         endpoint_channels: formatChannels(formData.endpointChannels),
//       },
//     };

//     console.log("Request Body:", payload);

//     try {
//       const response = await fetch("http://localhost:5000/api/policies", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Response:", data);
//       alert("Policy created successfully!");

//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         description: "",
//         actionType: "",
//         networkChannels: {},
//         endpointChannels: {},
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit policy.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid2 container spacing={2}>
//           <Grid2 item xs={4}>
//             <TextField
//               label="Name"
//               fullWidth
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               variant="outlined"
//               size="small"
//             />
//           </Grid2>
//           <Grid2 item xs={4}>
//             <TextField
//               label="Description"
//               fullWidth
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               variant="outlined"
//               size="small"
//             />
//           </Grid2>
//           <Grid2 item xs={4}>
//             <FormControl fullWidth required variant="outlined" size="small">
//               <InputLabel>Action Type</InputLabel>
//               <Select
//                 name="actionType"
//                 value={formData.actionType}
//                 onChange={handleChange}
//                 label="Action Type"
//               >
//                 <MenuItem value="Block">Block</MenuItem>
//                 <MenuItem value="Alert">Alert</MenuItem>
//                 <MenuItem value="Quarantine">Quarantine</MenuItem>
//                 <MenuItem value="Encrypt">Encrypt</MenuItem>
//                 <MenuItem value="Log">Log</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid2>

//           {networkChannelsList.map((channel) => (
//             <Grid2 container size={12} key={channel}>

//               <Grid2 item size={4}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Action</InputLabel>
//                   <Select
//                     name={`networkChannels.${channel}.action`}
//                     value={formData.networkChannels[channel]?.action || ""}
//                     onChange={handleChange}
//                   >
//                     <MenuItem value="Allow">Allow</MenuItem>
//                     <MenuItem value="Block">Block</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid2>
//               <Grid2 item size={4}>
//                 <TextField
//                   label="Included"
//                   fullWidth
//                   name={`networkChannels.${channel}.included`}
//                   value={formData.networkChannels[channel]?.included || ""}
//                   onChange={handleChange}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid2>
//               <Grid2 item size={4}>
//                 <TextField
//                   label="Excluded"
//                   fullWidth
//                   name={`networkChannels.${channel}.excluded`}
//                   value={formData.networkChannels[channel]?.excluded || ""}
//                   onChange={handleChange}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid2>
//             </Grid2>
//           ))}

//           {endpointChannelsList.map((channel) => (
//             <Grid2 container size={12} key={channel}>
//               <Grid2 item size={4}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Action</InputLabel>
//                   <Select
//                     name={`endpointChannels.${channel}.action`}
//                     value={formData.endpointChannels[channel]?.action || ""}
//                     onChange={handleChange}
//                   >
//                     <MenuItem value="Allow">Allow</MenuItem>
//                     <MenuItem value="Block">Block</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid2>
//               <Grid2 item size={4}>
//                 <TextField
//                   label="Included"
//                   fullWidth
//                   name={`endpointChannels.${channel}.included`}
//                   value={formData.endpointChannels[channel]?.included || ""}
//                   onChange={handleChange}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid2>
//               <Grid2 item size={4}>
//                 <TextField
//                   label="Excluded"
//                   fullWidth
//                   name={`endpointChannels.${channel}.excluded`}
//                   value={formData.endpointChannels[channel]?.excluded || ""}
//                   onChange={handleChange}
//                   variant="outlined"
//                   size="small"
//                 />
//               </Grid2>
//             </Grid2>
//           ))}

//           <Grid2 item xs={12}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               disabled={loading}
//               size="small"
//             >
//               {loading ? <CircularProgress size={24} /> : "Add Action"}
//             </Button>
//           </Grid2>
//         </Grid2>
//       </form>
//     </div>
//   );
// }

// export default App;



