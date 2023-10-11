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

export default function AuthorList(props) {
  const { authors, removeFromDom } = props;
  const navigate = useNavigate();

  const routeToUpdateView = (id) => {
    navigate(`/authors/${id}/edit`);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 365 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Author Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {author.name}
                </TableCell>
                <TableCell>
                  <UpdateButton
                    successCallback={() => routeToUpdateView(author._id)}
                  />
                  <DeleteButton
                    successCallback={() => removeFromDom(author._id)}
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
