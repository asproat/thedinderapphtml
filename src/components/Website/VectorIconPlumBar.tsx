import { memo, SVGProps } from 'react';

const VectorIconPlumBar = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 2H0' stroke='#5F0F40' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M0 7H14' stroke='#5F0F40' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 12.5H0' stroke='#5F0F40' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIconPlumBar);
export { Memo as VectorIconPlumBar };
