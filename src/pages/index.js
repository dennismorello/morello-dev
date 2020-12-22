import Head from "next/head";
import Link from "next/link";
import { Button, Flex, Heading, Stack, Text, chakra } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/layout.component";
import LinkButton from "../components/link-button/link-button.component";
import ObliqueBackground from "../components/oblique-background/oblique-background.component";
import UserPicture from "../components/user-picture/user-picture.component";

const HomePage = () => (
  <Layout py={0} hasNavbar={false}>
    <Head>
      <title>Dennis Morello</title>
    </Head>

    <Flex
      as="section"
      align="center"
      justify="center"
      minH="100vh"
      py={[12, null, 24]}
    >
      <ObliqueBackground display={["none", null, "block"]} />

      <Stack
        direction={["column", null, "row"]}
        align="center"
        spacing={16}
        zIndex={10}
      >
        <UserPicture />

        <Stack
          align={["center", null, "start"]}
          justify="center"
          textAlign={["center", null, "left"]}
          maxW="xl"
          spacing={8}
        >
          <Stack spacing={0}>
            <Heading as="h6" size="md">
              Hi there,
            </Heading>
            <Heading as="h1" size="2xl" fontWeight="black">
              I am <chakra.span color="teal.300">Dennis Morello</chakra.span>
            </Heading>
          </Stack>

          <Stack>
            <Text>
              I am an Italian Front-End Engineer focused on crafting clean &amp;
              user‑friendly experiences.
            </Text>
            <Text>
              I love learning new things and staying up-to-date with the latest
              web technologies.
            </Text>
          </Stack>
          <LinkButton href="/about" size="lg" rightIcon="&rarr;">
            More about me
          </LinkButton>
        </Stack>
      </Stack>
    </Flex>
  </Layout>
);

export default HomePage;