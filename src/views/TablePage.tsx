import React from "react";
import Loader from "../components/loader/Loader";
import useLeague from "../hooks/useLeague";
import LeagueTable from "../components/table/LeagueTable";
import "./styles/Page.css";

export const Table: React.FC = () => {
  const { leagueData: leagueData, loading, error } = useLeague();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="page-wrapper">
      <LeagueTable leagueData={leagueData} />
    </div>
  );
};
