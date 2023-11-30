export enum MovieEstatus {
    Proximamente = 'Próximamente',
    Cartelera = 'En Cartelera',
  }
  
  export interface Movie {
    id: number;
    imagen: string;
    nombre: string;
    genero: string;
    estatus: MovieEstatus;
    cine: string;
    ubicacion: string;
    descripcion: string;
    precioVenta: number;
  }

  
  
  
  /*export const listaCasasDummy: Movie[] = [
    {
        id: 1,
        imagen: "señora influencer.jpg",
        nombre: "Señora Influencer",
        genero: "Thriller",
        estatus: MovieEstatus.Cartelera,
        cine: "Cinepólis",
        ubicacion: "Hermosillo",
        descripcion: "Te equivocaste de perfil",
        precioVenta: 60
    },
  ];*/
  
  