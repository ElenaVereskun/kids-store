import ContainerAdmin from "../src/components/Admin/ContainerAdmin";
/* import { logout } from '@/redux/features/admin/authSlice'; */
import { useDispatch } from "react-redux";
/* import { AppDispatch, useAppSelector } from "../../../redux/store"; */
import styles from "./page.module.css";

export default function Admin() {
  /*   const dispatch = useDispatch<AppDispatch>();
  const username = useAppSelector(
    (state: { authReducer: { username: any } }) => state.authReducer.username
  ); */
  return (
    <div className={styles.container}>
      <button
        className={styles.button} /* onClick={() => dispatch(logout())} */
      >
        Выйти
      </button>
      <ContainerAdmin children={undefined} />
    </div>
  );
}
