import React from "react";
import Image from "next/image";

function Images({ loading = "eager", ...rest }) {
  return <Image {...rest} loading={loading} />;
}

export default Images;
