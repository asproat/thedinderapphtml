import { memo, SVGProps } from 'react';

const VectorIconFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.00879 10.125L9.50871 6.86742H6.38297V4.75348C6.38297 3.86227 6.81961 2.99355 8.21953 2.99355H9.64055V0.220078C9.64055 0.220078 8.35102 0 7.11809 0C4.54395 0 2.86137 1.56023 2.86137 4.38469V6.86742H0V10.125H2.86137V18H6.38297V10.125H9.00879Z'
      fill='#FAFAFF'
    />
  </svg>
);

const Memo = memo(VectorIconFacebook);
export { Memo as VectorIconFacebook };
