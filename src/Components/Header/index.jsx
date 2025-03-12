import React, { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Sharedrawer from "./sharedrawer";
import { theme } from "antd";
const { Title } = Typography;
const items = [
  {
    label: <HomeOutlined />,
    key: "home",
  },
  {
    label: "Men",
    // key: "MenSubMenu",
    children: [
      {
        label: "Men's Shirts",
        key: "mens-shirts",
      },
      {
        label: "Men's Shoes",
        key: "mens-shoes",
      },
      {
        label: "Men's Watches",
        key: "mens-watches",
      },
    ],
  },
  {
    label: "Women",
    // key: "WomenSubMenu",
    children: [
      {
        label: "Women's Dresses",
        key: "womens-dresses",
      },
      {
        label: "Women's Shoes",
        key: "womens-shoes",
      },
      {
        label: "Women's Watches",
        key: "womens-watches",
      },
      {
        label: "Women's Bags",
        key: "womens-bags",
      },
      {
        label: "Women's Jewellery",
        key: "womens-jewellery",
      },
    ],
  },
  {
    label: "Fragrances",
    key: "fragrances",
  },
];

const HeaderComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const { token } = theme.useToken();
  const containerStyle = {
    position: "relative",
    height: 200,
    padding: 48,
    overflow: "hidden",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate(); //newly added
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.key}`); //newly added
  };
  return (
    <div className="appHeader">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Title level={6}>Monika's Store</Title>
      <div>
        <Sharedrawer />
      </div>
    </div>
  );
};
export default HeaderComponent;
