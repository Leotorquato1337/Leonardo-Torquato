function updateDateTime() {
    const now = new Date();
    const datetime = now.toLocaleString('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    document.getElementById('datetime').textContent = `Atualizado em: ${datetime}`;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 60000);
  