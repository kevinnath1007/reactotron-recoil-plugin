import RecoilDebugObserver from './RecoilDebugObserver';
import reactotronRecoilPlugin from './reactotronRecoilPlugin';

export { RecoilDebugObserver, reactotronRecoilPlugin };

declare module 'reactotron-recoil-plugin' {
  export interface Reactotron {
    showRedux?: () => void;
  }
}
