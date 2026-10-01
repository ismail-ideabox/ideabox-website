"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ServicesQueryScroller({ parentRef, servicesRef }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("services")) return;

    const parent = parentRef?.current;
    const services = servicesRef?.current;

    if (!parent || !services) return;

    const serviceRect = services.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    parent.scrollTop += serviceRect.top - parentRect.top;
  }, [searchParams, parentRef, servicesRef]);

  return null;
}
