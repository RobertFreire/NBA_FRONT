import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	@media (max-width: 1024px) {
		text-wrap: nowrap;
	}
    margin-top: 4rem;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow-y: hidden !important;

	@media (max-width: 1024px) {
		flex-direction: column;
		gap: 1rem;
		padding-left: 0rem !important;
	}
`;

export const TableContainer = styled.div`
	max-height: 50rem;
	overflow: auto;
	width: 100%;
	padding-right: 0.1rem;
	&::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	&::-webkit-scrollbar-track {
		background-color: #e9eaeb;
		border-radius: 0.6rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #258bdb;
		border-radius: 0.6rem;
	}
`;

export const _Table = styled.table`
	width: 100%;
	background-color: #f0f3f8;
	font-size: 1.4rem;
	border-collapse: collapse;
`;

export const TableHeader = styled.thead`
	z-index: 1;
	position: sticky;
	top: 0;
    background-color: var(--primary-blue);
`;

export const TH = styled.th`
    color: #fff;
    padding: 1.4rem 2rem;
	text-align: start;
	font-weight: 600;
	&:nth-child(1) {
		border-radius: 1rem 0 0 0;
	}
	&:nth-last-child(1) {
		border-radius: 0 1rem 0 0;
	}

	& > div {
		display: flex;
		align-items: center;
		column-gap: 1rem;
	}

	&:hover button {
		visibility: visible;
	}
`;

export const TD = styled.td`
	color: black;
	padding: 1.4rem 2rem;

	& > div {
		display: flex;
		justify-content: flex-end;
	}
`;

export const TR = styled.tr`
	& ~ & {
		border-top: 0.1rem solid #c8d3e0;
	}

	&:last-child {
		border-bottom: 0.1rem solid #c8d3e0;
	}
`;