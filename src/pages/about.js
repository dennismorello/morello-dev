import { NextSeo } from "next-seo";
import { Divider, Heading, VStack, chakra } from "@chakra-ui/react";

// Components
import Education from "../components/education/education.component";
import Layout from "../components/layout/layout.component";
import LinkButton from "../components/link-button/link-button.component";
import PersonalInfo from "../components/personal-info/personal-info.component";
import Projects from "../components/projects/projects.component";
import Publications from "../components/publications/publications.component";
import SectionWithHeading from "../components/section-with-heading/section-with-heading.component";
import WorkExperiences from "../components/work-experiences/work-experiences.component";

const AboutPage = () => (
  <Layout>
    <NextSeo title="About" />

    <Heading
      as="h1"
      mb={[12, null, 20]}
      size="2xl"
      fontWeight="black"
      textAlign={["left", null, "center"]}
    >
      About <chakra.span color="teal.300">me</chakra.span>
    </Heading>

    <SectionWithHeading title="Personal info">
      <VStack align="stretch" justify="center">
        <PersonalInfo py={8} />
        <LinkButton
          href="https://standardresume.co/r/0i2cNF8K6UgXj3gOPANwj"
          rel="noopener"
          target="_blank"
          mx="auto"
        >
          Link to my Resume
        </LinkButton>
      </VStack>
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading title="Work Experience">
      <WorkExperiences pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading title="Education">
      <Education pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading title="Projects">
      <Projects pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading title="Publications">
      <Publications pt={8} />
    </SectionWithHeading>
  </Layout>
);

export default AboutPage;
