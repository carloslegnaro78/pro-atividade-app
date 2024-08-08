import { useState } from 'react';
import './App.css';

let initialState = [  
    {
      "id": 1,
      "descricao":"Primeira Atividade"
    },
    {
      "id": 2,
      "descricao":"Segunda Atividade"
    },  
];

function App() {
  
  const[atividades, setAtividades] = useState(initialState)
 
  
  function addAtiviade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    
    setAtividades([...atividades, {...atividade}]);

  }
    
  return (
<>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="id" class="form-label">Id</label>
        <input id="id" type='text' class="form-control"  />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Descrição</label>
        <input id="descricao" type="text" class="form-control"  />
      </div>
      <hr />
      <div class="col-12">
        <button 
            className="btn btn-outline-secondary" 
            onClick={addAtiviade}>
              + Atividade
        </button>
      </div>
    </form>
    <div className='mt-3'> 
          {atividades.map( ativ => (            
            <div key={ativ.id} className="card mb-2 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="badge bg-secondary me-1">
                      {ativ.id}
                    </span>  
                     - título
                  </h5>
                  <h6>
                      Prioridade: Normal
                  </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
              </div>
            </div>      
          ))}
    </div>
    </>
  );
}

export default App;
