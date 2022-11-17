export interface IProduct {
  id: number;
  name: string;
  price: number;
  color: string;
}

export interface ICustomer {
  id: number;
  name: string;
  email: string;
  address: string;
  postCode?: string,
  dob?: string,
  gender?: boolean,
  phone?: string,
  address1?: string
  address2?: string
}
