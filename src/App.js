import { useState } from 'react';
import './App.css';

const initialState = [
  { id: 1, descricao: 'Primeira Atividade' },
  { id: 2, descricao: 'Segunda Atividade' },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  // Estado controlado do formulário
  const [form, setForm] = useState({
    id: '',
    descricao: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function addAtividade(e) {
    e.preventDefault();

    // Validação simples
    if (form.id === '' || form.descricao.trim() === '') {
      alert('Preencha o ID e a descrição.');
      return;
    }

    // Converte ID para número (se quiser manter como string, remova o Number)
    const novo = {
      id: Number(form.id),
      descricao: form.descricao.trim(),
    };

    // Evita duplicidade de ID (opcional)
    const existe = atividades.some((a) => a.id === novo.id);
    if (existe) {
      alert(`Já existe uma atividade com o ID ${novo.id}.`);
      return;
    }

    // Atualiza estado sem mutar
    setAtividades((prev) => [...prev, novo]);

    // Limpa o formulário
    setForm({ id: '', descricao: '' });
  }

  return (
    <>
      <form onSubmit={addAtividade}>
        <input
          name="id"
          type="number"
          placeholder="id"
          value={form.id}
          onChange={handleChange}
        />
        <input
          name="descricao"
          type="text"
          placeholder="descricao"
          value={form.descricao}
          onChange={handleChange}
        />
        {/* usa type="submit" já que o form tem onSubmit */}
        <button type="submit">+ Atividade</button>
      </form>

      <div className="mt-3">
        <ul className="list-group">
          {atividades.map((ativ) => (
            <li key={ativ.id} className="list-group-item">
              {ativ.id} - {ativ.descricao}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;