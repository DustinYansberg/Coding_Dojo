import React from "react";
import { Button } from "@mui/material";

export default (props) => {
  const { successCallback } = props;
  return <Button onClick={successCallback}>Delete</Button>;
};
