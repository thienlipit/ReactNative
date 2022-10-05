import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import Button from './Button';
import {Filter} from '../store/filters/types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {changeFilter} from '../store/filters/actions';
import colors from '../config/colors';
import {selectFilter} from '../store/filters/selectors';

interface FilterButtonProps {
  filter: Filter;
}

const FilterButton: React.FunctionComponent<FilterButtonProps> = ({filter}) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);
  const {t, i18n} = useTranslation();

  return (
    <Button
      onPress={() => dispatch(changeFilter(filter))}
      style={styles.button}
      textColor={selectedFilter === filter ? colors.black : undefined}
      title= {t(filter)}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    marginHorizontal: 5,
  },
});

export default FilterButton;
