"use client";
import Image from "next/image";

import CloseButton from "../../../../public/images/close.svg";
import styles from "./searchModal.module.css";
import { handleCloseSearchModal } from "../../../lib/utils/commons";

const SearchModal = () => {
  return (
    <div className={styles.searchModal}>
      <button onClick={handleCloseSearchModal}>
        <Image src={CloseButton} alt="close" width={50} height={50} />
      </button>
      <div className={styles.searchTop}>
        <label>
          <input placeholder="Название товара, категория, тип ..." />
        </label>
      </div>
    </div>
  );
};
export default SearchModal;
