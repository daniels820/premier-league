import React from "react";
import TeamsTable from "../components/table/TeamsTable";
import usePlTeamsNames from "../hooks/useTeams";
import Loader from "../components/loader/Loader";
import './styles/Page.css';
import useNews from "../hooks/useNews";


export const TeamsPage: React.FC = () => {
  const { teams, loading, error } = usePlTeamsNames();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="page-wrapper">
      <TeamsTable teams={teams} />
    </div>
  );
};

