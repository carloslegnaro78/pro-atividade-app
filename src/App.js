import './App.css';

function App() {
  
  const atividades =
  [
    {
      "id": 1,
      "descricao":"Primeira Atividade"
    },
    {
      "id": 2,
      "descricao":"Segunda Atividade"
    },
  ]

  function addAtiviade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    }
    atividades.push(atividade);
  }
    
  return (
<>
    <form>
        <input id="id" type="text" placeholder="id" />
        <input id="descricao" type="text" placeholder="descricao" />
        <button onClick={addAtiviade}>+ Atividade</button>
    </form>
    <div className="mt-3">             
        <ul class="list-group">
          {atividades.map( ativ =>(
            <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao}</li>
          ))}                   
        </ul>      
    </div>
    </>
  );
}

export default App;
