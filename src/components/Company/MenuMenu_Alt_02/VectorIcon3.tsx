import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L8 6.11959e-07' stroke='#171740' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
