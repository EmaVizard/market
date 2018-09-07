import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  section = 'inico';
  categoria = '';
  productoView = false;
  mainImg = 'one';
  productos = [
    {
      id: "1",
      name: 'Pantalla LED Sony 49" 4K Ultra HD HDR Smart TV',
      price: '16499',
      url: '../../assets/tecnologia/tv1.jpg',
      alterImg: '../../assets/tecnologia/tv12.jpg',
      desc: 'Pantalla LED Sony 49" 4K Ultra HD HDR Smart TV'

    },
    {
      id: "2",
      name: 'Telcel Samsung Galaxy A6 Plus Negro',
      price: '7989',
      url: '../../assets/tecnologia/cel1.jpg',
      alterImg: '../../assets/tecnologia/cel12.jpg',
      desc: 'Telcel Samsung Galaxy A6 Plus Negro'
      
    },
    {
      id: "3",
      name: 'Notebook Lenovo IP 330-15AST de 15.6" Chocolate',
      price: '9899',
      url: '../../assets/tecnologia/lap1.jpg',
      alterImg: '../../assets/tecnologia/lap12.jpg',
      desc: 'Notebook Lenovo IP 330-15AST de 15.6" Chocolate'
      
    },
    {
      id: "4",
      name: 'Pantalla LED LG 65" Ultra HD 4K Smart TV',
      price: '27999',
      url: '../../assets/tecnologia/tv2.jpg',
      alterImg: '../../assets/tecnologia/tv22.jpg' ,
      desc: 'Pantalla LED LG 65" Ultra HD 4K Smart TV'     
    },
    {
      id: "5",
      name: 'Telcel Apple iPhone 6 32GB Plata',
      price: '6999',
      url: '../../assets/tecnologia/cel2.jpg',
      alterImg: '../../assets/tecnologia/cel22.jpg',
      desc: 'Telcel Apple iPhone 6 32GB Plata'     
    },
  ]
  productoDetail = {
    name: '',price: '',url:''
  }
  showCarrito = 'hide';
  carrito = [];
  total:number = 0;

  switchSection(section: string){
  	switch(section){
  		case 'inicio':
  			this.section = 'inicio'
  			break;
  		case 'categorias':
  			this.section = 'categorias'
  			break;
  	}
  }

  setCategory(categoria: string){
    switch(categoria){
      case 'tecnologia':
        this.section = 'productos'
        this.categoria = 'tecnologia'
        break;
      case 'alimentacion':
        this.section = 'categorias'
        this.categoria = 'alimentacion'
        break;
      case 'refrigerados':
        this.section = 'categorias'
        this.categoria = 'refrigerados'
        break;
      case 'abarrotes':
        this.section = 'categorias'
        this.categoria = 'abarrotes'
        break;
      case 'perecederos':
        this.section = 'categorias'
        this.categoria = 'perecederos'
        break;
      case 'hogar':
        this.section = 'categorias'
        this.categoria = 'hogar'
        break;
    }
  }

  setProduct(producto: any){
    this.productoView = true;
    /*this.productoDetail.push(producto);*/
    Object.assign(this.productoDetail, producto);
    return(producto);
  }
  closeProduct(){
    this.productoView = false;
  }

  selectView(vista){
    this.mainImg = vista;
  }
  cartTotal(){
    for(var i=0;i<this.carrito.length;i++){
      this.producto += (this.carrito[i].price);
    }
    console.log('producto' Number(this.total));
  }
  addCart(nombre, precio, image){
    const items = {name: nombre.innerHTML, price: precio.innerHTML, img: image.src}
    const sum = (Number(precio.innerHTML) + Number(this.total));
    this.carrito.push(items);
    console.log('total:'sum);
    this.total = sum;
  }
  showCart(vista){
    this.showCarrito = vista;
  }
}
