import ImgLogo from '../../assets/logo.svg';
import {Container, Content} from './styles';


interface headerProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: headerProps) {
  
    return (
        <Container>
            <Content>
            <img src={ImgLogo} alt="dt money"/>
            <button type="button"
            onClick={onOpenNewTransactionModal}>Nova Transação</button>

            
            </Content>      
        </Container>
        
    )
}