"use client";
import blogData from "@/app/data/blogs";
import BlogsDetail from "@/app/features/blogDetails";
import OurWorkDetails from "@/app/features/ourWorkDetails";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import React from "react";

function BlogDetail() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);
  const id = Number(params.get("id"));

  const filteredWork = workData.find((ele) => ele.id === id);
  return <div>{/* <BlogsDetail /> */}</div>;
}

export default BlogDetail;
