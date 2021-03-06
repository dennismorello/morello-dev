import {
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Layout from "@/components/Layout/Layout.component";
import LinkButton from "@/components/LinkButton/LinkButton.component";
import ObliqueBackground from "@/components/ObliqueBackground/ObliqueBackground.component";
import Snowfall from "@/components/Snowfall/Snowfall.component";
import UserPicture from "@/components/UserPicture/UserPicture.component";
import { getGitconnectedProfile } from "@/services/gitconnected";

const HomePage = ({ user }) => {
  const { name, picture, summary } = user;

  const flakesCount = useBreakpointValue([2 ** 7, null, 2 ** 8, null, 2 ** 9]);

  return (
    <>
      <Snowfall flakesCount={flakesCount} />

      <Layout py={0} hasNavbar={false}>
        <NextSeo title="Home" />

        <Flex
          as="section"
          align="center"
          justify="center"
          minH="100vh"
          py={[16, null, 24]}
        >
          <ObliqueBackground
            bgColor="blue.300"
            display={["none", null, "block"]}
          />

          <Stack
            direction={["column", null, "row"]}
            align="center"
            spacing={16}
            zIndex={10}
          >
            <UserPicture src={picture} alt={name} flexShrink={0} />

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
                <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="black"
                  lineHeight="100%"
                >
                  I am <chakra.span color="blue.200">{name}</chakra.span>
                </Heading>
              </Stack>

              <Stack>
                {summary.split(". ").map((sentence, index, sentences) => (
                  <Text key={index}>
                    {sentence}
                    {index < sentences.length - 1 ? "." : ""}
                  </Text>
                ))}
              </Stack>
              <LinkButton
                colorScheme="blue"
                href="/about"
                size="lg"
                rightIcon="&rarr;"
              >
                More about me
              </LinkButton>
            </Stack>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const profile = await getGitconnectedProfile(
      process.env.GITCONNECTED_USERNAME
    );

    return {
      props: {
        user: profile.basics,
      },
      revalidate: 86400,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default HomePage;
