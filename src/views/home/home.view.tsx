import { Typography, Layout, Row, Col, Badge } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

import "./style.less";

import { Footer, Navbar } from "@components";
import { response } from "@helpers";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  const apiUrlToShow = 0;

  return (
    <>
      <Layout>
        <Navbar />
        <Content style={{ padding: "0 50px", marginTop: "50px" }}>
          <Row justify="center">
            <Col span={4}>
              <Badge count={"v0.1.0"} color="purple">
                <Title style={{ color: "whitesmoke", textAlign: "center" }}>
                  Make Data API
                </Title>
              </Badge>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <Paragraph
                style={{
                  borderRadius: 16,
                  fontSize: 16,
                  color: "whitesmoke",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  padding: "22px 0",
                  width: "100%",
                }}
                copyable={{
                  tooltips: "Copiar URL",
                }}
              >
                {response[apiUrlToShow].url}
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <SyntaxHighlighter
                language="json"
                style={dark}
                customStyle={{
                  background: "rgba(0,0,0,0.2)",
                  padding: 24,
                  borderRadius: 16,
                }}
              >
                {response[apiUrlToShow].response}
              </SyntaxHighlighter>
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}
