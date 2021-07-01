import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRecoilState, RecoilRoot } from 'recoil';
import { RecoilDebugObserver } from 'reactotron-recoil-plugin';
import { instance } from './reactotronConfig';
import { exampleAtom } from './exampleRecoil';

function TestComponent() {
  const [state, setState] = useRecoilState(exampleAtom);
  return (
    <View style={styles.container}>
      <Text onPress={() => setState(3)}>Result: {state}</Text>
    </View>
  );
}
export default function App() {
  return (
    <RecoilRoot>
      <RecoilDebugObserver instance={instance} />
      <TestComponent />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
