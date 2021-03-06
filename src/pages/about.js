import { chakra, Divider, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Education from "@/components/AboutSections/Education.component";
import PersonalInfo from "@/components/AboutSections/PersonalInfo.component";
import Projects from "@/components/AboutSections/Projects.component";
import Publications from "@/components/AboutSections/Publications.component";
import WorkExperiences from "@/components/AboutSections/WorkExperiences.component";
import Layout from "@/components/Layout/Layout.component";
import SectionWithHeading from "@/components/SectionWithHeading/SectionWithHeading.component";
import { getGitconnectedProfile } from "@/services/gitconnected";

const AboutPage = ({ profile }) => {
  const { basics, education, projects, publications, work } = profile;

  return (
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
        About <chakra.span color="blue.300">me</chakra.span>
      </Heading>

      <SectionWithHeading id="personal-info" title="Personal info">
        <PersonalInfo
          pt={8}
          name={basics.name}
          email={basics.email}
          location={basics.region}
          role={basics.headline}
        />
      </SectionWithHeading>

      <Divider w={["full", null, "md"]} mx="auto" my={16} />

      <SectionWithHeading id="work-experience" title="Work Experience">
        <WorkExperiences jobsList={work} pt={8} />
      </SectionWithHeading>

      <Divider w={["full", null, "md"]} mx="auto" my={16} />

      <SectionWithHeading id="projects" title="Projects">
        <Projects projectsList={projects} pt={8} />
      </SectionWithHeading>

      <Divider w={["full", null, "md"]} mx="auto" my={16} />

      <SectionWithHeading id="education" title="Education">
        <Education educationList={education} pt={8} />
      </SectionWithHeading>

      <Divider w={["full", null, "md"]} mx="auto" my={16} />

      <SectionWithHeading id="publications" title="Publications">
        <Publications publicationsList={publications} pt={8} />
      </SectionWithHeading>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const profile = await getGitconnectedProfile(
      process.env.GITCONNECTED_USERNAME
    );

    return {
      props: {
        profile,
      },
      revalidate: 86400,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default AboutPage;
