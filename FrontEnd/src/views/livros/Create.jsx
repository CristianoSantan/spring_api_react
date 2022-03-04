import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LivroService from "../../services/LivroService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [isbn, setIsbn] = useState("");
  const [preco, setPreco] = useState("");
  const [id_autor, setId_autor] = useState("");
  const [id_editora, setId_editora] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarAutor = (e) => {
    e.preventDefault();

    const livro = { nome, isbn, preco, id_autor, id_editora};

    if (id) {
        LivroService.updateLivro(id, livro)
        .then((response) => {
            navigate("/Livros")
        })

    } else {
        LivroService.createLivro(livro)
        .then((response) => {
            navigate("/Livros")
        })
    }
  }

  useEffect(() => {
      function getLivroById() {
        if (id) {
            LivroService.getLivroById(id)
            .then((response) => {
                setNome(response.data.nome);
                setIsbn(response.data.isbn);
                setPreco(response.data.preco);
                setId_autor(response.data.autor.id_autor);
                setId_editora(response.data.editora.id_editora);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }

      getLivroById()

  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="Sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="Sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="Sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              value={id_autor}
              onChange={(e) => setId_autor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="Sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              value={id_editora}
              onChange={(e) => setId_editora(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarAutor(e)}>
            Submit
          </button>
          <Link
            to="/Livros"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
