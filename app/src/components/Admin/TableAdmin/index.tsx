'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import styles from './style.module.css';

export type Columns = {
  content: string;
  type: 'text' | 'image' | 'image_array';
};

export type ManageFunctions<T> = {
  content: string;
  method: (data: T) => void;
};

interface TableProps<ObjectType> {
  columns: Columns[];
  data: ObjectType[];
  manageFunctions: ManageFunctions<ObjectType>[];
  marginTop?: number;
  modalIsOpen?: boolean;
}

const TableAdmin = <ObjectType extends object>({
  columns,
  data,
  manageFunctions,
  marginTop,
  modalIsOpen
}: TableProps<ObjectType>) => {
  const Table = useRef<null | HTMLTableElement>(null);

  if (modalIsOpen) {
    Table.current
      ?.querySelectorAll(`.${styles.visible}`)
      ?.forEach((ve) => ve.classList.remove(styles.visible));
  }

  const closeFullColumn = <T extends HTMLElement>(current: T, selector: string) => {
    return function closeFullColumnInside(ev: MouseEvent) {
      if (!current?.contains(ev.target as HTMLElement)) {
        current.querySelector(selector)?.classList.remove(styles.visible);
      }
      document.removeEventListener('click', closeFullColumnInside);
    };
  };

  const onColumnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const column = target.closest('td');

    if (!column) return;

    if (column.offsetHeight > target.scrollHeight) return;

    const fullColumn = target.querySelector('.col_wrapper_full');

    document.addEventListener('click', closeFullColumn(target, '.col_wrapper_full'));

    if (!fullColumn) return;

    fullColumn.classList.toggle(styles.visible);
  };

  const onManageColClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const target = e.currentTarget;
    const manageBlock = target.querySelector('.btns_wrapper');

    if (!manageBlock) return;

    document.addEventListener('click', closeFullColumn(target, '.btns_wrapper'));

    manageBlock.classList.toggle(styles.visible);
  };

  const displayColumn = (item: string | string[], index: number) => {
    let element = null;

    switch (columns[index].type) {
      case 'image':
        if (typeof item === 'string')
          element = (
            <div className={styles.image}>
              <Image width={36} height={36} alt="image" src={item} />
              .img
            </div>
          );
        break;

      case 'image_array':
        if (Array.isArray(item))
          element = (
            <div className={styles.images} style={{ minWidth: '100px' }}>
              {item.map((url, urlIndex) => (
                <div className={styles.image} key={`image-${urlIndex}`}>
                  <Image width={36} height={36} alt="image" src={url} />
                  .img
                </div>
              ))}
            </div>
          );
        break;
      default:
        element = item;
    }

    return (
      <div onClick={onColumnClick} className={styles.col_wrapper}>
        {element}
        <div className={`${styles.col_wrapper} ${styles.col_wrapper_full}  col_wrapper_full`}>
          {element}
        </div>
      </div>
    );
  };

  return (
    <table ref={Table} className={styles.table} style={{ marginTop: `${marginTop}px` }}>
      <thead className={styles.thead}>
        <tr className={styles.row}>
          {columns.map((col, colIndex) => (
            <th className={styles.col} key={colIndex}>
              {col.content}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((col, colIndex) => (
          <tr key={`col-${colIndex}`} className={styles.row}>
            {Object.values(col).map((item, itemIndex) => (
              <td key={`item-${itemIndex}`} className={styles.col}>
                {displayColumn(item, itemIndex)}
              </td>
            ))}
            <td className={`${styles.col} ${styles.edit_col}`} onClick={onManageColClick}>
              <span>...</span>
              <div className={`${styles.manage_btns_wrapper} btns_wrapper`}>
                <div className={styles.manage_btns}>
                  {manageFunctions.map((func, funcIndex) => (
                    <button
                      key={`manageFunc-${funcIndex}`}
                      className={styles.manage_btn}
                      onClick={() => {
                        func.method(data[colIndex]);
                      }}
                    >
                      {func.content}
                    </button>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAdmin;
