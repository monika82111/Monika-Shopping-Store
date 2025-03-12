// import React, { useEffect } from "react";
// import axios from "axios";
// const Apidata = () => {
// useEffect(()=>{
//     const fetchData = async()=>{
//         try{
//           //---------------axios - http request , automatically json data transformation
//           //use response
//         //   const response = await axios.get("https://dummyjson.com/users");
//         //   console.log(response.data.users[0].firstName);
//         //-----------------------------------using fetch api

// //convert using json()
// //         const response = await fetch("https://dummyjson.com/users");
// //      const data = await response.json();
// //  console.log(data.users);
//         }
//         catch{
//             console.log("error");
//         }
//         finally{
//             console.log("i am inside finally block");
//         }

//     };
//     fetchData();
// } , []);

// useEffect(()=>{
//   const fetchData = async() => {
//     try{
//       const response = await fetch("https://dummyjson.com/posts/add",
//      {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         title:"monika",
//         userId: 5 ,
//       })
//       });
//       if(!response.ok){
//         throw new Error("Something went wrong");
//       }
//       else{
//         const data = await response.json();
//         console.log(data);
//       }
//     }
//     catch{
//  console.log("INSIDE TRY BLOCK");
//     }
//     finally{
//  console.log("INSIDE TRY BLOCK");
//     }
//   }
//   fetchData();
// },[]);

// useEffect(() => {
//   const updatemethod = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/posts/1", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: "I think I should shift to the moon",
//           userId: 5,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error("Not Updated");
//       } else {
//         const data = await response.json();
//         console.log(data);
//       }
//     } catch {
//       console.log("error");
//     } finally {
//       console.log("i am inside finally block");
//     }
//   };
//   updatemethod();
// }, []);

// useEffect(() => {
//   const deletedata = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/posts/1", {
//         method: "DELETE",
//       });
//       if (!response.ok) {
//         throw new Error("not deleted");
//       } else {
//         const data = await response.json();
//         console.log(data);
//       }
//     } catch {
//       console.log(Error);
//     } finally {
//       console.log("inside try block");
//     }
//   };
//   deletedata();
// }, []);

//  useEffect(()=>{
//   const postapidata  = async() =>{
//   try{
//    const response = await axios.post("https://dummyjson.com/posts/add",{
//      title:"monika",
//      userId: 5,
//    });
//  console.log(response.data);
// }
//   catch(error){
//   console.log(error);
//   }
//   finally{
//     console.log("inside finally block");
//   }
//   }
//   postapidata();
//  } ,[])

// useEffect(()=>{
//   const withbearertoken = async()=>{
//     try{
//       const token = "your token";
//      const response = await axios.get("https://dummyjson.com/users" , {
//       headers:{
//         Authorization: `Bearer ${token}`,
//       }
//      });
//     }
//     catch(error){
//     console.log("error");
//     }
//     finally{
//       console.log("inside finally block");
//     }
//   }

// } , []);

//   return(
//     <div>
//       <h1>api data extraction</h1>
//     </div>
//   );
// };
// export default Apidata;

// import React, { useState, useEffect } from "react";
// import { Button, Divider, Radio, Table } from "antd";
// import { EditOutlined } from "@ant-design/icons";
// import axios from "axios";
// const columns = [
//   {
//     title: "FirstName",
//     dataIndex: "firstName",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Gender",
//     dataIndex: "gender",
//   },
// ];

// // rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User",
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const [selectionType, setSelectionType] = useState("checkbox");
//   useEffect(() => {
//     const usersdata = async () => {
//       try {
//         const response = await axios.get("https://dummyjson.com/users");
//         console.log(response.data.users);
//       setData(response.data.users);
//       } catch (error) {
//         console.log("error");
//       } finally {
//         console.log("inside finally block");
//       }
//     };
//     usersdata();
//   }, []);
//   return (
//     <div>
//       <Radio.Group
//         onChange={(e) => setSelectionType(e.target.value)}
//         value={selectionType}
//       >
//         <Radio value="checkbox">Checkbox</Radio>
//         <Radio value="radio">radio</Radio>
//       </Radio.Group>
//       <Divider />
//       <Button type="primary">
//         <EditOutlined />
//       </Button>
//       <Table
//         rowSelection={{
//           type: selectionType,
//           ...rowSelection,
//         }}
//         columns={columns}
//         dataSource={data}
//       />
//     </div>
//   );
// };
// export default App;

