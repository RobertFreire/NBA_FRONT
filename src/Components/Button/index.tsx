import React from 'react'
import { IconWrapper, StyledButton } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    icon?: JSX.Element;
    primary?: boolean;
    rounded?: boolean;
    onClick?: () => void;
}

const Button = ({ children, icon, onClick, primary, rounded }: ButtonProps) => {
    return (
        <div>
            <StyledButton primary={primary} rounded={rounded} onClick={onClick}>
                {icon && (
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                )}
                {children}
            </StyledButton>
        </div>
    )
}

export default Button