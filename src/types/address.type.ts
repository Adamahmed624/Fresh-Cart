export interface AddressesRoot {
  results: number
  status: string
  data: AddressesData[]
}

export interface AddressesData {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}
