import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '~/redux/store';
import {Tab} from '~/components/shared/tab/Tab';

import {styles} from './styles';
import {updateSelectedCategoryId} from '~/redux/reducers/Categories';
import {Title} from '../shared/title/Title';
import {useInfiniteScroll} from '~/hooks/infinite-scroll/useInfiniteScroll';

export function Categories() {
  const categoriesPageSize = 4;
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const {renderedData: categoriesData, loadMoreData} = useInfiniteScroll({
    initialData: categories.categories,
    pageSize: categoriesPageSize,
  });

  return (
    <View style={styles.categoryTabsContainer}>
      <View>
        <Title type="screen" style={styles.headerTitle}>
          Select Category
        </Title>
      </View>
      <FlatList
        data={categoriesData}
        keyExtractor={item => item.categoryId.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreData}
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
