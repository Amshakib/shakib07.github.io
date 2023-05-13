import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <h1 className="typeEffect">Hello...</h1>
      <SectionTitle main center style={{ marginTop: "5px" }}>
        I am Abdul Mujeed Shakib
      </SectionTitle>
      <SectionText>
        I am a front end developer.
      </SectionText>
      <Link href="#footer">
        <Button>Contact Me</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
