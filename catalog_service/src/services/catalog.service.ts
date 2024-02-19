import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any) {
    
    return {
        id:1,
        name:'Majed',
        description:"majed",
        price:2,
        stock:5
    };
  }

  
}
