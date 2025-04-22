import React from 'react';
import {Avatar} from '~/components/shared/avatar/Avatar';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';

export function HomeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <Avatar avatar={require('~/assets/icons/default-avatar.icon.png')} />
    </ScreenContainer>
  );
}
