// src/components/TeamInfo.tsx
import React, { useEffect, useState } from "react";
import useTeamData from "../hooks/useTeamData";
import "./styles/Page.css";
import "./styles/TeamInfoPage.css";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";


export const TeamInfoPage: React.FC = () => {
  const { teamId } = useParams();
  const { teamData, loading, error } = useTeamData(Number(teamId));

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="team-profile">
        <div className="team-header">
          <img
            src={teamData.logo}
            alt={`${teamData.name} logo`}
            className="teamData-logo"
          />
          <h1>{teamData.name}</h1>
          <p>Since: {teamData.founded}</p>
        </div>
        <div className="venue-stadium">
          <h2>{teamData.venue.name}</h2>
          {/* TODO replace with FlipCard component */}
          <img
            src={teamData.venue.image}
            alt={`${teamData.venue.name}`}
            className="venue-image"
          />
        <div className="venue-info">
          <p>
            <strong>Address:</strong> {teamData.venue.address}
          </p>
          <p>
            <strong>City:</strong> {teamData.venue.city}
          </p>
          <p>
            <strong>Capacity:</strong> {teamData.venue.capacity}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
