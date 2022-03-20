import { Affix, Layout, Menu } from "antd";
import { GithubFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Affix>
        <Layout.Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item icon={<GithubFilled />}>
              <a href={"github"} target="_blank">
                MakeData API
              </a>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/docs"}>Docs</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
      </Affix>
    </>
  );
}
