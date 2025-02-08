import styled from 'styled-components';

export const SidebarContainer = styled.aside`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	width: 36rem;
	padding: 3.2rem 3.6rem;
	border-radius: 0px 1.6rem 1.6rem 0px;
	background: var(--primary-brown);
	row-gap: 2.4rem;

	/* z-index: 1; */

	@media (max-width: 650px) {
		width: 32rem;
		padding: 3.2rem 2rem;
	}
`;

export const OpenCompanyOptionsBtn = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	column-gap: 1rem;
	&:hover {
		filter: none;
	}
	& > span {
		display: flex;
		color: var(--dark-gray);
		font-size: 1.6rem;
		font-weight: 600;
		width: 100%;
		justify-content: start;
	}
	& > svg {
		color: var(--primary-blue);
		min-width: 3rem;
		min-height: 3rem;
	}
`;

export const DropdownContainerProduct = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 0.4rem;
	background-color: var(--white);
	border-radius: 0.8rem;
	min-width: 21rem;
	box-shadow: -1px 2px 3px 0px rgba(0, 0, 0, 0.1);
	border: 1px solid var(--primary-blue);
	font-family: 'Poppins', sans-serif;
	z-index: 99999;

	& a,
	button {
		text-align: center;
		font-family: 'Poppins', sans-serif;
		background: none;
		width: 100%;
		color: var(--dark-gray);
		font-size: 1.6rem;
		font-weight: 600;
		&:hover {
			filter: none;
		}
	}
`;

export const DropdownItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.6rem 1.6rem;
	width: 100%;
`;

export const OpenProductOptionsBtn = styled.button`
	display: flex;
	align-items: center;
	column-gap: 1.6rem;
	border-radius: 0.8rem;
	background: #e5eaf2;
	padding: 1.3rem 1.5rem 1.3rem 2.4rem;
	color: var(--dark-gray);
	font-size: 1.6rem;
	line-height: 1rem;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	&:hover {
		filter: none;
	}
	& > svg {
		color: var(--primary-blue);
		width: 3rem;
		height: 3rem;
	}
`;

export const PopoverContainer = styled.div`
	display: none;

	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
	}
`;

export const CompanyLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16.4rem;
	height: 10.4rem;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

export const CompanyDisplay = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	column-gap: 1.4rem;
	& > span {
		display: flex;
		color: var(--dark-gray);
		font-size: 1.6rem;
		font-weight: 600;
		width: 100%;
		justify-content: start;
	}
	& > svg {
		color: var(--primary-blue);
		width: 3rem;
		height: 3rem;
	}
`;

export const DropdownContainer = styled.div`
	transform: translateX(50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 1rem;
	margin-top: 0.5rem;
	background-color: var(--white);
	border-radius: 0.8rem;
	min-width: 25rem;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	& a,
	button {
		&:hover {
			filter: none;
		}
	}
`;

export const CompanyLink = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	text-align: start;
	padding: 0.5rem;
	border-radius: 0.4rem;
	color: var(--black);
	font-size: 1.4rem;
	margin: 1rem 0;
	& svg {
		margin-right: 1rem;
	}
`;

export const CompaniesListTitle = styled.h2`
	width: 100%;
	margin-top: 1.2rem;
	padding: 0 1.2rem;
`;

export const CompaniesList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	list-style: none;
	margin-top: 1rem;
`;

export const CompanyContainer = styled.li`
	width: 100%;
	border-top: 0.1rem solid var(--dark-gray);
	/* border-bottom: 0.1rem solid var(--dark-gray); */
	& button {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1.2rem;
		color: var(--dark-gray);
		background: none;
		& svg {
			width: 1.4rem;
			height: 1.4rem;
			margin-right: 1rem;
		}
	}
`;

interface CompanyBalanceContainerProps {
	showBalance: boolean;
}
export const CompanyBalanceContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.4rem;
	color: var(--dark-gray);
	border-radius: 1.6rem;
	border-bottom: 1px solid #258bdb;
	column-gap: 1rem;
	padding-bottom: 2.4rem;
	& > div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
`;

export const Balance = styled.span<CompanyBalanceContainerProps>`
	display: flex;
	align-items: center;
	color: #258bdb;
	background-color: transparent;
	font-size: 3.6rem;
	width: 100%;
	font-weight: 800;
	height: 4rem;
	border-radius: 0.8rem;
	margin: 1rem 0 1.6rem 0;

	> div {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}
`;

export const SmallBalanceContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.8rem;
	white-space: nowrap;
	margin-bottom: 0.8rem;
	& > p {
		width: 100%;
	}

	div {
		display: flex;
		align-items: center;
		gap: 0.2rem;
	}
`;
export const SmallBalance = styled.span<CompanyBalanceContainerProps>`
	display: flex;
	align-items: center;
	/* background-color: ${({ showBalance }) =>
		showBalance ? 'transparent' : 'var(--light-gray)'};
	font-size: ${({ showBalance }) => (showBalance ? 'inherit' : '0px')}; */
	background-color: transparent;
	font-size: 1.4rem;
	width: 100%;
	font-weight: initial;
	height: 2rem;
	border-radius: 0.8rem;
`;

export const ToggleBalanceVisibilityBtn = styled.button`
	background: none;
	display: flex;
	align-items: center;
	margin-left: auto;
	& svg {
		width: 2rem;
		height: 2rem;
		transition: filter 0.2s;
		color: #3d3e40;
		&:hover {
			filter: opacity(0.7);
		}
	}
`;

