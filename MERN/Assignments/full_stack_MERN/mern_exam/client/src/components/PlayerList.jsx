import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { useNavigate } from "react-router-dom";

export default function PlayerList(props) {
  const { players, removeFromDom } = props;
  const navigate = useNavigate();

  const routeToUpdateView = (id) => {
    navigate(`/players/${id}/edit`);
  };
  return (
    <div>
      <TableContainer sx={{ minWidth: 765 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Player Name</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {player.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {player.position}
                </TableCell>
                <TableCell align="right">
                  <UpdateButton
                    successCallback={() => routeToUpdateView(player._id)}
                  />
                  <DeleteButton
                    successCallback={() => removeFromDom(player._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
