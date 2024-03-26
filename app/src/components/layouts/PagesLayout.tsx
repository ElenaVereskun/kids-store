"use client";

import { AnimatePresence, motion } from "framer-motion";
import Footer from "../footer";
import Header from "../header";
import SearchModal from "../searchModal/searchModal";
import { useUnit } from "effector-react";
import { $searchModal } from "../../../context/modals";
import { handleCloseSearchModal } from "../../../lib/utils/commons";

import styles from "./styles.module.css";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchModal = useUnit($searchModal);

  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <AnimatePresence>
          {searchModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SearchModal />
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={
            searchModal ? styles.searchOverlayActive : styles.searchOverlayNone
          }
          onClick={handleCloseSearchModal}
        ></div>
        <Footer />
      </body>
    </html>
  );
}
