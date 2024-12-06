import React from "react";
import S from "./header.module.scss";
import logo from '../../assets/logo.png';
import Lupa from "../../assets/lupa.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "../paginas/Inicio/Inicio";
import LivrosDoados from "../paginas/Livrodoados/livrodoados";
import QueroDoar from "../paginas/Querodoar/doar";

function Header() {
    return (
        <Router>
            <header>
                <section className={S.menu}>
                    <div className={S.box1}>
                        <img className={S.logo} src={logo} alt="imagem da logo da empresa formato de livro" />
                        <h1 className={S.titulo}>Livros Vai na Web</h1>
                    </div>

                    <nav className={S.box2}>
                        <ul>
                            <li>
                                <Link className={S.lista} to="/">Início</Link>
                            </li>
                            <li>
                                <Link className={S.lista} to="/livrosdoados">Livros Doados</Link>
                            </li>
                            <li>
                                <Link className={S.lista} to="/querodoar">Quero Doar</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={S.box3}>
                        <input className={S.pesquisa} type="text" placeholder="O que você procura?" />
                        <img className={S.Lupa} src={Lupa} alt="lupa da barra de pesquisa" />
                    </div>
                </section>
            </header>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/livrosdoados" element={<LivrosDoados />} />
                <Route path="/querodoar" element={<QueroDoar />} />
            </Routes>
        </Router>
    );
}

export default Header;
