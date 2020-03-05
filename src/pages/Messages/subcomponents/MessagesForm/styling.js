import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PrivateIcon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl };
	color: ${({ theme, isPrivate }) => isPrivate ? theme.colors.private : theme.colors.public };
`;
export const SendIcon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSizes.xl };
	color: ${({ theme }) =>theme.colors.background };
`;
