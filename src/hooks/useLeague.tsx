
import { useState, useEffect } from 'react';
import { getPremierLeagueStandings } from '../services/leagueService';

const useLeague = () => {
  const [leagueData, setLeagueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlLeague = async () => {
      try {
        if(!leagueData.length){
            const leagueData = await getPremierLeagueStandings();
            const mappedData: [] = leagueData.map((teamData:any) => {
              return {
                rank: teamData.rank,
                id: teamData.team.id,
                name: teamData.team.name,
                logo: teamData.team.logo,
                played: teamData.all.played,
                win: teamData.all.win,
                lose: teamData.all.lose,
                points: teamData.points,
                form: teamData.form,
              }
            });
            setLeagueData(mappedData);
        }

      } catch (err) {
        // setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlLeague();
  }, []);

  return { leagueData, loading, error };
};

export default useLeague;
