import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

type Props = {
	icon: ComponentType<IconBaseProps>;
	title: string;
	path: string;
	current_page: boolean;
	chatsOpen?: number;
};

export function SidebarLink({
	icon: Icon,
	title,
	path,
	current_page,
}: Props) {
	return (
		<S.Container to={path} $current_page={current_page}>
			{Icon && <Icon />}
			<span>{title}</span>
		</S.Container>
	);
}
