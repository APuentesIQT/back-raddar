export class Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  fechaCreacion: Date;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.fechaCreacion = new Date();
  }
}
