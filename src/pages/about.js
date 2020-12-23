import { NextSeo } from "next-seo";
import { Divider, Flex, Heading, VStack, chakra } from "@chakra-ui/react";

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
      size="2xl"
      fontWeight="black"
      textAlign={["left", null, "center"]}
      pos={["sticky", null, "relative"]}
      top={[0, null, undefined]}
      bg={["gray.800", null, undefined]}
      zIndex={["sticky", null, undefined]}
      py={[2, null, undefined]}
      mb={[10, null, 20]}
      mt={[-2, null, undefined]}
    >
      About <chakra.span color="teal.300">me</chakra.span>
    </Heading>

    <SectionWithHeading id="personal-info" title="Personal info">
      <VStack align="stretch" justify="center">
        <PersonalInfo py={8} />
        <Flex justifyContent={["center", null, "flex-start"]}>
          <LinkButton
            href="https://standardresume.co/r/0i2cNF8K6UgXj3gOPANwj"
            rel="noopener"
            target="_blank"
          >
            Link to my Resume
          </LinkButton>
        </Flex>
      </VStack>
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading id="work-experience" title="Work Experience">
      <WorkExperiences pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading id="education" title="Education">
      <Education pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading id="projects" title="Projects">
      <Projects pt={8} />
    </SectionWithHeading>

    <Divider w={["full", null, "md"]} mx="auto" my={16} />

    <SectionWithHeading id="publications" title="Publications">
      <Publications pt={8} />
    </SectionWithHeading>
  </Layout>
);

export default AboutPage;
