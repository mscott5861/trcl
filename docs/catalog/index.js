import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: 'Welcome',
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: 'Components',
    pages: [
      {
        path: '/components/button',
        title: 'Button',
        content: pageLoader(() => import('./components/Button.md'))
      },
      {
        path: '/components/input',
        title: 'Input',
        content: pageLoader(() => import('./components/Input.md'))
      }

    ]
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
