<template>
  <div class="cartel-modelo">
    <div class="cartel-borde"></div>
    <div class="cartel-contenido">
      <h2><slot></slot></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartelModelo',
}
</script>

<style scoped>
.cartel-modelo {
  width: 1200px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1% auto; /* Centra el cartel horizontalmente */
}

.cartel-borde {
  width: 10px;
  background: linear-gradient(to bottom, #710C35, #DF352B);
}

.cartel-contenido {
  flex-grow: 1;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

h2 {
  margin: 0;
  font-size: 1.2em;
  color: #8B3631; /* Cambio del color del título aquí */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 885px) {
  .cartel-modelo {
    width: 90%;
    height: 50px;
  }

  h2 {
    font-size: 1em;
  }
}
</style>