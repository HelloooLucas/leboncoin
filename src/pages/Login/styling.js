import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl};
	color: ${({ theme }) => theme.colors.background};
`;
