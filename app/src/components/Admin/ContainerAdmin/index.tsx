import styles from "./styles.module.css";

import NavAdmin from "../NavAdmin/index";

const ContainerAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <NavAdmin />
      <div>{children}</div>
    </div>
  );
};

export default ContainerAdmin;
