<template>
    <div class="tendencia-modelo">
      <div class="content">
        <div class="rectangle">
          <span class="label">TITULO</span>
        </div>
        <p class="date">SEPT 04, 2024</p>
        <p class="description">DESCRIPCIÓN BREVE AQUÍ</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TendenciaModelo",
  };
  </script>
  
  <style scoped>
  .tendencia-modelo {
    width: 470px;
    height: 520px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #ffffff; /* Puedes cambiar el color de fondo */
    position: relative;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .rectangle {
    width: 100%;
    background-color: red;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 8px;
  }
  
  .label {
    color: white;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
  }
  
  .date {
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0;
    text-transform: uppercase;
  }
  
  .description {
    font-size: 12px;
    color: #555;
    text-transform: uppercase;
  }
  </style>
  