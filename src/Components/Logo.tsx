import * as React from "react";

interface LogoProps {
  imgLink: string;
  alt?: string;
}

export default function Logo({ imgLink, alt }: LogoProps) {
  return (
    <img src={imgLink} alt={alt} />
  )
}
