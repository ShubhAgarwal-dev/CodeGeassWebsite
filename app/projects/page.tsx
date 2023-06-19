import Block from '@/components/Block/Block';
import data from './data';

export const metadata = {
  title: 'Projects for Coding Club',
  description: 'Coded by Shubh Agarwal (https://github.com/ShubhAgarwal-dev)',
};

export default function Project() {
  return (
    <>
      <Block title="Projects" blocksData={data} />
    </>
  );
}
