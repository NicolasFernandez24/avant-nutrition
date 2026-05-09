import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  whatsappNumber = '5491178283430';
isImageOpen: boolean = false;
  product!: Product;
  similarProducts: Product[] = [];

 products: Product[] = [
    {
      id: 1,
      name: 'Creatina One Fit 200g',
      category: 'Creatinas',
      image: 'assets/products/creatina-onefit.jpg',
      price: 24999,
      description: 'Mayor fuerza, potencia y recuperación muscular.',
      benefits: [
        '5g de creatina por porción',
        'Micronizada',
        'Mayor fuerza',
        'Mejor recuperación'
      ],
      usage: 'Tomar 1 scoop por día post entrenamiento.',
      brand: 'One Fit',
      stock: 'Disponible'
    },
    {
      id: 2,
      name: 'Creatina Star 300g',
      category: 'Creatinas',
      image: 'assets/products/creatina-star.jpg',
      price: 28999,
      description: 'Ideal para entrenamientos intensos y explosivos.',
      benefits: [
        'Mayor explosividad',
        'Mejor rendimiento',
        'Alta pureza',
        'Recuperación muscular'
      ],
      usage: 'Tomar 1 scoop diario con agua.',
      brand: 'Star Nutrition',
      stock: 'Disponible'
    },
    {
      id: 3,
      name: 'Creatina Gold Nutrition 300g',
      category: 'Creatinas',
      image: 'assets/products/creatina-gold.jpg',
      price: 31999,
      description: 'Calidad premium para resultados reales.',
      benefits: [
        '100% pura',
        'Micronizada',
        'Máxima absorción',
        'Mayor rendimiento'
      ],
      usage: 'Tomar 1 scoop diario con agua.',
      brand: 'Gold Nutrition',
      stock: 'Disponible'
    },
    {
      id: 4,
      name: 'Proteína One Fit 2lb',
      category: 'Proteínas',
      image: 'assets/products/proteina-onefit.jpg',
      price: 45999,
      description: 'Perfecta para masa muscular y recuperación.',
      benefits: [
        'Alta proteína por porción',
        'Ganancia muscular',
        'Recuperación post entrenamiento',
        'Excelente sabor'
      ],
      usage: '1 scoop post entrenamiento o entre comidas.',
      brand: 'One Fit',
      stock: 'Disponible'
    },
    {
      id: 5,
      name: 'Proteína Gold Nutrition 2lb',
      category: 'Proteínas',
      image: 'assets/products/proteina-gold.jpg',
      price: 48999,
      description: 'Proteína de alto valor biológico.',
      benefits: [
        'Proteína premium',
        'Mejor recuperación',
        'Alta absorción',
        'Ideal para volumen muscular'
      ],
      usage: '1 scoop diario con agua o leche.',
      brand: 'Gold Nutrition',
      stock: 'Disponible'
    },
    {
      id: 6,
      name: 'Proteína Star 2lb',
      category: 'Proteínas',
      image: 'assets/products/proteina-star.jpg',
      price: 46999,
      description: 'Rendimiento superior para atletas exigentes.',
      benefits: [
        'Proteína whey',
        'Recuperación rápida',
        'Más masa muscular',
        'Alto rendimiento'
      ],
      usage: '1 scoop post entrenamiento.',
      brand: 'Star Nutrition',
      stock: 'Disponible'
    },
    {
      id: 7,
      name: 'Pre Entreno One Fit',
      category: 'Pre Workout',
      image: 'assets/products/pre-entreno.jpg',
      price: 22999,
      description: 'Más energía, enfoque y explosividad.',
      benefits: [
        'Mayor energía',
        'Más enfoque',
        'Mejor rendimiento',
        'Entrenamientos intensos'
      ],
      usage: 'Tomar 30 minutos antes de entrenar.',
      brand: 'One Fit',
      stock: 'Disponible'
    },
    {
      id: 8,
      name: 'Magnesio One Fit 150g',
      category: 'Salud',
      image: 'assets/products/magnesio.jpg',
      price: 14999,
      description: 'Apoyo muscular, descanso y recuperación.',
      benefits: [
        'Mejor descanso',
        'Recuperación muscular',
        'Apoyo al sistema nervioso',
        'Reduce calambres'
      ],
      usage: 'Tomar una porción diaria.',
      brand: 'One Fit',
      stock: 'Disponible'
    }
  ];
  

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.products.find(
      product => product.id === id
    )!;

    this.similarProducts = this.products.filter(
      product =>
        product.category === this.product.category &&
        product.id !== this.product.id
    );
  }
openImage(): void {
  this.isImageOpen = true;
}

closeImage(): void {
  this.isImageOpen = false;
}
  getWhatsappLink(product: Product): string {
    const message = `Hola! Quiero comprar ${product.name}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}