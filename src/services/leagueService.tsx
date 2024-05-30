import apiClient from './apiClient';

const premierLeagueId = 39;

  export const getPremierLeagueStandings = async (season: string = '2023') => {
    try {
      const response = await apiClient.get(`/standings`, {
        params: {
          league: premierLeagueId,
          season
        },
      });
      return response?.data?.response[0]?.league.standings[0];
    } catch (error) {
      console.error('Error fetching standings:', error);
      throw error;
    }
  };