import InfoModal from "./InfoModal.tsx";
import Stack from "react-bootstrap/Stack";
import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext.tsx";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

const Tabla = () => {
  const { data } = useContext(MyContext);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedLibro, setSelectedLibro] = useState({});

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Pais",
      accessorKey: "pais",
    },
    {
      header: "Autor",
      accessorKey: "autor",
    },
    {
      header: "Cantida de paginas",
      accessorKey: "nroPaginas",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleSearchClick = (id) => {
    const libro = data[id - 1];
    setSelectedLibro(libro);
    setShowModal(true);
  };

  return (
    <>
      <Stack direction="horizontal" className="mb-3 title-container" gap={2}>
        <h1 className="color-blue ">Libros de Game of Thrones</h1>
        <input
          type="text"
          className="border rounded py-2 px-3 ms-auto"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Filtrar por autor o título..."
        />
      </Stack>

      <div className="table-container">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: "⬆️", desc: "⬇️" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.column.id}>
                    {cell.column.id === "name" ? (
                      <div className="d-flex align-items-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                        {
                          <p
                            className="mb-0 mx-3 "
                            onClick={() => handleSearchClick(row.original.id)}
                            style={{ cursor: "pointer" }}
                          >
                            ( Ver detalles <FcSearch className="mx-1" />)
                          </p>
                        }
                      </div>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center my-4">
          <Button
            variant="outline-light"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            Primera Página
          </Button>
          <Button
            className="mx-2"
            variant="outline-light"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Pagina Anterior
          </Button>
          <div className="mx-2">
            <Button classname="margin" variant="outline-light">
              {table.options.state.pagination.pageIndex + 1}
            </Button>
          </div>
          <Button
            className="mx-2"
            variant="outline-light"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Pagina Siguiente
          </Button>
          <Button
            variant="outline-light"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            Última Página
          </Button>
        </div>
      </div>

      <InfoModal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={selectedLibro}
      />
    </>
  );
};

export default Tabla;
