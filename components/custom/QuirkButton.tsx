'use client';

import { useUniformContext } from '@uniformdev/canvas-next-rsc-v2/component';

export const QuirkButton = () => {
  const { context } = useUniformContext();

  return (
    <button
      onClick={async () => {
        await context?.update({
          quirks: {
            country: 'Canada',
          },
        });
      }}
    >
      Set Country = Canada
    </button>
  );
};
