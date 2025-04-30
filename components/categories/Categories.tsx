import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/redux/store';
import {Tab} from '~/components/shared/tab/Tab';

import {styles} from './styles';
import {updateSelectedCategoryId} from '~/redux/reducers/Categories';
import {Title} from '../shared/title/Title';

export function Categories() {
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  return (
    <View style={styles.categoryTabsContainer}>
      <View>
        <Title type="screen" style={styles.headerTitle}>
          Select Category
        </Title>
      </View>
      <FlatList
        data={categories.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.categoryItem} key={item.categoryId}>
            <Tab
              tabId={item.categoryId}
              title={item.name}
              onPress={value => dispatch(updateSelectedCategoryId(value))}
              isInactive={item.categoryId !== categories.selectedCategoryId}
            />
          </View>
        )}
      />
    </View>
  );
}
