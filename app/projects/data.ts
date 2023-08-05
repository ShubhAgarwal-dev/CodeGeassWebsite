import blocksData from '@/types/Block/blockCard.types'

import basic_img from '@/public/Projects/Images/GRAND.png'

const data: blocksData = [
  {
    heading: 'Student Companion App',
    content:
      'We will try to replicate GRAND Chip, or try to get near that to make a universal encoding and decoding FPGA',
    knowMoreLink:
      'https://docs.google.com/document/d/1Xg70yNGxvFGi6nF9kM9sy2WNs6MPmpqwWJGSUkJJ5DY/edit?usp=sharing',
    image: basic_img.src,
    time: 'FOSS',
  },
  {
    heading: '2D-Platformer Game',
    content:
      'Currently we are developing a 2D top down game ,based on the theme of ruin exploration, set on a fictional stage. This game boasts a rich world filled with exploration and adventure.',
    knowMoreLink:
      'https://docs.google.com/document/d/1QNEcDAQeoi_AZt7qXQF7T2RmdZCxovqfjODHy5joCzw/edit?usp=sharing',
    image: basic_img.src,
    time: 'Game Dev',
  },
]

export default data
