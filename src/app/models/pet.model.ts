export interface PetResponse {
  status: string;
  message: { [key: string]: string[] };
}

export interface Pet {
  imageURL: string;
  breed: string;
}
