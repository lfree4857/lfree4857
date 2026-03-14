'use client';

import { useReducer } from 'react';
import { CommonReducer } from '../Context/CommonReducer';
import { CommonContext, initialValues } from '../Context/CommonContext';
import { SnackBar } from '../components/SnackBar';
import { Loader } from '../components/Loader';
import ScriptLoader from './ScriptLoader';

export default function ClientProvider({ children }) {
  const [state, dispatch] = useReducer(CommonReducer, initialValues);

  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      {children}
      <SnackBar />
      <Loader />
      <ScriptLoader />
    </CommonContext.Provider>
  );
}
