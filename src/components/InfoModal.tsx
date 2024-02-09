import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import formatDayTime from "../helpers/FormatTime";

import librosMock from "../assets/mock/librosMock.json";

interface InfoModalProps {
  show: boolean;
  onHide: (shouldHide: boolean) => void;
  data: {
    id: number,
    pais: string,
    autor: string,
    isbn: string,
    name: string,
    nroPaginas: number,
    released: string,
  };
}

const InfoModal: React.FC<InfoModalProps> = ({ show, onHide, data }) => {
  if (!data.isbn) {
    return null;
  }

  // Busca el libro correspondiente en base al código ISBN
  const matchingBook = librosMock.librosMock.find(
    (book) => book.isbn === data.isbn
  );

  if (!matchingBook) {
    return null;
  }

  return (
    <Modal show={show} onHide={() => onHide(true)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-row justify-content-around">
          <div className="">
            <h4>Titulo: {matchingBook.name}</h4>
            <p>Autor: {matchingBook.autor}</p>
            <p>Número de páginas: {matchingBook.nroPaginas}</p>
            <p>País: {matchingBook.pais}</p>
            <p>Código ISBN: {matchingBook.isbn}</p>
            <p>Fecha de publicación: {formatDayTime(matchingBook.released)}</p>
            <p>Sinopsis: {matchingBook.sinopsis}</p>
            <p>Calificación de usuarios: {matchingBook.calificacionUsuarios}</p>
          </div>

          <div className="">
            <img
              src={matchingBook.img}
              style={{ maxWidth: "225px", maxHeight: "350px" }}
              alt={`Portada de ${matchingBook.name}`}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide(true)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