//q1 - 1. Counter App
// 👉 Implement a simple counter with Increment, Decrement, and Reset buttons.
// Use useState to manage the count.
// Buttons should update the counter accordingly.

// import React from "react";
// import { useState } from "react";
// const Apidata = () =>{
//   const [count , setCount] = useState(0);
//   return (
//     <>
//       <button type="primary" onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <button type="primary" onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>
//       <button type="primary" onClick={() => setCount(0)}>
//         Reset
//       </button>
//       <p>Value of Count is {count} </p>
//     </>
//   );
// }
// export default Apidata;

// import React from "react";
// import { useState } from "react";
// const Apidata = () => {
//   const [status, setStatus] = useState(false);
//   return (
//     <>
//       <p>Toggle Button</p>
//       <button type="primary" onClick={() => setStatus(!status)}>
//         toggle
//       </button>
//       <p>{status? "ON" : "OFF"}</p>
//     </>
//   );
// };
// export default Apidata;

//user can add task , delete task

// import React from "react";
// import { useState } from "react";
// import { Button } from "antd";
// import { Input } from "antd";
// const Apidata = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const addition = () => {
//     if (task.trim() !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//     console.log(tasks);
//   };
//   const changestask = (e) => {
//     setTask(e.target.value);
//   };
//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };
//   return (
//     <>
//       <Input placeholder="Enter task" value={task} onChange={changestask} />
//       <Button type="primary" onClick={addition}>
//         Add Task
//       </Button>
//       <br />
//       <h3>Tasks:</h3>
//       {tasks.map((t, index) => (
//         <li key={index}>
//           {t}
//           <Button type="primary" onClick={() => deleteTask(index)}>
//             Delete Task
//           </Button>
//         </li>
//       ))}
//     </>
//   );
// };
// export default Apidata;

//-----------------------to do list
// import React from "react";
// import { useState } from "react";
// import { Input , Button } from "antd";
// const Apidata = ()=>{
//   const [tasks , setTasks] = useState([]);
//   const [task , setTask] = useState("");
//   const addTask = () =>{
//   setTasks([...tasks, task]);
//   setTask("");
//   console.log("addtask called");
//   }
//   const deleteTask = (index)=>{
//    setTasks(tasks.filter((_,i) => i !== index));
//   }
// return(
//   <>
//   <h1>TO DO LIST - ADD & DELETE</h1>
// <br/>
// <Input placeholder="Add task" value = {task} onChange={(e)=>setTask(e.target.value)} ></Input>
// {task}
// <Button type = "primary"
// onClick={addTask}
// >Add Task</Button>

// <p>Display Task</p>
// {tasks.map((t , index)=>(
//   <li key={index}>
//     {t}
//     <Button type="primary" onClick={()=>deleteTask(index)}>Delete
//     </Button>
//   </li>
// ))}
//   </>
// )
// }
// export default Apidata;

//show hide password
// import React from "react";
// import { useState } from "react";
// import { Input } from "antd";
// import { Button } from "@mui/material";
// const Apidata = () => {
//   const [password, setPassword] = useState("");
//   const [isVisible , setIsVisible] = useState(false);
//   return (
//     <>
//       <h1>Password</h1>
//       <Input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type = {isVisible? "text" :"password"}
//       ></Input>
//       <Button type = "primary" onClick={()=> setIsVisible(!isVisible)}>{isVisible? "Hide":"Show"}</Button>

//     </>
//   );
// };
// export default Apidata;

