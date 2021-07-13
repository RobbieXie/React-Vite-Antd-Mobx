import React from 'react';
import { notification } from 'antd';

export const openNotificationWithIcon = (type: any, message: string, desc: string) => {
    notification[type]({
      message: message,
      description: desc,
    });
  };