'use client';

import HeaderAdmin from '@widgets/Admin/HeaderAdmin';
import ContainerAdmin from '@widgets/Admin/ContainerAdmin';
import Footer from '@widgets/Footer';
import { AppDispatch, useAppSelector } from '@/redux/store';
import AuthorizationForm from '@widgets/Admin/AuthorizationForm';
import { useEffect } from 'react';
import { loadFromSessionStorage } from '@/redux/features/admin/authSlice';
import { useDispatch } from 'react-redux';

const CheckAuthorization = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    dispatch(loadFromSessionStorage());
  }, [dispatch]);

  return (
    <>
      {isAuth ? (
        <>
          <HeaderAdmin />
          <ContainerAdmin>{children}</ContainerAdmin>
          <Footer />
        </>
      ) : (
        <AuthorizationForm />
      )}
    </>
  );
};

export default CheckAuthorization;
