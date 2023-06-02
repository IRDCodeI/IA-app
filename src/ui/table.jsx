/* eslint-disable react/prop-types */
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import FileContext from "../context/File/FileContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { OverlayPanel } from "primereact/overlaypanel";
import { MultiSelect } from "primereact/multiselect";
import axios from "axios";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 3.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function TableFile() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [fields, setFields] = useState();
  const [repeated, setRepeated] = useState();
  const [filters, setFilters] = useState(null);
  const [filter, setFilter] = useState(null);

  const { file } = useContext(FileContext);
  const op = useRef(null);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getMetaFile = (file) => {
    axios
      .post(
        "http://127.0.0.1:8000/meta",
        {
          file: {
            index: file.meta.fields,
            data: file.data
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.warn(JSON.parse(res.data))
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (file) {
      getMetaFile(file)
      setData(file.data);
      setFields(file.meta.fields);
    }

    console.warn(filter);
  }, [file]);

  return (
    <>
      <TableContainer
        component={Paper}
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <Table
          sx={{ minWidth: 500 }}
          aria-label="custom pagination table"
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <TableHead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <TableRow>
              {fields &&
                fields.map((field, index) => (
                  <TableCell
                    key={field}
                    align="center"
                    padding="normal"
                    size="small"
                  >
                    <div className="w-full grid grid-cols-6 items-center">
                      <span className="text-center text-sm font-bold col-span-5">
                        {field.replace(/[_]/g, " ")}
                      </span>
                      <div className="justify-self-end static w-fit">
                        {repeated[index] != false ? (
                          <>
                            <IconButton onClick={(e) => op.current.toggle(e)}>
                              <MoreVertIcon />
                            </IconButton>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {repeated[index] != false ? (
                      <OverlayPanel ref={op}>
                        {/* <MultiSelect
                          value={filters}
                          onChange={(e) => setFilters(e.value)}
                          options={filter[index].filters}
                          optionLabel="name"
                          display="chip"
                          placeholder="Select Cities"
                          maxSelectedLabels={3}
                          className="w-full md:w-20rem"
                        /> */}
                      </OverlayPanel>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow
                key={row[0] + 1}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {fields &&
                  fields.map((field, index) => (
                    <TableCell
                      align="center"
                      key={index}
                      component="th"
                      scope="row"
                      size="small"
                      className="w-5"
                    >
                      <div className="w-full">
                        <p className="m-0 w-52 h-fit py-2 truncate inline-block align-middle">
                          {row[field]}
                        </p>
                      </div>
                    </TableCell>
                  ))}
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              {fields && (
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={fields.length}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              )}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
