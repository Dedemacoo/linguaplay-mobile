import { Platform } from 'react-native';

export const getDeviceInfo = () => {
  const os = Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : 'Web';
  const version = Platform.Version || 'Unknown Version';
  
  let deviceName = 'Web Browser';
  if (Platform.OS === 'ios') deviceName = 'iPhone / iPad';
  if (Platform.OS === 'android') deviceName = 'Android Cihaz';
  
  return {
    os,
    osVersion: String(version),
    deviceName,
    lastSeen: new Date().toISOString()
  };
};
