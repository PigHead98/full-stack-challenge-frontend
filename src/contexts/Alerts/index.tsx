import React from "react";
import { positions, Provider, transitions } from "react-alert";
import AlertTemplate from "../../components/template-alert";
import { ILayoutProps } from "../../share/interface";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const AlertProvider: React.FC<ILayoutProps> = ({ children }) => (
  <Provider template={AlertTemplate} {...options}>
    {children}
  </Provider>
);

export default AlertProvider;
