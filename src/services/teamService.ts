import apiClient from './apiClient';

export const getTeamData = async (teamId: number) => {
    try {
        const response = await apiClient.get(`/teams?id=${teamId}`);
        return response?.data?.response[0];
    } catch (error) {
        console.error('Error fetching team data', error);
        throw error;
    }
};
