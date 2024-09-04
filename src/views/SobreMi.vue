<template>
  <div class="page-container">
    <header class="header">
      <div class="header-content">
        <div class="logo">MB</div>
        <nav class="nav">
          <ul>
            <li><router-link to="/">INICIO</router-link></li>
            <li><router-link to="/actividad-politica">ACTIVIDAD POLÍTICA</router-link></li>
            <li><router-link to="/sobre-mi">SOBRE MÍ</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main">
      <div class="content-wrapper">
        <div class="profile-picture-container">
          <div class="profile-picture"></div>
        </div>
        <h1 class="title">Sobre Mí</h1>
        <div class="info-card">
          <p>Información sobre mí...</p>
          <p>Agrega datos sobre tu trayectoria, visión política, logros, etc.</p>
        </div>
      </div>
      <div class="decorative-element"></div>
    </main>

    <footer class="footer">
      <p>© 2024 Mariela Baldivieso</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SobreMi'
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.header {
  background: linear-gradient(to right, rgba(113, 12, 53), rgba(223, 53, 43));
  color: white;
  padding: 1rem;
  height: 60px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 1.3rem;
  font-weight: bold;
}

.nav a:hover, .nav a.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-picture-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #710C35;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.profile-picture {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #f5f7fa;
}

.title {
  font-size: 3rem;
  color: #710C35;
  margin-bottom: 1.5rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  max-width: 600px;
}

.info-card:hover {
  transform: translateY(-5px);
}

.decorative-element {
  background: linear-gradient(45deg, #710C35, #DF352B);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: absolute;
  right: -100px;
  bottom: -100px;
  opacity: 0.1;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}

@media (max-width: 885px) {
  .header {
    height: auto;
    padding: 1rem 0.5rem;
  }

  .header-content {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav {
    width: 100%;
    margin-top: 1rem;
  }

  .nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav a {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }
}
</style>