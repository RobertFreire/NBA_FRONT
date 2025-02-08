import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
	$current_page: boolean;
}

export const Container = styled(Link) <ContainerProps>`
	display: flex;
	align-items: center;
	margin: 0.8rem 0;
	background-color: ${({ $current_page }) =>
		$current_page ? 'var(--primary-blue)' : 'none'};
	color: ${({ $current_page }) =>
		$current_page ? '#FFF' : 'var(--dark-gray)'};
	padding: 1.6rem;
	font-weight: 600;
	border-radius: 0.8rem;
	border-bottom: 1px solid #dbdce7;
	border-bottom: ${({ $current_page }) =>
		$current_page ? 'none' : '1px solid #dbdce7'};
	svg {
		color: ${({ $current_page }) =>
		$current_page ? '#FFF' : 'var(--dark-gray)'};
		height: 2rem;
		width: 2rem;
		margin-right: 1.5rem;

	}

	span {
		font-size: 1.6rem;
	}

	&:hover {
		filter: none;
	}		
`;

export const ChatsOpenIcon = styled.div<ContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	margin-left: auto;
	border-radius: 50px;
	border: 0.1rem solid;
	border-color: #43f8a7;
	background-color: #43f8a7;
	color: #f0f2ff;
	font-size: 1.2rem;
	font-weight: bolder;
`;
