import { useState, useEffect } from 'react';
import { getPlTeamsNames } from '../services/teamsService';

const usePlTeamsNames = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlTeamsNames = async () => {
      try {
        const data = await getPlTeamsNames();
        const mappedData: [] = data.map((teamData:any) => {
          return {
            id: teamData.team.id,
            name: teamData.team.name,
            logo: teamData.team.logo,
            venue: teamData.venue,
          }
        }).sort((a: any, b: any) => a.name.localeCompare(b.name));
        debugger;
        setTeams(mappedData);
      } catch (err: any) {
        // setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlTeamsNames();
  }, []);

  return { teams, loading, error };
};

export default usePlTeamsNames;
