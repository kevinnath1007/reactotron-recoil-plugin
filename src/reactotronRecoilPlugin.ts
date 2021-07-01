import type { ReactotronCore } from 'reactotron-core-client';

function reactotronRecoilPlugin() {
  return (reactotron: ReactotronCore) => {
    return {
      features: {
        showRedux: (name?: string, action?: any, important?: boolean) => {
          reactotron.send(
            'state.action.complete',
            {
              name,
              action,
              ms: 10,
            },
            important
          );
        },
      },
    };
  };
}

export default reactotronRecoilPlugin;
