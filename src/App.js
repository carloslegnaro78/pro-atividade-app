import './App.css';

function App() {
  
  const atividade =
  [
    {
      "id":1,
      "descricao":"Primeira Atividade"
    }
  ]
  
  
  return (
    <div className="mt-3">             
        <ul class="list-group">
          <li className="list-group-item">{atividade[0].id} {atividade[0].descricao}</li>
          <li className="list-group-item">Segunda Atividade</li>
          <li className="list-group-item">Terceira Atividade</li>
          <li className="list-group-item">Quarta Atividade</li>
        </ul>      
    </div>
  );
}

export default App;
