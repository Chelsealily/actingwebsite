declare module '@splidejs/react-splide' {
    import type { FC } from 'react';
    import type { Options } from '@splidejs/splide';
  
    export interface SplideProps {
      options?: Options;
      extensions?: any;
      hasTrack?: boolean;
      children?: React.ReactNode;
      className?: string;
      tag?: keyof JSX.IntrinsicElements;
      [key: string]: any;
    }
  
    export const Splide: FC<SplideProps>;
    export const SplideSlide: FC<{ className?: string; [key: string]: any }>;
  }
  