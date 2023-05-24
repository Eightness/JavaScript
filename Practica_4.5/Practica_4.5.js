function myAnimeList() {

    fetch('https://api.jikan.moe/v4/random/anime')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(datos => {

      //Nos ahorramos poner data en la recogida de datos
      datos = datos.data

      //Recogemos todos los datos necesarios de la API

      //Títulos
      const tituloAnime = datos.title;
      const tituloAnimeJapones = datos.title_japanese;
      const tituloAnimeIngles = datos.title_english;

      //Características
      const tipoManga = datos.type;
      const fuente = datos.source;
      const episodios = datos.episodes;
      const comienzoEmision = datos.aired.from;
      const finEmision = datos.aired.to;
      const duracion = datos.duration;
      const clasificacion = datos.rating;
      const nota = datos.score;
      const generos = datos.genres;

      //Sinopsis
      const sinopsisAnime = datos.synopsis;

      //Imagen
      const urlImagen = datos.images.jpg.image_url;

      //Trailer
      const urlEmbedTrailer = datos.trailer.embed_url;

      //Localizamos los elementos con determinados ID's y los asignamos a los datos que queremos
      const elementoTitulo = document.getElementsByClassName('titulo');
      //For loop para iterar por todos los elementos que tienen la misma clase
      for (let index = 0; index < elementoTitulo.length; index++) {
        elementoTitulo[index].innerHTML = tituloAnime;
      }

      const elementoTituloJapones = document.getElementById("tituloJapones");
      elementoTituloJapones.innerHTML = tituloAnimeJapones;
      
      const elementoTituloIngles = document.getElementById("tituloIngles");
      if (tituloAnimeIngles == null) {
        elementoTituloIngles.innerHTML = "-";
      } else {
        elementoTituloIngles.innerHTML = tituloAnimeIngles;
      }

      const elementoSinopsis = document.getElementById('textoSinopsis');
      elementoSinopsis.innerHTML = sinopsisAnime;
      
    })
    .catch(error => {
      console.error('Error al obtener la información del anime:', error);
    });
    
}