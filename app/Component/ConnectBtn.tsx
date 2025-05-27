import { useAppKitTheme } from '@reown/appkit/react';
import React, { useEffect } from 'react';

const ConnectBtn = () => {
  const { setThemeVariables } = useAppKitTheme();

  // useEffect(() => {
  //   setThemeVariables({
  //     '--w3m-accent': '#15bffd',
    
  //   });
  // }, [setThemeVariables]);

  return <w3m-button />;
};

export default ConnectBtn;
