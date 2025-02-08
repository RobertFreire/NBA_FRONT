import styled from 'styled-components';

interface StyledButtonProps {
    primary?: boolean;
    rounded?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${props => props.primary ? 'var(--primary-blue)' : '#6c757d'};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: ${props => props.rounded ? '50px' : '4px'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${props => props.primary ? '#0056b3' : '#5a6268'};
    }
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    margin-right: 8px;
`;