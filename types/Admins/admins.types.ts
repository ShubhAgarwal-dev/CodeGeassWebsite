export interface ind_data {
  name: string
  img: string
  email: string
  linkedIn?: string
  instagram?: string
  division?: string
}

export interface admin_data extends Array<ind_data> {}