//dynamic list filter
// import React from "react";
// import { useState } from "react";
// import { Input } from "antd";
// import { Button } from "@mui/material";
// const Apidata = () => {
//   const [task , setTask] = useState("");
//   const [tasks , setTasks] = useState([]);
//   const [searchquery , setSearchQuery] = useState("");
//   const addTask = ()=>{
//     if(task.trim()!=""){
//     setTasks([...tasks , task]);
//     setTask("");
//     }
//   }
//   const filteredTasks = tasks.filter((t)=>t.toLowerCase().includes(searchquery.toLowerCase()));
//   return (
//     <>
//       <h1>List Filter</h1>
//       <h1>Tasks</h1>
//       <Input
//       placeholder="add"
//       value = {task}
//       onChange={(e)=>setTask(e.target.value)}></Input>
//       <Button type = "primary" onClick={addTask}>AddTask</Button>
//       {tasks.map((t , index)=>(
//         <li key={index}>
//           {t}
//         </li>
//       ))}
//       <p>Search</p>
//       <Input placeholder="search"
//        value={searchquery}
//        onChange={(e)=>setSearchQuery(e.target.value)}
//       ></Input>
//       <Button type ="primary">Search</Button>
//       {filteredTasks.length > 0 ?(
//         filteredTasks.map((t , index)=>(
//           <li key = {index}>
//             {t}
//           </li>
//         ))
//       ):
//       (
//         <p>No task found</p>
//       )
//     }

//     </>
//   );
// };
// export default Apidata;

//timer

// import React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "antd";
// const Apidata = () => {
//   const [time, setTime] = useState(0);
//   const [isrunning, setIsRunning] = useState(false);
//   // useEffect(()=>{
//   //   let interval;
//   //   if(isrunning){
//   //     interval = setInterval(()=>{
//   //       setTime((prevTime)=>prevTime +1)
//   //     } , 1000);

//   //   }else{
//   //     clearInterval(interval);
//   //   }
//   //   return () =>clearInterval(interval);
//   // } , [isrunning])

//   // useEffect(
//   //  setInterval(() => {
//   //   console.log("hello , world");
//   //  } , 2000) , [])
//   useEffect(() => {
//     if (!isrunning) {
//       return;
//     }
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [isrunning]);

//   return (
//     <>
//       <h2>Timer :- {time}</h2>
//       <Button type="primary" onClick={() => setIsRunning(true)}>
//         Start
//       </Button>
//       <br />
//       <Button type="primary" onClick={() => setIsRunning(false)}>
//         Stop
//       </Button>
//     </>
//   );
// };
// export default Apidata;

//9 que - accordion component

// import React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// const Apidata = () => {
//   const [open , setOpen] = useState(true);
//   return (
//     <>
//       <h2>ACCORDION</h2>
//       <br></br>
//       <Button onClick={()=>setOpen(!open)}>
//         <DownOutlined />
//       </Button>
//       {open ? <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni,
//         fugit aliquam mollitia dignissimos vero nobis voluptas perspiciatis quo
//         id placeat sed blanditiis dolorum pariatur eum at ipsam quibusdam. Quis.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni,
//         fugit aliquam mollitia dignissimos vero nobis voluptas perspiciatis quo
//         id placeat sed blanditiis dolorum pariatur eum at ipsam quibusdam. Quis.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni,
//         fugit aliquam mollitia dignissimos vero nobis voluptas perspiciatis quo
//         id placeat sed blanditiis dolorum pariatur eum at ipsam quibusdam. Quis.
//       </p> : "" }

//     </>
//   );
// };
// export default Apidata;

//---------------------------------

// import React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { Input } from "@mui/material";
// const Apidata = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData({ name, email, password });
//     console.log({ name }, { email }, { password });
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <h2>Form handling</h2>
//       <br></br>
//       <form onSubmit={handleSubmit}>
//         <p>Name:-</p>
//         <Input
//           placeholder="enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         ></Input>
//         <p>Email:-</p>
//         <Input
//           placeholder="enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         ></Input>
//         <p>Password:-</p>
//         <Input
//           value={password}
//           placeholder="enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         ></Input>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </form>

//       {submittedData && (
//         <p>
//           Name:-{submittedData.name}, Email:-{submittedData.email}, Password:-
//           {submittedData.password}
//         </p>
//       )}
//     </>
//   );
// };
// export default Apidata;

