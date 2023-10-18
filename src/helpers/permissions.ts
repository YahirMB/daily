import { PermissionsAndroid } from 'react-native';

export async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
  
      if (
        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        // Los permisos fueron otorgados, puedes utilizar react-native-image-picker
        return true
      } else {
        // Los permisos no fueron otorgados, maneja el caso en consecuencia
        return false
      }
    } catch (err) {
      console.warn(err);
    }
  }
  