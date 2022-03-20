import { GithubFilled } from "@ant-design/icons";
import { Layout, Row, Space, Typography } from "antd";
import React from "react";

export default function Footer() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <Typography.Title level={5} style={{ color: "whitesmoke" }}>
        MakeData ©{new Date().getFullYear()}
      </Typography.Title>
      <Row justify="center">
        <Space size={24}>
          <a href={"https://github.com/lfals"} target="_blank">
            <GithubFilled /> /lfals
          </a>
          <a href={"https://github.com/davidOdahcam"} target="_blank">
            <GithubFilled /> /davidOdahcam
          </a>
        </Space>
      </Row>
    </Layout.Footer>
  );
}
