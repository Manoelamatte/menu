import { BotaoHambuurger, ContainerHeader, ContainerMenu, ImagemMenu, ImagemProfire, MenuLateral, TituloHeader } from "./styled"
import iconeMenu from "../assets/iconeMenu.png"
import Iconeheroi from "../assets/Iconeheroi.png"
import style from "./style.css"
import iconeFilmes from "../assets/iconeFilmes.png"

function Header(){
    return(
        <>
        <ContainerHeader>
          
      <button class="hamburguerButton"><ImagemMenu src={iconeMenu}/></button>
        <nav class="menulateral">
           
    <ul>
        <li class="item-menu">
            <a href="#">
                <span class="icones">
                <ImagemMenu src={iconeFilmes}/></span>
                <span class="linktxt">Filmes</span>
            </a>
        </li>
    </ul>
    <p class="menutitulo">FEEDS</p>
    <ul>
        <li class="item-menu">
            <a href="#">
                <span class="icones"><img src="./assets/iconHouse.png" class="icones-menu-disque"/>
                <img src="./assets/casinhabranca.png" class="icones-menu-disque-hover"/></span>
                <span class="linktxt">Página inicial</span>
            </a>
        </li>
        <li class="item-menu">
            <a href="#">
                <span class="icones"><img src="./assets/iconSeta.png" class="icones-menu-disque" />
                <img src="./assets/setinhabranca.png" class="icones-menu-disque-hover"/></span>
                <span class="linktxt">Popular</span>
            </a>
        </li>
    </ul>
    <p class="menutitulo">ASSUNTOS</p>
</nav>

            <MenuLateral>

            </MenuLateral>


            <TituloHeader>manoela matte</TituloHeader>

            <ImagemProfire src={Iconeheroi}/>
        </ContainerHeader>
        </>
    )
}

export default Header