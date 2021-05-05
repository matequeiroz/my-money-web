import React from 'react'

import { HeaderContainer, HeaderWrapper } from './styles'
import Logo from '../../assets/logo.svg'

interface HeaderProps {
    onCloseNewTransactionModal: () => void;
}

export function Header({ onCloseNewTransactionModal }:HeaderProps){
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <div>
                    <img src={Logo} alt="Logo My Momey" />
                    <h2>My Money</h2>
                </div>
                <button type="button" onClick={onCloseNewTransactionModal}>Nova transação</button>
            </HeaderContainer>
        </HeaderWrapper>
    )
}