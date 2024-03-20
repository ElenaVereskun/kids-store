'use client';

import InputAdmin from '../../../../shared/ui/Input';
import styles from './style.module.css';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { fetchLogin } from '@/redux/features/admin/authSlice';
import { IFormLogin } from '@shared/api/types/interface/IAuthorization';
import { useAppSelector } from '../../../../redux/store';

const formFields = [
  { name: 'username', content: 'Логин', type: 'text' },
  { name: 'password', content: 'Пароль', type: 'password' }
];

const AuthorizationLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const auth = useAppSelector((state) => state.authReducer);
  const errAuth = auth.error ? { type: 'required' } : undefined;
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormLogin>({
    defaultValues: {
      username: '',
      password: '',
      remember: false
    },
    mode: 'onSubmit',
    criteriaMode: 'all'
  });

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const submit: SubmitHandler<IFormLogin> = async (data: IFormLogin) => {
    dispatch(fetchLogin({ username: data.username, password: data.password }));
  };

  return (
    <>
      <span className={styles.title_form}>Пожалуйста, авторизуйтесь:</span>
      <form className={styles.authorization_form} onSubmit={handleSubmit(submit)}>
        {formFields.map((item, index) => (
          <Controller
            key={index}
            name={item.name as 'username' | 'password'}
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <InputAdmin
                  forwardedRef={item.name === 'username' ? usernameRef : undefined}
                  value={value}
                  onChange={onChange}
                  content={item.content}
                  type={item.type}
                  error={error || errAuth}
                >
                  {errAuth && item.name === 'username' && (
                    <div className={styles.authorization_fail}>Неправильный логин или пароль</div>
                  )}
                </InputAdmin>
              </>
            )}
          />
        ))}
        <label className={styles.label_remember_form}>
          Запомнить меня
          <Controller
            name="remember"
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                className={styles.input_remember_form}
                checked={value}
                onChange={onChange}
                type="checkbox"
              ></input>
            )}
          />
        </label>
        {(errors.username?.type === 'required' || errors.password?.type === 'required') && (
          <div className={styles.require_fail}>*Поля обязательные для заполнения</div>
        )}
        <button className={styles.submit_form} type="submit">
          Вход
        </button>
      </form>
    </>
  );
};

export default AuthorizationLogin;
