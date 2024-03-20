'use client';

import InputAdmin from '../../../../shared/ui/Input';
import styles from './styles.module.css';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import React, { useEffect } from 'react';
import Button from '@shared/ui/Button';

interface Form {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

type Props = {
  id: number | undefined;
  login: string | undefined;
};

const formFields = [
  { name: 'oldPassword', content: 'Введите старый пароль', type: 'password' },
  { name: 'newPassword', content: 'Придумайте новый пароль', type: 'password' },
  { name: 'repeatPassword', content: 'Повторите новый пароль', type: 'password' }
];

const getUser = (id: number | undefined) => {
  return id;
};

const ChangePasswordForm = ({ id, login }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Form>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: ''
    },
    mode: 'onSubmit',
    criteriaMode: 'all'
  });

  useEffect(() => {
    getUser(id);
  });

  const submit: SubmitHandler<Form> = (data) => {
    return data;
  };
  return (
    <>
      <span className={styles.title_form}>Сменить пароль пользователя {login ? login : false}</span>
      <form className={styles.container_form} onSubmit={handleSubmit(submit)}>
        {formFields.map((item, index) => (
          <Controller
            key={index}
            name={item.name as keyof Form}
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <InputAdmin
                  value={value}
                  onChange={onChange}
                  content={item.content}
                  type={item.type}
                  error={error}
                ></InputAdmin>
              </>
            )}
          />
        ))}
        {Object.keys(errors).find(
          (key) => errors[key as keyof typeof errors]?.type === 'required'
        ) !== undefined ? (
          <div className={styles.require_fail}>*Поля обязательные для заполнения</div>
        ) : (
          false
        )}
        <Button text={'Сохранить'} variant={'blue'} type={'big'} marginTop={'10px'} />
      </form>
    </>
  );
};

export default ChangePasswordForm;
