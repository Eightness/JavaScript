function myAnimeList() {
    fetch('https://api.jikan.moe/v4/random/anime')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
      // Formatear y mostrar la información del anime
      const tituloAnime = data.title;
      const sinopsisAnime = data.synopsis;

      const elementoTitulo = document.getElementById('titulo1');
      elementoTitulo.textContent = tituloAnime;

      const elementoSinopsis = document.getElementById('textoSinopsis');
      elementoSinopsis.textContent = sinopsisAnime;
      
    })
    .catch(error => {
      console.error('Error al obtener la información del anime:', error);
    });
    
}