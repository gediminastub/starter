import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from './Button';

describe('Test', () => {
  // it('renders a heading', async () => {
  //   const ctx = await createContextInner({session: null});
  //   const caller = appRouter.createCaller(ctx);
  //   render(<Home/>);
  //
  //   const heading = screen.getByRole('heading', {
  //     name: /Create T3 App/i,
  //   });
  //
  //   expect(heading).toBeInTheDocument();
  // });

  it('renders a button', () => {
    render(<Button>test</Button>);

    const heading = screen.getByRole('button', {
      name: /test/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
