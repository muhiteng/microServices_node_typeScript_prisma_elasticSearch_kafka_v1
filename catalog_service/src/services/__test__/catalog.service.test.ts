import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { MockCatalogRepository } from "../../repository/mockCatalog.repository";
import { CatalogService } from "../catalog.service";
// import { faker } from "@faker-js/faker";

const mockProduct = (rest: any) => {
    return {
      name: 'majed',
      description:'majed',
      stock: 5,
      ...rest,
    };
  };

  

describe('catalogService',()=>{
    //beforeEach(()=>{})
    test('example test',()=>{
        const a=15
        expect(a).toEqual(15)
    })
    // afterEach(()=>{})

    let repository: ICatalogRepository;

  beforeEach(() => {
    repository = new MockCatalogRepository();
  });

  afterEach(() => {
    repository = {} as MockCatalogRepository;
  });
  describe("createProduct", () => {
    test("should create product", async () => {
      const service = new CatalogService(repository);
      const reqBody = mockProduct({
        price: 1,
      });
      const result = await service.createProduct(reqBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      });
    });
   
    });




})