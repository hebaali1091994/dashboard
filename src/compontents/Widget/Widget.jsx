import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import React from "./widget.scss";

function Widget({ type }) {
  let data;
   let amount=100;
 let diff=20
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        moneny: false,
        link: "See all Users",
        icon: <PersonOutline className="icon"  style={{color:"crimson"   ,backgroundColor:"rgba(255,0,0,0.2)"}}/>,
      };
      break;
      case "order":
        data = {
          title: "ORDERS",
          moneny: false,
          link: "See all Orders",
          icon: <ShoppingCartOutlined className="icon"  style={{color:"goldenrod"   ,backgroundColor:"rgba(218,165,32,0.2)"}}/>,
        };
        break;
        case "blance":
        data = {
          title: "BLANCES",
          moneny: true,
          link: "See details",
          icon: <AccountBalanceWalletOutlined  className="icon"  style={{color:"puprle"   ,backgroundColor:"rgba(128,0,128,0.2)"}}/>,
        };
        break;
        case "earning":
        data = {
          title: "ُEARNING",
          moneny: true,
          link: "See all earning",
          icon: <MonetizationOnOutlined className="icon"  style={{color:"green"   ,backgroundColor:"rgba(0,128,0,0.2)"}}/>,
        };
        break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.moneny&&"$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="persentage positive">
          <KeyboardArrowUpOutlined />
          {diff}
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
