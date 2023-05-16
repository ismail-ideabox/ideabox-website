"use client";
import workData from "@/app/data/work";
import OurWorkDetails from "@/app/features/ourWorkDetails";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

function WorkDetail() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const id = Number(params.get("id"));


  const filteredWork = workData.find((ele) => ele.id === id);
  return (
    <>
      <div>
        <OurWorkDetails filteredWork={filteredWork} />
      </div>
    </>
  );
}

export default WorkDetail;
