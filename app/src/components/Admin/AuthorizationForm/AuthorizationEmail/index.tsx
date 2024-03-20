'use client';

import { IFormEmail, IPropsEmail } from '@shared/api/types/interface/IAuthorization';
import InputAdmin from '../../../../shared/ui/Input';
import styles from './style.module.css';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

const AuthorizationEmail = (props: IPropsEmail) => {
  const onChangeTypeForm = props.onChangeTypeForm;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<IFormEmail>({
    defaultValues: {
      email: ''
    },
    mode: 'onSubmit'
  });

  const submit: SubmitHandler<IFormEmail> = (data: IFormEmail) => {
    reset();
    onChangeTypeForm(data.email);
  };

  return (
    <>
      <span className={styles.title_form}>Войдите по почте:</span>
      <form className={styles.authorization_form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputAdmin
              value={value}
              onChange={onChange}
              content="Почта"
              type="email"
              error={error}
            >
              {
                <div className={styles.email_prompt}>
                  Только для пользователей с указанной почтой
                </div>
              }
            </InputAdmin>
          )}
        />
        {errors.email?.type === 'required' && (
          <div className={styles.require_fail}>*Поля обязательные для заполнения</div>
        )}
        <button className={styles.submit_form}>Получить код</button>
      </form>
    </>
  );
};

export default AuthorizationEmail;
