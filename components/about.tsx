"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
Having earned my degree in <span className="font-medium">Information Technology</span>, my journey led me to embrace my passion for programming. Throughout my university years, I delved into coding and honed my skills in <span className="font-medium">full-stack web development</span>. For me, the thrill lies in solving complex problems, and I take immense satisfaction in cracking the code to a challenging puzzle. My proficiency centers around a core stack encompassing <span className="font-medium">React, .NET, MUi, and MsSQL</span>, with additional familiarity in Spring Boot and Flutter. The excitement of exploring new technologies always keeps me on the lookout for learning opportunities. I am currently actively seeking a <span className="font-medium">full-time position</span> as a software engineer.
</p>
<p>
    <span className="italic">Beyond coding</span>, I find joy in playing video games, watching movies, and spending quality time with my dog. Embracing a continuous learning mindset, I am currently delving into the realms of <span className="font-medium">IoT and Arduino</span>. Additionally, I am cultivating my musical skills by learning to play the guitar.
  </p>
</motion.section>

  );
}
