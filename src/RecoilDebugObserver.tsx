import React from 'react';
import { useRecoilTransactionObserver_UNSTABLE } from 'recoil';

function RecoilDebugObserver(props: any): JSX.Element {
  const { instance } = props;
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      const info = snapshot.getInfo_UNSTABLE(node);
      instance.showRedux(node.key, info.loadable?.contents, false);
    }
  });
  return <React.Fragment />;
}

export default RecoilDebugObserver;
