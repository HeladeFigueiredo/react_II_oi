import { Title } from '../Title'
import { NavItem } from '../NavItem'
import * as S from './styles';

const items = ['Página Inicial', 'Pesquisa', 'Explorar', 'Reels', 'Mensagens', 'Notificações', 'Criar', 'Perfil']

export const NavBar = (props) => {
    return (
        <S.NavBarWrapper> 
            <S.Box>
                <S.Box>
                    <Title />
                </S.Box>
                
                <S.Box>
                    {items.map((item) => (
                        <NavItem key={item} title={item} />
                    ))}
                </S.Box>
            </S.Box>

            <NavItem title={'Mais'} />

        </S.NavBarWrapper>
    );
};