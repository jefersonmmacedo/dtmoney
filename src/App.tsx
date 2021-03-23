import {GlobalStyle} from './styles/global'
import {Header} from './Components/Header/index'
import {Dashboard} from './Components/Dashboard/index'
import {NewTransactionModal} from './Components/NewTransactionModal/index'
import Modal from 'react-modal';
import { useState } from 'react';
import {TransactionsProvider} from './TransactionsContext'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, SetIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal () {
      SetIsNewTransactionOpen(true)
  }

  function handleCloseNewTransactionModal () {
      SetIsNewTransactionOpen(false)
  }
  
  return (
    <TransactionsProvider >
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionOpen}
      onRequestClose={handleCloseNewTransactionModal}
      
      />
     <GlobalStyle />
    </TransactionsProvider>
  );
}


