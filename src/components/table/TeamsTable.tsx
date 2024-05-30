import React from "react";
import Paper from "@material-ui/core/Paper";
import FlipCard from "../flipCard/FlipCard";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    height: "100%",
    margin: "auto",
  },
});

const TeamsTable: React.FC<any> = ({ teams: data }) => {
  const classes = useStyles();

  const cardDataCleanup = (cardData: any) => {
    const { image, id, ...rest } = cardData; // Removing- image, id
    return rest;
  }
  debugger;
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Team Symbol</TableCell>
            <TableCell align="left">Team</TableCell>
            <TableCell align="left">Stadium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell align="center">
                <img src={row.logo} alt="Logo" />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell>
                <FlipCard image={row.venue?.image} cardTitle={row.name} cardData={cardDataCleanup(row.venue)}></FlipCard>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamsTable;
