import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
          <div className="menuLateral">
            <a href="#cadastro">Novo</a>
              <br></br>
            <a href="http://www.google.com" > Outra</a>
          </div>

        <div id="cadastro">
          <form id="cadastro_livros">
              <h1>CADASTRO DE LIVROS</h1>
            <label>Requeridos</label>
              <br></br>
              <input type="text" id="isbn" placeholder="ISBN do livro" className="requerido" required></input>
              <input type="text" id="titulo" placeholder="Título do livro"className="requerido" required></input>
              <input type="text" id="autor" placeholder="Autor do livro"className="requerido" required></input>
              <br></br>
              <label>Não Requeridos</label>
              <br></br>
              <input type="text" id="editora" placeholder="Editora do livro"></input>
              <input type="text" id="ano" placeholder="Ano do livro"></input>
              <input type="text" id="quantidade" placeholder="Quantidade de livros"></input>
          </form>

            <button id="save" onClick={handleSave}>Salvar</button>
            <button id="result" onClick={handleResultados}>Resultados</button>

          <div id="resultados">
            <h1>RESULTADOS</h1>
            <h1>QUESTAO 4 já que a 3 não deu</h1>
              <input type="text" id="busca" placeholder="Nome de um veículo" className="requerido" required></input>
              <button id="busca" onClick={search}>Busca</button>
              <label id="resultado">???</label>
          </div>
        </div>
      </div>
    );
  }
}

let vector = [];
function handleSave(){

  let titulo = document.getElementById("titulo").value;
  console.log(titulo);
  vector.push(titulo);
}
function handleResultados() {
  let result = document.getElementById("resultados");
  for(let i=0; i<vector.length; i++){
    let tit = vector[i].valueOf();
    console.log(tit);
  }
}

function search() {
    fetch("https://swapi.co/api/vehicles/?serch"+document.getElementById("busca").valueOf(), {
        method: 'get',
    }).then((data=>{
      let dados = data.json();
      })).then((dados =>{

    }));
    console.log("foi");
}
export default App;
