import apiClient from "./apiClient";

const premierLeagueId = 39;

export const getPlTeamsNames = async () => {
  try {
    const response = await apiClient.get(
      `/teams?league=${premierLeagueId}&season=2023`
    );
    if(response?.data?.errors.length){
      throw Error(JSON.stringify(response?.data?.errors))
    }
    return response?.data?.response;
  } catch (error) {
    console.error("Error fetching teams", error);
    throw error;
  }
};
