export interface ind_block_data {
  id: string
  title: string
  description: string
  url: string
  image_url: string
  start_month: string
}

export default interface blocksData extends Array<ind_block_data> {}
