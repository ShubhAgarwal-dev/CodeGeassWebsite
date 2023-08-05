import blocksData from '@/types/Block/blockCard.types'

import SCA from '@/public/Projects/Images/IMG_1_Stock.png'
import gd from '@/public/Projects/Images/Gaming Image.jpg'

const data: blocksData = [
  {
    heading: 'Student Companion App',
    content:
      'We will try to replicate GRAND Chip, or try to get near that to make a universal encoding and decoding FPGA',
    knowMoreLink:
      'https://docs.google.com/document/d/1Xg70yNGxvFGi6nF9kM9sy2WNs6MPmpqwWJGSUkJJ5DY/edit?usp=sharing',
    image: SCA.src,
    time: 'FOSS',
  },
  {
    heading: '2D-Platformer Game',
    content:
      'Currently we are developing a 2D top down game ,based on the theme of ruin exploration, set on a fictional stage. \
      This game boasts a rich world filled with exploration and adventure.',
    knowMoreLink:
      'https://docs.google.com/document/d/1QNEcDAQeoi_AZt7qXQF7T2RmdZCxovqfjODHy5joCzw/edit?usp=sharing',
    image: gd.src,
    time: 'Game Dev',
  },
]

export default data
