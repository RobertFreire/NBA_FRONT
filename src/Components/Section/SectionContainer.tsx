import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export function SectionContainer({
	children,
	color,
	...rest
}: HTMLAttributes<HTMLDivElement>) {
	return <SectionContainerStyle color={color} {...rest}>{children}</SectionContainerStyle>;
}

interface SectionContainerProps {
	color?: string;
}

const SectionContainerStyle = styled.div<SectionContainerProps>`
	display: flex;
	flex-direction: column;
	background-color: ${({ color }) => color};
	row-gap: 1rem;
	padding: 2rem;
	border-radius: 1.6rem;
`;
