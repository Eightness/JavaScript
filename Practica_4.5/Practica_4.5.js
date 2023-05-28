function myAnimeList() {

    fetch('https://api.jikan.moe/v4/random/anime')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(datos => {

      //Nos ahorramos poner data en la recogida de datos
      datos = datos.data

      //------------------------------------------------------------------------
      
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
      const listaGeneros = datos.genres;
      //Creamos boolean que sea true si alguno de los géneros del anime es "Hentai"
      const esHentai = listaGeneros.some(listaGeneros => listaGeneros.name === "Hentai");

      //Sinopsis
      const sinopsisAnime = datos.synopsis;

      //Imagen
      const urlImagen = datos.images.jpg.image_url;
      //Creamos boolean que sea true si el anime no tiene imagen
      const noTieneImagen = urlImagen !== null ? false : true;

      //Trailer
      const urlEmbedTrailer = datos.trailer.embed_url;
      //Creamos boolean que sea true si el anime no tiene trailer
      const noTieneVideo = urlEmbedTrailer !== null ? false : true;

      //----------------------------------------------------------------------

      // Si es "Hentai", realizar una nueva solicitud
      if (esHentai || noTieneImagen || noTieneVideo) {
        myAnimeList();
      } else {

        //Localizamos los elementos con determinados ID's y los asignamos a los datos que queremos
        const elementoTitulo = document.getElementsByClassName('titulo');
        for (let index = 0; index < elementoTitulo.length; index++) {
          if (index == 0) {
            elementoTitulo[index].innerHTML = tituloAnime;
          } else {
            elementoTitulo[index].innerHTML = tituloAnime + ".";
          }
        }

        const elementoTituloJapones = document.getElementById("tituloJapones");
        if (tituloAnimeJapones == null) {
          elementoTituloJapones.innerHTML = "-";
        } else {
          elementoTituloJapones.innerHTML = tituloAnimeJapones + ".";
        }
        
        const elementoTituloIngles = document.getElementById("tituloIngles");
        if (tituloAnimeIngles == null) {
          elementoTituloIngles.innerHTML = "-";
        } else {
          elementoTituloIngles.innerHTML = tituloAnimeIngles + ".";
        }

        const elementoSinopsis = document.getElementById("textoSinopsis");
        if (sinopsisAnime == null) {
          elementoSinopsis.innerHTML = "No hay sinopsis disponible para este anime.";
        } else {
          elementoSinopsis.innerHTML = sinopsisAnime;
        }

        const elementoTipoManga = document.getElementById("tipoManga");
        elementoTipoManga.innerHTML += tipoManga + ".";

        const elementoFuente = document.getElementById("fuente");
        elementoFuente.innerHTML += fuente + ".";

        const elementoEpisodios = document.getElementById("episodios");
        elementoEpisodios.innerHTML += episodios + ".";

        const elementoComienzoEmision = document.getElementById("comienzoEmision");
        elementoComienzoEmision.innerHTML += comienzoEmision.substring(0, 10) + ".";

        const elementoFinEmision = document.getElementById("finEmision");
        if (finEmision == null) {
          elementoFinEmision.innerHTML += "-";
        } else {
          elementoFinEmision.innerHTML += finEmision.substring(0, 10) + ".";
        }

        const elementoDuracion = document.getElementById("duracion");
        if (duracion == null) {
          elementoDuracion.innerHTML += "-";
        } else {
          elementoDuracion.innerHTML += duracion + ".";
        }

        const elementoClasificacion = document.getElementById("clasificacion");
        if (clasificacion == null) {
          elementoClasificacion.innerHTML += "-";
        } else {
          elementoClasificacion.innerHTML += clasificacion + ".";
        }

        const elementoNota = document.getElementById("nota");
        if (nota == null) {
          elementoNota.innerHTML += "-";
        } else {
          elementoNota.innerHTML += nota + ".";
        }

        const elementoGeneros = document.getElementById("generos");
        if (listaGeneros.length == 0) {
          elementoGeneros.innerHTML += "-";
        } else {
          for (let index = 0; index < listaGeneros.length; index++) {
            if (index != listaGeneros.length - 1) {
              elementoGeneros.innerHTML += listaGeneros[index].name + ", ";
            } else {
              elementoGeneros.innerHTML += listaGeneros[index].name + ".";
            }
          }
        }

        for (let index = 0; index < listaGeneros.length; index++) {
            elementoGeneros.innerHTML += listaGeneros[index].name + ".";
        }

        const elementoImagen = document.getElementById("imagen");
        elementoImagen.src = urlImagen;

        const elementoVideo = document.getElementById("video");
        elementoVideo.src = urlEmbedTrailer;

      }

    })
    .catch(error => {
      console.error('Error al obtener la información del anime:', error);
    });
    
}