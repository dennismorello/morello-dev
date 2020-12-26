export const fetchJson = async (request) => {
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
