'use client';

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './style.module.css';

interface UploadImageProps {
  /** id элемента. Должно быть уникальным */
  id: number | string;
  /** name для input */
  name: string;
  /** метод для передачи в родительский компонент файлов */
  onFilesSelect: (files: (string | File)[]) => void;
  /** имеющиеся фото*/
  value: string[] | undefined;
}

const UploadImages: FC<UploadImageProps> = ({ id, name, onFilesSelect, value }) => {
  const [files, setFiles] = useState<(string | File)[]>(value || []);

  useEffect(() => setFiles(value || []), [value, setFiles]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target.files) return;

    const filesArray = Array.from(target.files);
    const newFiles = [...files, ...filesArray];

    setFiles(newFiles);
    onFilesSelect(newFiles);

    target.value = '';
  };

  const onRemove = (index: number) => {
    const filteredFiles = files.filter((file, fileIndex) => fileIndex !== index);

    setFiles(filteredFiles);
    onFilesSelect(filteredFiles);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.upload_images}>
        {files.map((file, index) => (
          <div key={index} className={styles.image}>
            {typeof file === 'string' ? file : file.name}
            <Image
              src="/remove.svg"
              alt="close"
              width={24}
              height={24}
              onClick={() => onRemove(index)}
            />
          </div>
        ))}
      </div>
      <div className={styles.upload_field}>
        <label className={styles.upload_button} htmlFor={`upload-images-${id}`}>
          Загрузить изображение
          <Image src="/upload-image.svg" alt="upload" width={24} height={24} priority />
        </label>
        <input
          className={styles.upload_input}
          type="file"
          id={`upload-images-${id}`}
          name={name}
          accept=".gif, .jpg, .jpeg, .png"
          multiple
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UploadImages;
