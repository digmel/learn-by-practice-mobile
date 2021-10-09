import React, {FC} from 'react';
import {TRouterMain} from './RouterMain.type';
import {RouterUnprotected} from './RouterUnprotected';
import {RouterProtected} from './RouterProtected';

export const RouterMain: FC<TRouterMain> = () => {
  const isAuth = true;

  if (isAuth) {
    return <RouterProtected />;
  } else {
    return <RouterUnprotected />;
  }
};
