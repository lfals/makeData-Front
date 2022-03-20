import { Typography } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeExample(props: any) {
  return (
    <>
      <Typography.Title level={4} style={{ color: "whitesmoke" }}>
        Exemplo
      </Typography.Title>
      <SyntaxHighlighter
        language="json"
        style={dark}
        customStyle={{
          background: "rgba(0,0,0,0.2)",
          padding: 24,
          borderRadius: 16,
        }}
      >
        {props.data &&
          JSON.stringify(props.data)
            .replace(/,/g, ",\n")
            .replace(/{/g, "{\n")
            .replace(/}/g, "\n}")}
      </SyntaxHighlighter>
    </>
  );
}
