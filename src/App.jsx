import { useState } from "react";
import "./App.css";
import pedraimg from "./assets/pedra.png";
import papelimg from "./assets/papel.png";
import tesouraimg from "./assets/tesoura.png";

function App() {
  const [jogadorEscolha, setJogadorEscolha] = useState(null);
  const [botEscolha, setBotEscolha] = useState(null);
  const [pontosJogador, setPontosJogador] = useState(0);
  const [pontosBot, setPontosBot] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [resultado, setResultado] = useState("");

  const escolhas = [
    { nome: "pedra", imagem: pedraimg },
    { nome: "papel", imagem: papelimg },
    { nome: "tesoura", imagem: tesouraimg },
  ];

  const jogar = () => {
    const escolhaBot = escolhas[Math.floor(Math.random() * escolhas.length)];
    setBotEscolha(escolhaBot);

    if (jogadorEscolha.nome === escolhaBot.nome) {
      setEmpates(empates + 1);
      setResultado("EMPATE");
    } else if (
      (jogadorEscolha.nome === "pedra" && escolhaBot.nome === "tesoura") ||
      (jogadorEscolha.nome === "papel" && escolhaBot.nome === "pedra") ||
      (jogadorEscolha.nome === "tesoura" && escolhaBot.nome === "papel")
    ) {
      setPontosJogador(pontosJogador + 1);
      setResultado("VITÓRIA");
    } else {
      setPontosBot(pontosBot + 1);
      setResultado("DERROTA");
    }
  };

  return (
    <>
      <div className="header-container">
        <h1>jokenpo</h1>
      </div>
      <div className="content-center">
        <div className="content-container">
          <div className="placar-container">
            <p>PLACAR</p>
            <div className="placar">
              <div>
                <p className="nome-jogador">Você</p>
                <p>{pontosJogador}</p>
              </div>
              <div>
                <p className="nome-jogador">Empates</p>
                <p>{empates}</p>
              </div>
              <div>
                <p className="nome-jogador">Bot</p>
                <p>{pontosBot}</p>
              </div>
            </div>
          </div>
          {resultado === "VITÓRIA" ? (
            <p className="vitoria-label">{resultado}</p>
          ) : resultado === "DERROTA" ? (
            <p className="derrota-label">{resultado}</p>
          ) : (
            <p className="empate-label">{resultado}</p>
          )}
          <p className="x">X</p>
          <div className="jogo-container">
            <div className="jogador-container">
              <div className="img-container">
                <img
                  src={
                    jogadorEscolha === null ? pedraimg : jogadorEscolha.imagem
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="bot-container">
              <div className="img-container">
                <img
                  className="imgbot"
                  src={botEscolha === null ? papelimg : botEscolha.imagem}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="jogadas-container">
            <p className="">ESCOLHA SUA JOGADA</p>
            <div className="jogadas-container2">
              {escolhas.map((escolha) => (
                <button
                  className="btn-escolhas"
                  key={escolha.nome}
                  onClick={() => setJogadorEscolha(escolha)}
                >
                  <img
                    className="jogadas"
                    src={escolha.imagem}
                    alt={escolha.nome}
                  />
                </button>
              ))}
            </div>
            <button id="btn_jogar" onClick={() => jogar()}>
              JOGAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /*const paper_icon = "http://cdn.onlinewebfonts.com/svg/img_294420.png"
const rock_icon = "https://www.shareicon.net/data/2016/11/14/851912_hand-o-rock_512x512.png"
const scissors_icon = "https://www.pngkit.com/png/full/37-377207_hand-scissors-icon.png"

function Jokenpo() {
  const [jogada_esquerda, set_jogada_esquerda] = useState('jogada_tesoura')
  const [jogada_direita, set_jogada_direita] = useState('jogada_pedra')

  const escolhas_computador = ['jogada_tesoura', 'jogada_papel', 'jogada_pedra']

  function sortear_jogada(){
    const numero = Math.floor(Math.random() * escolhas_computador.length)
    set_jogada_direita(escolhas_computador[numero])
  }

  function escolher_jogada(escolha) {
    if (escolha == 'papel') {
      set_jogada_esquerda('jogada_papel')
    } else if (escolha == 'pedra') {
      set_jogada_esquerda('jogada_pedra')
    } else {
      set_jogada_esquerda('jogada_tesoura')
    }
    sortear_jogada()
  }

  const [resultado_jogo, set_resultado_jogo] = useState('Inicie uma partida')
  const [vitorias_jogador, set_vitorias_jogador] = useState(0)
  const [vitorias_Bot, set_vitorias_Bot] = useState(0)
  const [empates, set_empates] = useState(0)

  

  function jogar(){
    if (jogada_esquerda == jogada_direita){
      set_resultado_jogo('EMPATE')  
      set_empates(empates + 1)
    } else if ((jogada_esquerda == 'jogada_tesoura' && jogada_direita == 'jogada_pedra') || (jogada_esquerda=='jogada_pedra' && jogada_direita=='jogada_papel') || (jogada_esquerda == 'jogada_tesoura' && jogada_direita == 'jogada_pedra')){
      set_resultado_jogo('DERROTA')
      set_vitorias_Bot(vitorias_Bot + 1)
    }else {
      set_resultado_jogo('VITÓRIA')
      set_vitorias_jogador(vitorias_jogador + 1)
    }
  }

  return (
    <div>
      <h1>Jokenpô</h1>
      <div id='holder_jokenpo'>
        <div id='jogador_esquerda'>
          <h2>Você</h2>
          <div id={jogada_esquerda} className='jogada_escolhida' />
          <div className='imgs_escolhas'>
            <button id='btn_scissors_e' onClick={() => escolher_jogada('tesoura')}><img src={scissors_icon} alt="scissors" /></button>
            <button id='btn_rock_e' onClick={() => escolher_jogada('pedra')}><img src={rock_icon} alt="rock" /></button>
            <button id='btn_paper_e' onClick={() => escolher_jogada('papel')}><img src={paper_icon} alt="paper" /></button>
          </div>
        </div>
        <button id='btn_jogar' onClick={() => jogar()}>JOGAR!</button>
        <div id='jogador_esquerda'>
          <h2>Máquina</h2>
          <div id={jogada_direita} className='jogada_escolhida' />
          <div className='imgs_escolhas'>
            <button><img src={scissors_icon} alt="scissors" /></button>
            <button><img src={rock_icon} alt="rock" /></button>
            <button><img src={paper_icon} alt="paper" /></button>
          </div>
        </div>
      </div>
      <div id='holder_resultados'>
        <h1>{resultado_jogo}</h1>
        <h2>{vitorias_jogador} X {vitorias_Bot}</h2>
        <h2>Empates: {empates}</h2>
      </div>
    </div>
  )
}


export default Jokenpo*/
}

{
  /* <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button> */
}

{
  /* <div className="card">
        </div> 
      
      <div className="title-container">
        <h1>jokenpo</h1>
      </div>
      
      */
}
