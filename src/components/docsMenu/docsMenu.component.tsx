import React from "react";
import { Anchor } from "antd";

import { IDocumentations } from "@interfaces/Idocumentation";

export default function DocsMenu(props: IDocumentations) {
  return (
    <Anchor offsetTop={80} style={{ marginTop: "50px" }}>
      {props.documentation.map((routes) => (
        <Anchor.Link href={"#" + routes.title} title={routes.title}>
          {routes.params &&
            routes.params.map((param) => (
              <Anchor.Link
                href={"#" + param.name}
                title={param.name}
              ></Anchor.Link>
            ))}
        </Anchor.Link>
      ))}
    </Anchor>
  );
}
