<template>
  <div class="page-container">
    <header>
      <div class="header-filter"></div>
      <div class="logo"></div>
      <nav>
        <ul>
          <li><router-link to="/">INICIO</router-link></li>
          <li><router-link to="/actividad-politica">ACTIVIDAD POLÍTICA</router-link></li>
          <li><router-link to="/sobre-mi">SOBRE MÍ</router-link></li>
        </ul>
      </nav>
      <div class="header-text">
        <p class="text-1">DIPUTADA NACIONAL</p>
        <p class="text-2">MARIELA</p>
        <p class="text-3">BALDIVIESO</p>
        <div class="social-icons">
          <a href="https://www.tiktok.com/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://www.threads.net/cuenta" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-threads"></i>
          </a>
        </div>
      </div>
    </header>
    <main>      
      <CartelModelo>Título</CartelModelo>
      <TendenciaModelo></TendenciaModelo>
    </main>
    <footer>
      <p>© 2024 para la diputada</p>
    </footer>
  </div>
</template>

<script>
import CartelModelo from '@/components/CartelModelo.vue'
import TendenciaModelo from '@/components/TendenciaModelo.vue';
export default {
  name: 'App',
  components: {
    CartelModelo,
    TendenciaModelo
  }
}
</script>

<style>
/* Estilos globales */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>

<style scoped>
/* Estilos específicos del componente */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

header {
  background-image: url('@/assets/images/foto1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* Relación de aspecto 16:9 */
  position: relative;
}

.header-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(223, 53, 43, 0.5), rgba(113, 12, 53, 0.6));
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 100px;
  background-image: url('@/assets/images/image1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
}

nav {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 2;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 0.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 1.3rem;
  font-weight: bold;
}

nav a:hover,
nav a.router-link-active:not([to="/"])
nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.header-text {
  position: absolute;
  top: 50%;
  right: 190px;
  transform: translateY(-70%);
  display: flex;
  flex-direction: column;
}

.text-1, .text-2, .text-3 {
  font-family: 'Inter', sans-serif;
  color: white;
  line-height: 0.8;
}

.text-1 {
  font-size: 20px;
  letter-spacing: 0.63em;
  font-weight: 800;
  margin: 0 0 0 3px;
}

.text-2 {
  font-size: 90px;
  font-weight: 900;
  margin: 0;
}

.text-3 {
  font-size: 46px;
  letter-spacing: 0.35em;
  font-weight: 800;
  margin: 10px 0 0 0;
}

.social-icons {
  display: flex;
  justify-content: flex;
  gap: 31px;
  margin-top: 20px;
}

.social-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-icon:hover::before {
  opacity: 1;
}

.social-icon i {
  color: white;
  font-size: 24px;
  z-index: 2;
}

main {
  flex-grow: 1;
  background-color: #EDEFF4;
  padding: 1rem;
  width: 100%;
  height: 200vh;
}

main h1 {
  margin: 0;
  text-align: center;
  line-height: 80vh;
}

footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

/* Estilos responsivos */
@media (max-width: 885px) {
  header {
    background-position: left center;
    padding-top: 100%;
  }

  .logo {
    width: 110px;
    height: 110px;
    top: 10px;
    left: 30px;
  }

  nav {
    top: 20px;
    padding: 0.5rem;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav li {
    margin: 0.25rem 0;
  }

  .header-text {
    right: 220px;
    transform: translateY(-150%);
  }

  .text-1 {
    font-size: 14px;
    letter-spacing: 0.54em;
    margin: 0 0 3px 2px;
  }

  .text-2 {
    font-size: 58px;
  }

  .text-3 {
    font-size: 24px;
    letter-spacing: 0.62em;
    margin: 3px 0 0 2px;
  }

  .social-icons {
    gap: 11px;
    margin-top: 15px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-icon i {
    font-size: 20px;
  }

  main {
    padding: 0.5rem;
  }
}
</style>