import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
    cursor: pointer;
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

export const TabItem = styled.div<{ active: boolean }>`
    padding: 1rem 3rem;
    border: 1px solid #ccc;
    border-bottom: none;
    background-color: ${({ active }) => (active ? 'var(--primary-blue)' : '#949494')};
    margin-right: 4px;
    border: ${({ active }) => (active ? '2px solid var(--primary-blue)' : '1px solid #ccc')};
    border-radius: 1rem;
    color: white;
    font-size: 12px;
`;

export const TabContent = styled.div`

`;