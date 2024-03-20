'use client';

import styles from './styles.module.css';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Button from '@shared/ui/Button';

type Props = {
  id: number | undefined;
  login: string | undefined;
  closePopup: Dispatch<SetStateAction<boolean>>;
};

const getUser = (id: number | undefined) => {
  return id;
};

const DeleteUserForm = ({ id, login, closePopup }: Props) => {
  const handleSubmit = () => {
    closePopup(false);
  };

  useEffect(() => {
    getUser(id);
  });

  return (
    <>
      <span className={styles.title_form}>Удалить пользователя {login ? login : false}</span>
      <div className={styles.container_form}>
        <Button
          text={'Отмена'}
          variant={'red'}
          type={'big'}
          marginTop={'10px'}
          onClick={() => closePopup(false)}
        />
        <Button
          text={'Подтвердить'}
          variant={'blue'}
          type={'big'}
          marginTop={'10px'}
          onClick={() => handleSubmit()}
        />
      </div>
    </>
  );
};

export default DeleteUserForm;
