import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    margin: "auto",
    height: "100%",
  },
  logo: {
    maxWidth: "60px",
    cursor: "pointer",
  },
});

const LeagueTable: React.FC<any> = ({ leagueData: data }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToTeamProfilePage = (teamId: number) => {
    navigate("/team-profile/" + teamId);
  };

  return (
      <TableContainer component={Paper} className={classes.table}>
      {/* {JSON.stringify(data, null, 2)} */}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Logo</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Played</TableCell>
              <TableCell align="left">Win</TableCell>
              <TableCell align="left">Lose</TableCell>
              <TableCell align="left">Points</TableCell>
              <TableCell align="left">Form</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.rank}</TableCell>
                <TableCell align="left">
                  {/* <Link to="/">Home</Link> */}
                  <img
                    src={row.logo}
                    alt="Logo"
                    className={classes.logo}
                    onClick={() => goToTeamProfilePage(row.id)}
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.played}</TableCell>
                <TableCell align="left">{row.win}</TableCell>
                <TableCell align="left">{row.lose}</TableCell>
                <TableCell align="left">{row.points}</TableCell>
                <TableCell align="left">{row.form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default LeagueTable;
