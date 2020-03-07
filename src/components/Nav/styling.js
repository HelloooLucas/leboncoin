import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.nav`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme }) => theme.colors.private};
`;

export const Greeting = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes.xxl };
`;
