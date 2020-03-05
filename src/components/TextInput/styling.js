import styled from 'styled-components';

export const Input = styled.input`
	${({ theme }) => ({ ...theme.neumorphism.inset })};
	${({ long }) => long ? ({ flex: 1 }) : ({ width: '250px' })};
	color: ${({ theme }) => theme.colors.darkGrey };
	height: 50px;
	margin-right: 30px;
	padding-left: 20px;
	font-size: ${({ theme }) => theme.fontSizes.xl };
	outline: none;

	::placeholder {
		font-style: italic;
	}
`;
