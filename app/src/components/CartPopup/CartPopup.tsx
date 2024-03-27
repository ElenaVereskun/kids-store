import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IWrappedComponentProps } from "../../../types/IWrappedComponentProps";
import basket from "../../../../public/images/baske.svg";
import close from "../../../../public/images/close.svg";
import { ClickOutside } from "./ClickOutside";

import styles from "./cartPopup.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../ui/Button";

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ isOpen, setIsOpen }, ref) => {
    const handleShowPopup = () => setIsOpen(true);

    const handleHidePopup = () => setIsOpen(false);

    return (
      <div className={styles.cart} ref={ref}>
        <Link href="/cart" onMouseEnter={handleShowPopup}>
          <Image src={basket} alt="поиск" width={25} height={25} />
        </Link>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={styles.wrapper}
              onMouseLeave={handleHidePopup}
            >
              <div className={styles.container}>
                <span />
                <div className={styles.cartTop}>
                  <h3>Корзина</h3>
                  <button
                    onClick={handleHidePopup}
                    className={styles.cartButtonClose}
                  >
                    <Image src={close} alt="закрыть" width={30} height={30} />
                  </button>
                </div>

                <ul>
                  <li />
                </ul>
                <div className={styles.cartFooter}>
                  <div style={{ marginBottom: "20px" }}>
                    <span>Сумма заказа:</span>
                    <span>0 ₽</span>
                  </div>
                  <Link href="/order">
                    <Button
                      variant="brown"
                      type="big"
                      text="Оформить заказ"
                    ></Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
CartPopup.displayName = "CartPopup";
export default ClickOutside(CartPopup);
