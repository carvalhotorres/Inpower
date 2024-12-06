import S from "./inicio.module.scss";
import Card from "../../../assets/card-1.png";
import Card2 from "../../../assets/card-2.png";
import Card3 from "../../../assets/card-3.png";
import Card4 from "../../../assets/card-4.png";

function Inicio() {
    return (
        <main>
        <section className={S.hero}>
            <h2 className={S.titulo}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

        <section className={S.Card}>
            <h2 className={S.titulo2}>Por que devo doar?</h2>
            <div>
                <div className={S.cardsdoar}>
                    <img src={Card} alt="Card 1 da doação" />
                    <h3> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</h3>
                </div>
                <div className={S.cardsdoar}>
                    <img src={Card2} alt="Card 1 da doação" />
                    <h3> Estimula o hábito da leitura e o aprendizado contínuo.</h3>
                </div>
                <div className={S.cardsdoar}>
                    <img src={Card3} alt="Card 1 da doação" />
                    <h3>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</h3>
                </div>
                <div className={S.cardsdoar}>
                    <img src={Card4} alt="Card 1 da doação" />
                    <h3> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</h3>
                </div>
            </div>

        </section>
        </main>
    )
}



export default Inicio