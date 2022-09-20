import React, {forwardRef} from 'react';

type buttonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, buttonType>((props, ref) => {
  return (
    <button
      className={'bg-blue-500 hover:bg-blue-700 text-white ' +
        'font-bold py-2 px-4 rounded-full'}
      type={'button'}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'button';


