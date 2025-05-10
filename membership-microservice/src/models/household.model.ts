export interface Household {
  Id?: number;
  StreetAddress: string;
  City: string;
  Province: string;
  PostalCode: string;
  Country?: string;
  PhoneNumber?: string;
  Email?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
