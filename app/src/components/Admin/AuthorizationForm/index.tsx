'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import React from 'react';
import AuthorizationLogin from './AuthorizationLogin';
import AuthorizationEmail from './AuthorizationEmail';
import AuthorizationCode from './AuthorizationCode';

export enum ButtonText {
  ForgotPassword = 'Не помню пароль',
  Return = 'Вернуться'
}

const AuthorizationForm = () => {
  const [formType, setFormType] = useState('login');
  const [formEmail, setEmail] = useState('');

  const onChangeTypeForm = (email?: string) => {
    if (formType === 'login' || formType === 'code') {
      setFormType('email');
    } else if (formType === 'email' && email) {
      setEmail(email);
      setFormType('code');
    } else {
      setFormType('login');
    }
  };

  return (
    <div className={styles.flex_wrapper_form}>
      <div className={styles.container_form}>
        <div className={styles.logo_form}></div>
        {formType === 'login' && <AuthorizationLogin />}
        {formType === 'email' && <AuthorizationEmail onChangeTypeForm={onChangeTypeForm} />}
        {formType === 'code' && <AuthorizationCode email={formEmail} />}
        <button className={styles.forgot_password_form} onClick={() => onChangeTypeForm()}>
          {formType === 'login' ? ButtonText.ForgotPassword : ButtonText.Return}
        </button>
      </div>
    </div>
  );
};

export default AuthorizationForm;
