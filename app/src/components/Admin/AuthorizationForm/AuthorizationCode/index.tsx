'use client';

import TimerAuthorization from '../TimerAuthorization';
import InputAdmin from '../../../../shared/ui/Input';
import styles from './style.module.css';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { IFormCode, IPropsCode } from '@shared/api/types/interface/IAuthorization';

const AuthorizationCode = (props: IPropsCode) => {
  const email = props.email;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<IFormCode>({
    defaultValues: {
      code: ''
    },
    mode: 'onSubmit'
  });

  const submit: SubmitHandler<IFormCode> = (data) => {
    reset();
    return data;
  };

  return (
    <>
      <span className={styles.title_form}>Введите код:</span>
      <form className={styles.authorization_form} onSubmit={handleSubmit(submit)}>
        <Controller
          name="code"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputAdmin value={value} onChange={onChange} content="Код" type="text" error={error}>
              {
                <div className={styles.code_prompt}>
                  На почту {email} отправлен код подтверждения
                </div>
              }
            </InputAdmin>
          )}
        />
        {errors.code?.type === 'required' && (
          <div className={styles.require_fail}>*Поля обязательные для заполнения</div>
        )}
      </form>
      <span className={styles.code_prompt}>
        Получить новый код можно через <TimerAuthorization seconds={30} />
      </span>
    </>
  );
};

export default AuthorizationCode;
