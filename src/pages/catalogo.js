import React from 'react';
import CatalogoFilmes from '../components/Filmes';

function Catalogo() {
    const filmes = [
        {
          id: 1,
          title: "Capitão América: O Soldado Invernal",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat maiores nihil quaerat mollitia officia?.",
    
          poster:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
          rating: 9.2,
          year: 1972,
          image:
            "https://play-lh.googleusercontent.com/I8FjfvfwI0KKUTv4s1jXV3fMDo2IZ383InRt910U-oRHphchO_h6bXHBA-6ygHBNQCWXQUr6ArPQleuV4A=w240-h480-rw",
        },
        {
          id: 2,
          title: "Everything Everywhere All At Once",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat maiores nihil quaerat mollitia officia?.",
          poster:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b49kjskouDOkgrfWkQjOvzcYbAU.jpg",
          rating: 9.0,
          year: 2003,
          image: "https://play-lh.googleusercontent.com/TcSZz0mjvaAVqQDZXACMCb_JUNXPvDVhrh-THmwNJg-6Li6itvRgG-a-2zeclGf11mqS2bWSlALZMIoT_QdN=w480-h960-rw",
        },
        {
          id: 3,
          title: "Gato de Botas: O Último Desejo",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat maiores nihil quaerat mollitia officia",
          poster:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b49kjskouDOkgrfWkQjOvzcYbAU.jpg",
          rating: 9.0,
          year: 2003,
          image:
            "https://play-lh.googleusercontent.com/DlDHAsenw3mxAdvkGe_CQxwm8hjeUKfLVFFay1pjxfG328s_d70AZC5cdf0aJcJOOMS30KjW946dScVTRNsd=w240-h480-rw",
        }
        // mais filmes aqui...
      ];
    return (
        <div className='conteudo'>            
            <CatalogoFilmes filmes={filmes} />   
        </div>
    )
}

export default Catalogo;