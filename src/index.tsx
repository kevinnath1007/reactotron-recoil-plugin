import RecoilDebugObserver from './RecoilDebugObserver';
import reactotronRecoilPlugin from './ReactotronRecoilPlugin';

export { RecoilDebugObserver, reactotronRecoilPlugin };

declare module 'reactotron-recoil-plugin' {
  export interface Reactotron {
    showRedux?: () => void;
  }
}
