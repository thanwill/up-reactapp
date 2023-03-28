import { React, useState } from "react";
import ListaFilmes from "../components/Filmes";
import Modal from "../components/Modal";
import "../global.css";
import CardCarousel from "../components/CardCarousel";

function Catalogo() {

  const [comentarios, setComentarios] = useState(
    [
      {
        id: 1,
        name: "Carlos Babiano",
        comment: "Gostei um pouco, mas poderia ser melhor.",
        filmeId: 1,
      },
      {
        id: 2,
        name: "Fernanda Monteiro",
        comment:
          "Aaah, eu amei. Não sou fã da Marvel mas meu namorado adora, então...",
        filmeId: 1,
      },
      {
        id: 3,
        name: "João Pedro",
        comment: "Caramba, haja creatina pro ator hein.",
        filmeId: 1,
      },
      {
        id: 4,
        name: "Fabiola Nascilmento",
        comment: "É um.",
        filmeId: 1,
      },
      {
        id: 1,
        name: "Júlia Santos",
        comment: "Esse filme é incrível! Amei a mistura de gêneros.",
        filmeId: 2,
      },
      {
        id: 2,
        name: "Felipe Oliveira",
        comment: "Não gostei muito do filme. Fiquei confuso com a história.",
        filmeId: 2,
      },
      {
        id: 3,
        name: "Laura Almeida",
        comment:
          "Tive que assistir duas vezes para entender tudo, mas valeu a pena.",
        filmeId: 2,
      },
      {
        id: 4,
        name: "Pedro Gomes",
        comment: "O filme tem uma mensagem profunda e reflexiva sobre a vida.",
        filmeId: 2,
      },
      {
        id: 5,
        name: "Mariana Silva",
        comment:
          "Os efeitos especiais são incríveis, mas a história não me prendeu tanto.",
        filmeId: 2,
      },
      {
        id: 6,
        name: "Rafaela Vieira",
        comment: "O filme é muito original e surpreendente. Recomendo!",
        filmeId: 2,
      },
      {
        id: 7,
        name: "Thiago Ferreira",
        comment: "Achei o enredo confuso e um pouco cansativo.",
        filmeId: 2,
      },
      {
        id: 8,
        name: "Marcela Rodrigues",
        comment: "Adorei o elenco, especialmente a atuação da protagonista.",
        filmeId: 2,
      },
      {
        id: 9,
        name: "Lucas Lima",
        comment: "O filme é um pouco longo demais, mas tem cenas épicas.",
        filmeId: 2,
      },
      {
        id: 10,
        name: "Ana Beatriz Costa",
        comment:
          "A história é envolvente e instigante, mas o final me deixou um pouco confusa.",
        filmeId: 2,
      },
      {
        id: 11,
        name: "Gustavo Santos",
        comment:
          "O filme tem uma mensagem positiva e inspiradora sobre a vida e o amor.",
        filmeId: 2,
      },
      {
        id: 12,
        name: "Fernanda Oliveira",
        comment:
          "As referências a outras obras cinematográficas são muito interessantes e criativas.",
        filmeId: 2,
      },
      {
        id: 1,
        name: "Sophie Dupont",
        comment:
          "J'ai adoré ce film! Les scènes d'action sont incroyables et l'histoire est passionnante.",
        filmeId: 1,
      },
      {
        id: 2,
        name: "Tom Smith",
        comment:
          "Captain America is one of my favorite Marvel characters and this movie did not disappoint!",
        filmeId: 1,
      },
      {
        id: 3,
        name: "Pedro Alves",
        comment:
          "O Capitão América é um herói muito inspirador e este filme faz jus à sua história.",
        filmeId: 1,
      },
      {
        id: 4,
        name: "Camille Martin",
        comment:
          "Le personnage de Captain America est tellement charismatique et courageux. J'ai adoré!",
        filmeId: 1,
      },
      {
        id: 5,
        name: "John Taylor",
        comment:
          "I've been a fan of Captain America since I was a kid, and this movie exceeded my expectations!",
        filmeId: 1,
      },
      {
        id: 6,
        name: "Sofia Almeida",
        comment:
          "O filme tem cenas de ação incríveis e uma história emocionante sobre coragem e amizade.",
        filmeId: 1,
      },
      {
        id: 1,
        name: "Ana",
        comment:
          "O Gato de Botas é muito engraçado e legal! Gostei quando ele lutou com o gigante.",
        filmeId: 3,
      },
      {
        id: 2,
        name: "Pedro",
        comment:
          "O Gato de Botas é meu personagem favorito! Ele é muito esperto e corajoso.",
        filmeId: 3,
      },
      {
        id: 3,
        name: "Julia",
        comment:
          "Eu adorei quando o Gato de Botas dançou com a gatinha. Foi muito fofo!",
        filmeId: 3,
      },
      {
        id: 4,
        name: "Lucas",
        comment:
          "O Gato de Botas é um herói muito legal! Eu queria ter uma espada como a dele.",
        filmeId: 3,
      },
      {
        id: 5,
        name: "Maria",
        comment:
          "Eu ri muito quando o Gato de Botas caiu na lama. Ele é um gatinho tão engraçado!",
        filmeId: 3,
      },
    ]
  )  ;

  
  
  const filmes = [
    {
      id: 1,
      title: "Capitão América: O Soldado Invernal",
      description:
        "Após os eventos cataclísmicos em Nova York com Os Vingadores, 'Capitão América: O Soldado Invernal' da Marvel encontra Steve Rogers, também conhecido como Capitão América, vivendo tranquilamente em Washington, D.C. e tentando se ajustar ao mundo moderno. Mas quando um S.H.I.E.L.D. colega é atacado, Steve se envolve em uma teia de intrigas que ameaça colocar o mundo em risco. Unindo forças com a Viúva Negra, o Capitão América luta para expor a conspiração cada vez maior enquanto luta contra assassinos profissionais enviados para silenciá-lo a cada passo. Quando toda a trama do vilão é revelada, o Capitão América e a Viúva Negra contam com a ajuda de um novo aliado, o Falcão. No entanto, eles logo se deparam com um inimigo inesperado e formidável - o Soldado Invernal.",
      classification: "Recomendado para maiores de 14 anos",
      rating: 7.2,
      assessments: "62 avaliações",
      year: 2015,
      trailer: "https://www.youtube.com/embed/7k_6NsYIipA",
      image: "./images/america.png",
    },
    {
      id: 2,
      title: "Everything Everywhere All At Once",
      description:
        "Quando uma ruptura interdimensional ameaça desvendar a realidade, o destino do mundo está repentinamente nas mãos de uma heroína improvável: Evelyn (Michelle Yeoh), uma mãe imigrante sobrecarregada. À medida que perigos bizarros e desconcertantes emergem de muitos universos possíveis, ela deve aprender a canalizar seus novos poderes e lutar para salvar seu lar, sua família e a si mesma, nesta aventura hilária e de grande coração através do multiverso.",
      classification: "Recomendado para maiores de 13 anos",
      rating: 9.9,
      assessments: "53 avaliações",
      year: 2023,
      trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
      image: "./images/everything.png",
    },
    {
      id: 3,
      title: "Gato de Botas: O Último Desejo",
      description:
        "Em sua busca, Gato e Kitty serão ajudados - contra seu melhor julgamento - por um vira-lata mal-humorado, tagarela e implacavelmente alegre, Perro (Harvey Guillén, de O Que Fazemos nas Sombras). Juntos, nosso trio de heróis terá que ficar um passo à frente de Cachinhos Dourados (a indicada ao Oscar® Florence Pugh, de Viúva Negra, na versão original) e a Família do Crime dos Três Ursos, “Big” Jack Horner (vencedor do Emmy John Mulaney, de Big Mouth, na vesão original) e o aterrorizante caçador de recompensas , O Lobo Mau (Wagner Moura, de Narcos, na versão original).",
      classification: "Livre para todos os públicos",
      rating: 8.7,
      assessments: "43 avaliações",
      year: 2023,
      trailer: "https://www.youtube.com/embed/QAcn7cWm_hc",
      image: "./images/gato.png",
    },
    {
      id: 5,
      title: "Pantera Negra",
      description:
      "Após a morte de seu pai, o jovem T'Challa retorna a Wakanda para assumir o trono e o manto de Pantera Negra, o protetor da nação africana. Mas ele logo se vê em meio a uma conspiração que ameaça não só a segurança de Wakanda, mas de todo o mundo. Com a ajuda de seus aliados, incluindo a guerreira Nakia e o agente da CIA Everett Ross, T'Challa deve enfrentar o vilão Erik Killmonger e impedir que ele use o vibranium, o metal precioso encontrado em Wakanda, para dominar o planeta.",
      classification: "Recomendado para maiores de 12 anos",
      rating: 7.4,
      assessments: "72 avaliações",
      year: 2018,
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
      image: "./images/pantera.png",
      },
      {
      id: 4,
      title: "Vingadores: Guerra Infinita",
      description:
      "Os Vingadores unem forças com os Guardiões da Galáxia para deter o vilão Thanos, que está em busca das seis Joias do Infinito para poder controlar o universo. Enquanto os heróis lutam para impedir que Thanos alcance seu objetivo, eles precisam lidar com a perda de alguns de seus membros e com as consequências de suas próprias escolhas.",
      classification: "Recomendado para maiores de 12 anos",
      rating: 8.4,
      assessments: "125 avaliações",
      year: 2018,
      trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
      image: "./images/vingadores.png",
      },
      {
        id: 6,
        title: "Joker",
        description:
        "O comediante fracassado Arthur Fleck luta para encontrar seu lugar em uma sociedade em constante declínio. Atormentado pela violência e pela falta de compaixão, ele começa a descender em uma espiral de loucura e se transforma no icônico vilão conhecido como Coringa. Enquanto isso, a cidade de Gotham também enfrenta seus próprios problemas, incluindo uma greve dos funcionários públicos e uma crescente onda de violência. Com a ajuda da terapeuta social do governo, Arthur tenta encontrar um meio de lidar com sua doença mental e sua conexão com a cidade que o despreza.",
        classification: "Recomendado para maiores de 16 anos",
        rating: 8.5,
        assessments: "82 avaliações",
        year: 2019,
        trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
        image: "./images/joker.png",
        }
    // mais filmes aqui...
  ];
  
  const categorias = [
    {
      id: 1,
      tipo: "Animação",
      icon: "bi bi-emoji-smile-fill",
    },
    {
      id: 2,
      tipo: "Terror",
      icon: "bi bi-emoji-dizzy-fill",
    },
    {
      id: 3,
      tipo: "Suspense",
      icon: "bi bi-emoji-dizzy-fill",
    },
    {
      id: 4,
      tipo: "Comédia",
      icon: "bi bi-emoji-laughing-fill",
    },
    {
      id: 5,
      tipo: "Ficção científica",
      icon: "bi bi-rocket-takeoff-fill",
    },
    {
      id: 6,
      tipo: "Romance",
      icon: "bi bi-emoji-kiss-fill",
    },
  ];
  const [filmeSelecionado, setFilme] = useState(null);

  const atualizaFilme = filme => {
    setFilme(filme);
  };

  return (
    <main className='conteudo'>
      <div className='mt-5 mb-5 col-10 offset-1 col-md-8 offset-md-2 '>
        <h1 className='text-left'>Assista sucessos mundiais</h1>
        <p className='mt-5'>
          Bem-vindo ao <strong>iMoove</strong>! Aqui, você encontrará uma ampla
          seleção de filmes e séries de qualidade para assistir quando e onde
          quiser. Nossa biblioteca de conteúdo é atualizada constantemente para
          garantir que você sempre tenha novidades para explorar. Além disso,
          oferecemos uma experiência de streaming fácil e intuitiva, para que
          você possa aproveitar ao máximo cada momento. Assine agora e comece a
          desfrutar de uma jornada cinematográfica única e emocionante!
        </p>
        <CardCarousel categorias={categorias} onMovieSelect={atualizaFilme} />
        <ListaFilmes filmes={filmes} onMovieSelect={atualizaFilme} />
      </div>
      {filmeSelecionado && (
        <Modal filme={filmeSelecionado} listaComentarios={comentarios} />
      )}
      <div>
        <div id='carouselExample' class='carousel slide'>
          <div class='carousel-inner'>
            <div class='carousel-item'></div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExample'
            data-bs-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Catalogo;
