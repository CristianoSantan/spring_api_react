import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutorService from "../../services/AutorService";

export default function Index() {
  const [autores, setAutores] = useState([]);

  const getAllAutores = () => {
    AutorService.getAllAutores()
      .then((response) => {
        setAutores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllAutores();
  }, []);

  const deleteAutor = (autorId) => {
    AutorService.deleteAutor(autorId)
      .then((response) => {
        getAllAutores();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Autor</h1>
      </header>
      <div className="container p-5">
        <Link to="/Autores-Create" className="btn btn-primary mb-2">
          Criar Autor
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {autores.map((autor) => (
                <tr key={autor.id_autor}>
                  <td>{autor.id_autor}</td>
                  <td>{autor.nome}</td>
                  <td>{autor.sobrenome}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Autores-Update/${autor.id_autor}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAutor(autor.id_autor)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
