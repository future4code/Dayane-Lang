<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
import './styles.css'
=======
import React from 'react';
import styled from 'styled-components';
import './styles.css';
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
<<<<<<< HEAD
`
=======
`;
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
<<<<<<< HEAD
`
=======
`;
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
<<<<<<< HEAD
`
=======
`;
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
<<<<<<< HEAD
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {

  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }
=======
    };

  componentDidUpdate() {
    localStorage.setItem('listaTarefas', JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    if (localStorage.getItem('listaTarefas')) {
        const listaLetras = localStorage.getItem('listaTarefas');
        const listaObjetos = JSON.parse(listaLetras);
        
       this.state({tarefas:listaObjetos});
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // Explicação abaixo
	    texto: this.state.inputValue,
	    completa: false // Indica se a tarefa está completa (true ou false)
    };
    this.setState({tarefas: [...this.state.tarefas, novaTarefa]});
  };

  selectTarefa = (id) => {
    const selecionaTarefa = this.state.tarefas.map((item) => {
      if (item.id === id) {
        item.completa =! item.completa;
      }
      return item;
    });

    this.setState({tarefas: [...selecionaTarefa]});
  };

  onChangeFilter = (event) => {
    const filtro = event.target.value;

    this.setState({filtro: filtro});
  };
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
<<<<<<< HEAD
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
=======
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    });
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
<<<<<<< HEAD
    )
  }
}

export default App
=======
    );
  }
}

export default App;
>>>>>>> bec8f8e82470ad4e7ed97b0c425d1bf8f38ae12a
