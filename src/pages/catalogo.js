import { React, useState } from "react";
import ListaFilmes from "../components/Filmes";
import Modal from "../components/Modal";

function Catalogo() {
  const filmes = [
    {
      id: 1,
      title: "Capitão América: O Soldado Invernal",
      description:
        "Após os eventos cataclísmicos em Nova York com Os Vingadores, 'Capitão América: O Soldado Invernal' da Marvel encontra Steve Rogers, também conhecido como Capitão América, vivendo tranquilamente em Washington, D.C. e tentando se ajustar ao mundo moderno. Mas quando um S.H.I.E.L.D. colega é atacado, Steve se envolve em uma teia de intrigas que ameaça colocar o mundo em risco. Unindo forças com a Viúva Negra, o Capitão América luta para expor a conspiração cada vez maior enquanto luta contra assassinos profissionais enviados para silenciá-lo a cada passo. Quando toda a trama do vilão é revelada, o Capitão América e a Viúva Negra contam com a ajuda de um novo aliado, o Falcão. No entanto, eles logo se deparam com um inimigo inesperado e formidável - o Soldado Invernal.",
      classification: "Recomendado para maiores de 13 anos",
      rating: 7.2,
      assessments: "62 avaliações",
      year: 2015,
      trailer: "https://www.youtube.com/embed/7k_6NsYIipA",
      image:
        "https://play-lh.googleusercontent.com/I8FjfvfwI0KKUTv4s1jXV3fMDo2IZ383InRt910U-oRHphchO_h6bXHBA-6ygHBNQCWXQUr6ArPQleuV4A=w240-h480-rw",
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
      image:
        "https://play-lh.googleusercontent.com/TcSZz0mjvaAVqQDZXACMCb_JUNXPvDVhrh-THmwNJg-6Li6itvRgG-a-2zeclGf11mqS2bWSlALZMIoT_QdN=w480-h960-rw",
    },
    {
      id: 3,
      title: "Gato de Botas: O Último Desejo",
      description:
        "Em sua busca, Gato e Kitty serão ajudados - contra seu melhor julgamento - por um vira-lata mal-humorado, tagarela e implacavelmente alegre, Perro (Harvey Guillén, de O Que Fazemos nas Sombras). Juntos, nosso trio de heróis terá que ficar um passo à frente de Cachinhos Dourados (a indicada ao Oscar® Florence Pugh, de Viúva Negra, na versão original) e a Família do Crime dos Três Ursos, “Big” Jack Horner (vencedor do Emmy John Mulaney, de Big Mouth, na vesão original) e o aterrorizante caçador de recompensas , O Lobo Mau (Wagner Moura, de Narcos, na versão original).",
      classification: "Recomendado para maiores de 13 anos",
      rating: 8.7,
      assessments: "43 avaliações",
      year: 2023,
      trailer: "https://www.youtube.com/embed/QAcn7cWm_hc",
      image:
        "https://play-lh.googleusercontent.com/DlDHAsenw3mxAdvkGe_CQxwm8hjeUKfLVFFay1pjxfG328s_d70AZC5cdf0aJcJOOMS30KjW946dScVTRNsd=w240-h480-rw",
    },
    // mais filmes aqui...
  ];

  const [filmeSelecionado, setFilme] = useState(null);

  const atualizaFilme = filme => {
    setFilme(filme);
  };

  return (
    <div className='conteudo'>
      <ListaFilmes filmes={filmes} onMovieSelect={atualizaFilme} />{" "}
      {filmeSelecionado && <Modal filme={filmeSelecionado} />}
    </div>
  );
}

export default Catalogo;
