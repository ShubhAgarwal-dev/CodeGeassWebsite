export interface ind_block_data {
  heading: string
  content: string
  knowMoreLink: string
  image: string
  time?: string
}

export default interface blocksData extends Array<ind_block_data> {}
