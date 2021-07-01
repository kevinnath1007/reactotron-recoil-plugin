import Reactotron from 'reactotron-react-native';
// @ts-ignore
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { reactotronRecoilPlugin } from 'reactotron-recoil-plugin';

export const instance = Reactotron.configure({
  name: 'example test',
  createSocket: (path) => new ReactotronFlipper(path),
})
  .useReactNative()
  .use(reactotronRecoilPlugin());

if (__DEV__) {
  instance.connect();
}

// @ts-ignore
console.tron = instance;
