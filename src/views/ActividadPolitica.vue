```html
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
      <h1>Actividad Política</h1>
      <div class="filter-container">
        <div class="dropdown">
          <button class="dropbtn">
            <span>Filtrar por:</span>
            <i class="dropdown-icon"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Nacional</a>
            <a href="#">Regional</a>
            <a href="#">Circunscripción 41</a>
          </div>
        </div>
      </div>
      <div class="news-container">
        <div class="news-item">
          <img src="#" alt="Noticia 1" />
          <div class="news-content">
            <h2>Título de la Noticia 1</h2>
            <p>Descripción de la Noticia 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="read-more">Leer más</a>
          </div>
        </div>
        <div class="news-item">
          <img src="#" alt="Noticia 2" />
          <div class="news-content">
            <h2>Título de la Noticia 2</h2>
            <p>Descripción de la Noticia 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="read-more">Leer más</a>
          </div>
        </div>
        <div class="news-item">
          <img src="#" alt="Noticia 3" />
          <div class="news-content">
            <h2>Título de la Noticia 3</h2>
            <p>Descripción de la Noticia 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="read-more">Leer más</a>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>© 2024 para la diputada</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ActividadPolitica'
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto', Arial, sans-serif;
  color: #333;
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
  flex-grow: 1;
  padding: 2rem;
  background-color: #f5f5f5;
}

.filter-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #901832;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10L12 15L17 10' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s;
}

.dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
}

.dropdown-content a {
  color: #333;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.news-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.news-item {
  display: flex;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.news-item img {
  width: 300px;
  height: 225px;
  object-fit: cover;
}

.news-content {
  flex-grow: 1;
  padding: 1rem;
}

.news-content h2 {
  margin-top: 0;
}

.read-more {
  display: inline-block;
  background-color: #901832;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.read-more:hover {
  background-color: #a81b3a;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
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

  .news-item {
    flex-direction: column;
  }

  .news-item img {
    width: 100%;
    height: auto;
  }
}
</style>