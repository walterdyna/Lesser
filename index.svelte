<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let countdown = 15;
  let showModal = false;

  const startCountdown = () => {
    const interval = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(interval);
        showModal = true;
      }
    }, 1000);
  };

  const handleSubmit = () => {
    if (countdown > 0) {
      showModal = true;
    }
  };

  onMount(() => {
    startCountdown();
  });
</script>

<div class="container mx-auto py-8">
  <h1 class="text-2xl font-bold mb-4">Formulário</h1>
  <!-- Adicione aqui o formulário com os campos Nome, Telefone e Email -->
  <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4" on:click={handleSubmit}>Iniciar Desafio</button>
   <a href="/candidate" class="text-blue-500 mt-2 block">Ver dados do candidato</a>
</div>

{#if showModal}
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- Modal -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <!-- Adicione aqui o conteúdo do modal -->
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Desafio finalizado com falha!</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Você demorou mais que 15 segundos para enviar o formulário.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" on:click={() => showModal = false}>Fechar</button>
        </div>
      </div>
    </div>
  </div>
{/if}

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