//to do apps with local storage

// Requirements:
// Store tasks in useState.
// Save tasks in localStorage so they remain after a page refresh.
// import React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { Input } from "@mui/material";
// const Apidata = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const AddTask = () => {
//     setTasks([...tasks, task]);
//     setTask("");
//   };
//   useEffect(() => {
//     const storedtask = JSON.parse(localStorage.getItem("tasks"));
//     console.log(storedtask);
//     if (storedtask) {
//       setTasks(storedtask);
//     }
//     console.log("tasks are as - ", tasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   return (
//     <>
//       <p>Tasks</p>
//       <Input value={task} onChange={(e) => setTask(e.target.value)}></Input>
//       <button type="primary" onClick={AddTask}>
//         Add
//       </button>

//       <p>display tasks</p>
//       {tasks.map((key, index) => (
//         <li key={index}>
//           <p>{key}</p>
//         </li>
//       ))}
//     </>
//   );
// };
// export default Apidata;

//debounce search

// import React from "react";
// import { useState } from "react";
// import { Input } from "@mui/material";
// import { Button } from "antd";
// const Apidata = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [searchTask, setSearchTask] = useState("");

//   const handleAdd = () => {
//     if (task.trim() != "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   const filteredTasks = tasks.filter((t) =>
//     t.toLowerCase().includes(searchTask.toLowerCase())
//   );
//   return (
//     <>
//       <h1>search - tasks</h1>
//       <br />
//       <Input
//         placeholder="enter task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       ></Input>
//       <Button onClick={handleAdd}>Add task</Button>

//       <h5>display tasks</h5>
//       {tasks.map((key, index) => (
//         <li key={index}>{key}</li>
//       ))}
// <br/>
//       <h5>SEARCH tasks</h5>
//       <Input
//         placeholder="search task"
//         value={searchTask}
//         onChange={(e) => setSearchTask(e.target.value)}
//       ></Input>

//       {filteredTasks.map((key, index) => (
//         <li key={index}>{key}</li>
//       ))}
//     </>
//   );
// };
// export default Apidata;

// import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "antd";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "./Form";
import EditIcon from "@mui/icons-material/Edit";
import EditModal from "./EditModal";
import { Edit } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  border: "2px solid red",
  bgcolor: "pink",
  boxShadow: 24,
  p: 4,
};



const columns = [
  { field: "name", headerName: "name" },
  { field: "action_type", headerName: "Action Type" },
  { field: "schedule_id", headerName: "Schedule Id" },
  { field: "channel_actions", headerName: "Channel Actions", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [openAdd , setOpenAdd] = useState(false);
  const [openEdit , setOpenEdit] = useState(false);
  const [selected , setSelected] = useState();
  const [selectedrowId , setSelectedRowId] = useState(null);
  const [selectedrowData , setSelectedRowData] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/policies");
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

const rows = data.map((key , index)=>{
  return{
    id: index+1 ,
    ...key
  }
})

 const handleOpenAdd = () =>{setOpenAdd(true);}
 const handleCloseAdd = () =>{setOpenAdd(false);}

 const handleOpenEdit =() =>{setOpenEdit(true);}
 const handleCloseEdit = ()=>{setOpenEdit(false)};

 const handleRowSelection = (selectionModel)=>{
  if(selectionModel.length > 0 ){
    const selectedId = selectionModel[0];
    setSelectedRowId(selectedId);
    const selectedRow = rows.find((row)=>row.id === selectedId);
    setSelectedRowData(selectedRow);
    console.log("selected Row Data - " , selectedRow);
  }
 
 }
  return (
    <Paper>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <Form />
      </Modal>

      <Button onClick={handleOpenAdd}>
        <AddIcon />
      </Button>

      <Button onClick={handleOpenEdit}>
        <EditIcon />
      </Button>

      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box sx={style}>
          <EditModal  rowsdata = {selectedrowData}/>
        </Box>
      </Modal>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 2, m: 2 }}
        onRowSelectionModelChange={handleRowSelection}
      />
    </Paper>
  );
}
