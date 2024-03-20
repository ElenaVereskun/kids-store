'use client';

import InputAdmin from '../../../shared/ui/Input';
import styles from './styles.module.css';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import React, { useEffect } from 'react';
import Select from '@shared/ui/Select';
import Button from '@shared/ui/Button';

interface Form {
  login: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
}

const options = [
  { title: 'Редактор', value: 'redaktor' },
  { title: 'Администратор', value: 'admin' }
];

type Props = {
  id: number | undefined;
};

const formFields = [
  { name: 'login', content: 'Логин', type: 'text' },
  { name: 'fullName', content: 'ФИО', type: 'text' },
  { name: 'email', content: 'E-mail', type: 'email' },
  { name: 'phone', content: 'Телефон', type: 'tel' }
];

const getUser = (id: number | undefined) => {
  return id;
};

const UsersEditingForm = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Form>({
    defaultValues: {
      login: 'redaktor1',
      fullName: 'Иван Иванович Иванов',
      email: 'vdffvgsd@sfvdf.ru',
      phone: '+7900-000-00-00',
      position: 'redaktor'
    },
    mode: 'onSubmit',
    criteriaMode: 'all'
  });

  const submit: SubmitHandler<Form> = (data) => {
    return data;
  };

  useEffect(() => {
    getUser(props.id);
  });

  return (
    <>
      <span className={styles.title_form}>Редактирование пользователя</span>
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
        <label className={styles.position_label}>
          Должность
          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                selected={options.find((o) => o.value === value)}
                options={options}
                onChange={onChange}
              />
            )}
          />
        </label>
        {Object.keys(errors).find(
          (key: string) => errors[key as keyof typeof errors]?.type === 'required'
        ) !== undefined ? (
          <div className={styles.require_fail}>*Поля обязательные для заполнения</div>
        ) : (
          false
        )}
        <Button
          text={'Сохранить'}
          variant={'blue'}
          type={'big'}
          marginTop={'10px'}
          borderRadius={'10px'}
        />
      </form>
    </>
  );
};

export default UsersEditingForm;
