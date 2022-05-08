import "./new.scss";
import Sidebar from "../../compontents/Sidebar/Sidebar/Sidebar";
import Navbar from "../../compontents/Navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

function New({inputs,title}) {
  const [file,setFile]=useState("")
  console.log(file)
  return (
    <div className="new">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file?URL.createObjectURL(file):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6WblbWY0c7_Hb-B4xI-kIe2Tv2FmQgMbmkpiqKSxG78SHhnw&s"}  alt=""/>
             
      
          </div>
          <div className="right">
            <form>
            <div className="FormInput">
                <label htmlFor="file">
                  Image:
                <DriveFolderUploadOutlined className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
              </div>
              {inputs.map((input)=>(
                <div className="FormInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder="Heba_ali" />
              </div>

              ))}
             
              {/* <div className="FormInput">
                <label>Username Surname</label>
                <input type="text" placeholder="Heba Ali" />
              </div>
              <div className="FormInput">
                <label>Email</label>
                <input type="email" placeholder="heba-ali@gmail.com" />
              </div>
              <div className="FormInput">
                <label>Phone Number</label>
                <input type="text" placeholder="12364488" />
              </div>
              <div className="FormInput">
                <label>Password</label>
                <input type="password" placeholder="*****" />
              </div>
              <div className="FormInput">
                <label>Address</label>
                <input type="text" placeholder="Qena" />
              </div>
              <div className="FormInput">
                <label>Country</label>
                <input type="text" placeholder="Egypt" />
              </div> */}
             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
