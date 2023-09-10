import Header from "../Header/Header"
import { ContainerCenter, ContainerGeral2 } from "../styledGlobal"
import { Bolinha, CardBolinha, CardBolinhaTexto, CardDireita, CardEsquaerda, CardEsquerda, CardPost, ContainerIcones, ContainerPosts, IconesPost, ImagemMascara, MiniCardPost, MiniCardizinho, MiniContainer, Textinho, TextoMini } from "./styled"
import mascara from "../assets/mascara.png"
import comentarios from "../assets/comentarios.png"
import gostar from "../assets/gostar.png"

function Post(){
    return(
        <>
        <ContainerGeral2>
            <Header/>
                <ContainerCenter>

                    <CardPost>
                       <CardEsquerda>
                            <Bolinha>
                                <ImagemMascara src={mascara}/>
                            </Bolinha>


                            {/* <IconesPost src={comentarios}/>

                            <IconesPost src={gostar}/> */}
                          
                       </CardEsquerda>

                       <CardDireita>
                            <Textinho>
                            Enviado por @fulanadetal 
                            </Textinho>

                            <MiniCardizinho>

                            </MiniCardizinho>
                       </CardDireita>
                    </CardPost>

                </ContainerCenter>
        </ContainerGeral2>
        </>
    )
}

export default Post

{/* 
            <CardPost>

                    <CardBolinhaTexto>
                        <CardBolinha>

                        </CardBolinha>

                        <TextoMini>
                            enviado por: fulana
                        </TextoMini>
                    </CardBolinhaTexto>

                    <MiniCardPost>

                    </MiniCardPost>
            </CardPost> */}