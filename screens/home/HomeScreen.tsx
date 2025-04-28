import React from 'react';
import {Pressable, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {ScreenContainer} from '~/components/shared/screen-container/ScreenContainer';
import {Title} from '~/components/shared/title/Title';

import {updateFirstName} from '~/redux/reducers/User';
import type {RootState} from '~/redux/store';

export function HomeScreen(): React.JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <ScreenContainer>
      <Title>{user.firstName + ' ' + user.lastName}</Title>
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'M'}))}>
        <Text>Press Me to change first name</Text>
      </Pressable>
    </ScreenContainer>
  );
}
