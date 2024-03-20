<script>
  import { onMount } from 'svelte';

  // Adicione aqui a lógica para obter os dados do candidato

  const candidate = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john@example.com',
  };
</script>

<div class="container mx-auto py-8">
  <h1 class="text-2xl font-bold mb-4">Dados do Candidato</h1>
  <p><strong>Nome:</strong> {candidate.name}</p>
  <p><strong>Telefone:</strong> {candidate.phone}</p>
  <p><strong>Email:</strong> {candidate.email}</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4" on:click={() => history.back()}>Voltar para o Desafio</button>
</div>


<style>
  /* Estilos para o formulário */
  input, button {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 100%;
  }

  button {
    background-color: #3490dc;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #2779bd;
  }

  /* Estilos para o modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal-container {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 90%;
    width: 400px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .modal-content {
    margin-bottom: 1rem;
  }

  .modal-footer {
    text-align: right;
  }

  /* Estilos para o link */
  .link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>