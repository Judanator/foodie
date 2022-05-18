/* eslint-disable react/default-props-match-prop-types */
import * as React from "react";

import "./text.scss"

interface TitleProps {
  title: any;
  component?: any;
  className?: string;
}

const Title = ({ title, component, className }: TitleProps) => {
  const Component = component;
  return (
    <Component as={component} className={className}> {title} </Component>
  )
}

Title.defaultProps = {
  title: "",
  component: "h1",
  style: {}
}

export default Title;