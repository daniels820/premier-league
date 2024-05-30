import { useState, useEffect } from "react";
import { getTeamData } from "../services/teamService";

interface Team {
  id: number;
  name: string;
  founded: string;
  logo: string;
  venue: {
    address: string;
    capacity: number;
    city: string;
    id: number;
    image: string;
    name: string;
  };
}

const useTeamData = (teamId: number) => {
  const [teamData, setTeamData] = useState<Team>({
    id: 0,
    name: "",
    founded: "",
    logo: "",
    venue: {
      address: "",
      capacity: 0,
      city: "",
      id: 0,
      image: "",
      name: "",
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await getTeamData(teamId);
        const teamData: Team = { ...data.team, venue: data.venue };
        console.log({ teamData });
        setTeamData(teamData);
      } catch (err) {
        // setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return { teamData, loading, error };
};

export default useTeamData;
