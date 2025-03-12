import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Select } from "antd";
import {
  Layout,
  Flex,
  Typography,
  Divider,
  Rate,
  Button,
  Badge,
  Card,
  Space,
  Image,
  Col,
  Row,
} from "antd";
const style = {
  marginLeft:"10px",
};


const { Content, Footer } = Layout;
const { Text, Paragraph } = Typography;

const Product = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(""); // State to store sorting option

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  //   useEffect(() => {
  //     if(category)
  //     {
  //     fetch(`https://dummyjson.com/products/category/${category}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.products.length > 0) {
  //           setProducts(data.products);
  //         }
  //         console.log("data.product" , data.products);
  //       })
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }
  // }, [category]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          !category || category.toLowerCase() === "home"
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products/category/${category}`;

        const res = await fetch(url);
        const data = await res.json();

        setProducts(data.products || []); // Fallback to an empty array if no products are found
        let sortedProducts = data.products || []; // Fallback to empty array

        // Default sorting: Alphabetically A-Z
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));

        setProducts(sortedProducts); // Store sorted products in state
        console.log("Fetched products:", data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const enterLoading = (index) => {
    setLoadingIndex(index);
    setTimeout(() => setLoadingIndex(null), 3000);
  };

  // Sorting function
  const handleSortChange = (value) => {
    setSortOption(value);
    let sortedProducts = [...products];

    switch (value) {
      case "1": // Alphabetically A-Z
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "2": // Alphabetically Z-A
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "3": // Price: Low to High
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "4": // Price: High to Low
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row">
          <div style={style}>
            <Typography>View Items Sorted By:</Typography>
          </div>
        </Col>
        <Col className="gutter-row">
          <div>
            <Select
              style={{
                width: 200,
              }}
              placeholder=""
              onChange={handleSortChange}
              options={[
                { value: "1", label: "Alphabetically A-Z" },
                { value: "2", label: "Alphabetically Z-A" },
                { value: "3", label: "Price: Low to High" },
                { value: "4", label: "Price: High to Low" },
              ]}
            />
          </div>
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        style={{
          width: "100%", // Takes the full viewport width
          // border: "2px solid yellow",
          margin: "0", // Removes unwanted margins
          padding: "0", // Removes unwanted paddings
        }}
      >
        {products.map((product, index) => {
          const originalPrice = (
            product.price /
            (1 - product.discountPercentage / 100)
          ).toFixed(2);

          return (
            <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={8}>
              <div
                style={{
                  background: "#f5f5f5",
                  width: "100%",
                  // border: "2px solid black",
                  borderRadius: 2,
                  marginTop: "20px",
                }}
              >
                <Flex gap="middle" wrap style={{ width: "100%" }}>
                  <Layout style={{ width: "100%" }}>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%" }}
                    >
                      <Badge.Ribbon
                        text={`${product.discountPercentage}% Off`}
                        color="pink"
                      >
                        <Card size="small" style={{ width: "100%" }}>
                          <strong>{product.title}</strong>
                        </Card>
                      </Badge.Ribbon>
                    </Space>
                    <Content style={{ width: "100%", textAlign: "center" }}>
                      <Image
                        width="100%"
                        src={product.thumbnail}
                        style={{ maxWidth: "200px" }}
                      />
                      <Flex gap={16} vertical style={{ width: "100%" }}>
                        <Text strong>
                          Price: ${product.price}
                          <Text
                            type="danger"
                            delete
                            style={{ marginLeft: "5px" }}
                          >
                            ${originalPrice}
                          </Text>
                        </Text>
                        <Paragraph
                          ellipsis={{
                            rows: 2,
                            expandable: "collapsible",
                            expanded: expandedIndex === index,
                            onExpand: () => handleExpand(index),
                          }}
                          copyable
                        >
                          {product.description}
                        </Paragraph>
                      </Flex>
                    </Content>
                    <Footer style={{ width: "100%", textAlign: "center" }}>
                      <Rate allowHalf value={product.rating} />
                      <Divider
                        type="vertical"
                        style={{ borderColor: "#7cb305" }}
                      />
                      <Button
                        type="link"
                        loading={loadingIndex === index}
                        onClick={() => enterLoading(index)}
                      >
                        Add To Cart
                      </Button>
                    </Footer>
                  </Layout>
                </Flex>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Product;
