import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Form, Row, Table, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface FavFormProps {
  onAddBook?: () => void;
}

const FavForm: React.FC<FavFormProps> = ({ onAddBook }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("El título es requerido"),
      author: Yup.string().required("El autor es requerido"),
      genre: Yup.string().required("El género es requerido"),
      publicationDate: Yup.date().required(
        "La fecha de publicación es requerida"
      ),
    }),
    onSubmit: (values) => {
      const newBook: Book = {
        title: values.title,
        author: values.author,
        genre: values.genre,
        publicationDate: values.publicationDate,
      };

      setBooks([...books, newBook]);

      toast.success("Libro agregado exitosamente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      if (onAddBook) {
        onAddBook();
      }

      formik.resetForm();
    },
  });

  const handleRemoveBook = (index: number) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const clearAllBooks = () => {
    localStorage.clear();
    setBooks([]);
  };

  return (
    <>
      <div className="color-default py-5 container-form">
        <h3 className="text-center">Agregue nuevos libros a la biblioteca</h3>
        <Form onSubmit={formik.handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Título:</Form.Label>
              <Form.Control
                type="text"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Autor:</Form.Label>
              <Form.Control
                type="text"
                id="author"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.author && formik.errors.author ? (
                <div>{formik.errors.author}</div>
              ) : null}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Género:</Form.Label>
              <Form.Control
                type="text"
                id="genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.genre && formik.errors.genre ? (
                <div>{formik.errors.genre}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha de Publicación:</Form.Label>
              <Form.Control
                type="date"
                id="publicationDate"
                name="publicationDate"
                value={formik.values.publicationDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.publicationDate &&
              formik.errors.publicationDate ? (
                <div>{formik.errors.publicationDate}</div>
              ) : null}
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center">
            <button className="border rounded mx-2 mt-3" type="submit">
              Añadir Libro
            </button>
          </div>
        </Form>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Género</th>
              <th>Fecha de Publicación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveBook(index)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ToastContainer />
      </div>
      <div className="d-flex justify-content-end">
        <Button variant="danger" onClick={clearAllBooks}>
          Eliminar Todos los Libros
        </Button>
      </div>
    </>
  );
};

export default FavForm;
