import React, { useState } from 'react';

import AppTextInput from './AppTextInput';
import Button from './Button';
import Card from './Card';
import { addTodo } from '../screens/todos/redux/actions';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AddTodo = () => {
  const { t, i18n } = useTranslation();
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!todoText) return;

    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Card title={t('Add New Todo')} >
      <AppTextInput
        onSubmitEditing={handleSubmit}
        icon="format-list-bulleted-type"
        placeholder={t('Add New Todo')}
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
      />
      <Button title={t('Add Todo')} onPress={handleSubmit} />
    </Card>
  );
};

export default AddTodo;
