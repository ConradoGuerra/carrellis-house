import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [
    {
      id: 1,
      name: 'Macrame Salva Vidas',
      price: 20.0,
      description:
        'Macrame feito com corda de navio afundado há 7248 anos luz.',
      photo:
        'https://images.pexels.com/photos/12072268/pexels-photo-12072268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Lençol do Rei Machei',
      price: 20.0,
      description: 'Lençol muito foda feito por mim.',
      photo:
        'https://img.freepik.com/free-photo/white-comfortable-pillow-bed-decoration-interior_74190-10084.jpg?w=1060&t=st=1659281355~exp=1659281955~hmac=f038be7457b1762f6be1c6eed98555b28aa74e69817a6be366433a4582d1e77c',
    },
    {
      id: 3,
      name: 'Bolsa da Chucurinha',
      price: 20.0,
      description: 'Bolsa fodaça que fiz agora',
      photo:
        'https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  getProducts() {
    return this.products;
  }

  constructor() {}
}
