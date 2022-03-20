import React from "react";
import { Navbar } from "@components";
import DocsMenu from "@components/docsMenu/docsMenu.component";
import { BackTop, Col, Divider, Layout, Typography } from "antd";

import { documentation } from "@documentation";
import CodeExample from "@components/codeExample/codeExaple.component";
import { ArrowUpOutlined } from "@ant-design/icons";
const baseUrl = "https://localhost.com";

export default function Docs() {
  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          <Layout.Sider>
            <DocsMenu documentation={documentation} />
          </Layout.Sider>
          <Layout.Content style={{ padding: "0 50px", marginTop: "50px" }}>
            <Typography.Title level={1} style={{ color: "whitesmoke" }}>
              Documentação da API
            </Typography.Title>
            <Typography.Text>
              Este projeto tem como propósito facilitar o teste de sistemas que
              utilizem dados reais .
            </Typography.Text>
            {documentation.map((routes) => {
              return (
                <>
                  <Col span={12} style={{ marginLeft: 24 }}>
                    <Typography.Title
                      id={routes.title}
                      level={1}
                      style={{ color: "whitesmoke" }}
                    >
                      {routes.title}
                    </Typography.Title>
                    <Typography.Paragraph code copyable>
                      {baseUrl + routes.route}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      {routes.description}
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      <CodeExample data={routes.example} />
                    </Typography.Paragraph>
                    {routes.params.map((route) => {
                      return (
                        <>
                          <Typography.Title
                            level={3}
                            style={{ color: "whitesmoke" }}
                            id={route.name}
                          >
                            {route.name}
                          </Typography.Title>
                          <Typography.Paragraph code>
                            {route.param}
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            {route.description}
                          </Typography.Paragraph>
                          <Typography.Title
                            level={4}
                            style={{ color: "whitesmoke" }}
                          >
                            Opções
                          </Typography.Title>
                          <Typography.Paragraph>
                            {route.options.map((option) => {
                              return (
                                <>
                                  <Typography.Title
                                    level={5}
                                    style={{ color: "whitesmoke" }}
                                  >
                                    {option.name}
                                  </Typography.Title>
                                  <Typography.Text>
                                    {option.description}
                                  </Typography.Text>
                                </>
                              );
                            })}
                          </Typography.Paragraph>

                          <CodeExample data={route.response} />
                        </>
                      );
                    })}
                  </Col>
                  <Divider style={{ borderTop: "1px solid white" }} />
                </>
              );
            })}
          </Layout.Content>
        </Layout>
      </Layout>
      <BackTop>
        <ArrowUpOutlined
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#8A5DDA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        />
      </BackTop>
    </>
  );
}
