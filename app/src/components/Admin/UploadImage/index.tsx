'use client';

import React, { FC, useEffect } from 'react';
import Image from 'next/image';

import styles from './style.module.css';
import { FieldError } from 'react-hook-form';

/**
 * компонент UploadImage
 * @returns component
 */

interface UploadImageProps {
  /** id элемента. Должно быть уникальным */
  id: number | string;
  /** name для input */
  name?: string;
  /** метод для передачи в родительский компонент файла */
  onFileSelect: (file: File) => void;
  marginTop: number;
  value: string | undefined;
  error?: FieldError;
  required?: boolean;
}

const UploadImage: FC<UploadImageProps> = ({
  id,
  name,
  onFileSelect,
  marginTop,
  value,
  error,
  required
}) => {
  const [imageSrc, setImageSrc] = React.useState(value);

  useEffect(() => {
    if (typeof value == 'string') {
      setImageSrc(value);
    }
  }, [value]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target.files) return;

    // Файл не может быть больше 5 МБ
    if (Number((target.files[0].size / 1024 / 1024).toFixed(5)) > 5) {
      return;
    }

    const image = target.files[0];
    onFileSelect(image);
    const src = URL.createObjectURL(image);
    setImageSrc(src);
  };

  return (
    <div className={styles.upload} style={{ marginTop: `${marginTop}px` }}>
      <div className={styles.image_block}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="upload"
            priority
            fill
            unoptimized={true}
            className={styles.uploaded_image}
          />
        ) : (
          <Image src="/empty-image.svg" alt="upload" width={128} height={128} priority />
        )}
      </div>
      <div className={styles.wrapper_upload_button}>
        <div className={`${styles.wrapper_star} ${required || error ? styles.require_fail : ''}`}>
          *
        </div>
        <label
          htmlFor={`upload-image-${id}`}
          className={`${styles.upload_button} ${
            required || error ? styles.require_fail_image : ''
          }`}
        >
          Загрузить изображение
          <Image src="/upload-image.svg" alt="upload" width={24} height={24} priority />
        </label>
      </div>
      <input
        className={styles.upload_input}
        type="file"
        id={`upload-image-${id}`}
        name={name}
        accept=".gif, .jpg, .jpeg, .png"
        onInput={onChange}
      />
    </div>
  );
};

export default UploadImage;
