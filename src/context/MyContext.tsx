import React, { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import PropTypes from "prop-types";
import axios from "axios";

interface BookData {
  id: number;
  pais: string;
  autor: string;
  isbn: string;
  name: string;
  nroPaginas: number;
  released: string;
}

interface MyContextProps {
  data: BookData[];
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [data, setData] = useState<BookData[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://anapioficeandfire.com/api/books?page=${pageNumber}&pageSize=15`
        );

        // Transforma los datos obtenidos
        const transformedData = response.data.map(
          (
            { country, isbn, numberOfPages, name, released, authors }: any,
            index: number
          ) => ({
            id: index + 1,
            pais: country,
            autor: authors[0],
            isbn: isbn,
            name: name,
            nroPaginas: numberOfPages,
            released: released,
          })
        );

        setData(transformedData);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

  const contextValue = useMemo(
    () => ({ data, setPageNumber, loading }),
    [data, setPageNumber, loading]
  );

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
