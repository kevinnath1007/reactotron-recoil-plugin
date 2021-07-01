# reactotron-recoil-plugin

integrate recoil's state changes to reactotron

this lib can only show up atom or selector that currently modified.

## Installation

```sh
npm install --save-dev reactotron-recoil-plugin
```


```sh
yarn add -D reactotron-recoil-plugin
```

## Usage

in App file
```js
import { RecoilDebugObserver } from "reactotron-recoil-plugin";
import { instance } from './reactotronConfig';

// ...
function App() {
  return (
    <RecoilRoot>
      <RecoilDebugObserver instance={instance} />
      {/* ... */}
    </RecoilRoot>
  );
}


```
in reactotronConfig file
```js
import Reactotron from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { reactotronRecoilPlugin } from 'reactotron-recoil-plugin';

export const instance = Reactotron.configure({
  name: 'example test',
  createSocket: (path) => new ReactotronFlipper(path),
})
  .useReactNative()
  .use(reactotronRecoilPlugin());

//...

```

## Contributing

contact me through my email (xineria.kn@gmail.com) if you want to learn how to contribute to the repository and the development workflow.

## License

MIT
