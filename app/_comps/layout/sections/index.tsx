"use client";

import dynamic from "next/dynamic";
import React from "react";
import HomeSection from "./home";
import { useSectionStore } from "@/store/sectionStore";

const About = dynamic(() => import("./about"), {
  ssr: false,
  //   loading: () => <Loading />,
});
const Portfolio = dynamic(() => import("./portfolio"), {
  ssr: false,
  //   loading: () => <Loading />,
});
const Resume = dynamic(() => import("./resume"), {
  ssr: false,
  //   loading: () => <Loading />,
});
const sectionsComps = {
  about: About,
  portfolio: Portfolio,
  resume: Resume,
};
const DefaultHome = () => {
  const { activeSection } = useSectionStore();
  const Comp = sectionsComps[activeSection] || HomeSection;
  return <Comp />;
};

export default DefaultHome;
