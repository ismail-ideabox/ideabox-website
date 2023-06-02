"use client";
import workData from "@/app/data/work";
import OurWorkDetails from "@/app/features/ourWorkDetails";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function WorkDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  const pathname = usePathname();

  const workTitle = pathname.split("/").pop().replaceAll("-", " ");

  const filteredWork = workData.find(
    (ele) =>
      ele.projectName.toLocaleLowerCase() === workTitle.toLocaleLowerCase()
  );
  if (!filteredWork) {
    redirect("/404");
  }

  return (
    <>
      <head>
        <title>{filteredWork.projectName + " | Ideabox"}</title>
        <meta name="description" content={filteredWork.metaDescription} />
        <link rel="canonical" href={filteredWork.canonicalTag} />
      </head>
      <div>
        <OurWorkDetails filteredWork={filteredWork} />
      </div>
    </>
  );
}

export default WorkDetail;
