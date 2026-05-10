import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  whatsappNumber = '5491178283430';

  searchTerm: string = '';
  selectedCategory: string = 'Todos';

  categories: string[] = [
    'Todos',
    'Creatinas',
    'Proteínas',
    'Pre Workout',
    'Salud'
  ];

 products: Product[] = [
  {
    id: 1,
    name: 'Classic Whey One Fit 2LB',
    category: 'Proteínas',
    image: 'assets/products/proteina-onefit.jpg',
    oldPrice: 36900,
    price: 34900,
    discount: '5% OFF',
    description: 'Proteína ideal para masa muscular y recuperación.',
    benefits: [
      'Alta proteína por porción',
      'Ganancia muscular',
      'Recuperación rápida',
      'Excelente sabor'
    ],
    usage: '1 scoop post entrenamiento.',
    brand: 'One Fit',
    stock: 'Disponible'
  },

  {
    id: 2,
    name: 'Whey Protein Star 2LB',
    category: 'Proteínas',
    image: 'assets/products/proteina-star.jpg',
    oldPrice: 55900,
    price: 52900,
    discount: '5% OFF',
    description: 'Proteína whey premium para alto rendimiento.',
    benefits: [
      'Proteína whey',
      'Alta absorción',
      'Más masa muscular',
      'Recuperación muscular'
    ],
    usage: '1 scoop diario.',
    brand: 'Star Nutrition',
    stock: 'Disponible'
  },

  {
    id: 3,
    name: '100% Whey Gold 2LB',
    category: 'Proteínas',
    image: 'assets/products/proteina-gold.jpg',
    oldPrice: 55900,
    price: 51900,
    discount: '7% OFF',
    description: 'Proteína premium de alto valor biológico.',
    benefits: [
      'Proteína premium',
      'Mayor recuperación',
      'Excelente digestión',
      'Ideal volumen muscular'
    ],
    usage: '1 scoop post entrenamiento.',
    brand: 'Gold Nutrition',
    stock: 'Disponible'
  },

  {
    id: 4,
    name: 'Creatina One Fit 200G',
    category: 'Creatinas',
    image: 'assets/products/creatina-onefit.jpg',
    oldPrice: 12900,
    price: 11900,
    discount: '8% OFF',
    description: 'Mayor fuerza y recuperación muscular.',
    benefits: [
      'Micronizada',
      'Mayor fuerza',
      'Recuperación',
      'Más potencia'
    ],
    usage: '1 scoop por día.',
    brand: 'One Fit',
    stock: 'Disponible'
  },

  {
  id: 5,
  name: 'Creatina Gold 300G',
  category: 'Creatinas',
  image: 'assets/products/creatina-gold.jpg',
  oldPrice: 27900,
  price: 25900,
  discount: '7% OFF',
  description: 'Creatina premium para máximo rendimiento y recuperación.',
  benefits: [
    '100% pura',
    'Micronizada',
    'Mayor absorción',
    'Más fuerza y potencia'
  ],
  usage: '1 scoop diario con agua.',
  brand: 'Gold Nutrition',
  stock: 'Disponible'
},

{
  id: 6,
  name: 'Creatina Star 300G',
  category: 'Creatinas',
  image: 'assets/products/creatina-star.jpg',
  oldPrice: 28900,
  price: 27900,
  discount: '5% OFF',
  description: 'Ideal para entrenamientos intensos y explosivos.',
  benefits: [
    'Alta pureza',
    'Mayor explosividad',
    'Recuperación muscular',
    'Mejor rendimiento'
  ],
  usage: '1 scoop diario.',
  brand: 'Star Nutrition',
  stock: 'Disponible'
},
    {
  id: 7,
  name: 'Pre Workout One Fit 300G',
  category: 'Pre Workout',
  image: 'assets/products/pre-entreno.jpg',
  oldPrice: 21900,
  price: 20900,
  discount: '5% OFF',
  description: 'Más energía, enfoque y explosividad para tus entrenamientos.',
  benefits: [
    'Mayor energía',
    'Más enfoque',
    'Entrenamientos intensos',
    'Mejor rendimiento'
  ],
  usage: 'Tomar 30 minutos antes de entrenar.',
  brand: 'One Fit',
  stock: 'Disponible'
},

{
  id: 8,
  name: 'Citrato de Magnesio One Fit',
  category: 'Salud',
  image: 'assets/products/magnesio.jpg',
  oldPrice: 9900,
  price: 8900,
  discount: '10% OFF',
  description: 'Apoyo muscular, descanso y recuperación diaria.',
  benefits: [
    'Reduce calambres',
    'Mejor descanso',
    'Recuperación muscular',
    'Apoyo al sistema nervioso'
  ],
  usage: 'Tomar una porción diaria.',
  brand: 'One Fit',
  stock: 'Disponible'
}
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'Todos' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getWhatsappLink(product: Product): string {
    const message = `Hola! Quiero consultar por ${product.name} - $${product.price.toLocaleString('es-AR')}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  getComboWhatsappLink(comboName: string, price: number): string {
  const message = `Hola! Quiero consultar por ${comboName} - $${price.toLocaleString('es-AR')}`;
  return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
}