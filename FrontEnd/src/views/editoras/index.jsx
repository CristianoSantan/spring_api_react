import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditoraService from "../../services/EditoraService";

export default function Index() {
  const [editoras, setEditoras] = useState([]);

  const getAllEditoras = () => {
    EditoraService.getAllEditoras()
      .then((response) => {
        setEditoras(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllEditoras();
  }, []);

  const deleteEditora = (editoraId) => {
    EditoraService.deleteEditora(editoraId)
      .then((response) => {
        getAllEditoras();
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
        <h1 className="container">Cadastro Editora</h1>
      </header>
      <div className="container py-3">
        <Link to="/Editoras-Create" className="btn btn-primary mb-2">
          Criar Editora
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {editoras.map((editora) => (
                <tr key={editora.id}>
                  <td>{editora.id}</td>
                  <td>{editora.nome}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Editoras-Update/${editora.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEditora(editora.id)}
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
