// Utils
import { fetchJson } from "@/utils/fetch";

const { GITCONNECTED_PORTFOLIO_API_URL } = process.env;

export const getGitconnectedProfile = async (username) => {
  const gitconnectedProfileApiUrl = `${GITCONNECTED_PORTFOLIO_API_URL}/${username}`;

  return fetchJson(gitconnectedProfileApiUrl);
};
