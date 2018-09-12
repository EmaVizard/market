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
  loginView = false;
  mainImg = 'one';
  horarios = [
    {
      id: "1",
      horario: "9:00-10:00",
      jueves: "",
      viernes: "Gratis"
    },
    {
      id: "2",
      horario: "10:00-11:00",
      jueves: "",
      viernes: "Gratis"
    },
    {
      id: "3",
      horario: "11:00-12:00",
      jueves: "",
      viernes: "Gratis"
    },
    {
      id: "4",
      horario: "12:00-13:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },
    {
      id: "5",
      horario: "13:00-14:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },
    {
      id: "6",
      horario: "14:00-15:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },
    {
      id: "7",
      horario: "15:00-16:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },
    {
      id: "8",
      horario: "16:00-17:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },
    {
      id: "9",
      horario: "17:00-18:00",
      jueves: "Gratis",
      viernes: "Gratis"
    },

  ]
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

  payment = false;
  paymentStep = '1';
  formaPago = 'entrega';

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
    Object.assign(this.productoDetail, producto);
    return(producto);
  }
  closeProduct(){
    this.productoView = false;
  }

  selectView(vista){
    this.mainImg = vista;
  }
  /*cartTotal(){
    for(var i=0;i<this.carrito.length;i++){
      this.producto += (this.carrito[i].price);
    }
    console.log('producto'Number(this.total));
  }*/
  addCart(nombre, precio, image){
    const parsPrice = Number(precio.innerHTML.replace(/[^0-9.-]+/g,""))
    const items = {name: nombre.innerHTML, price: parsPrice, img: image.src}
    const sum = (parsPrice + Number(this.total));
    this.carrito.push(items);
    console.log(parsPrice, precio.innerHTML);
    /*console.log('total:' sum);*/
    this.total = sum;
  }
  showCart(vista){
    this.showCarrito = vista;
  }
  deleteItem(item, precio){
    this.carrito.splice(this.carrito.indexOf(item),1);
    this.total = this.total - precio;
  }
  updatePrice(precio){
    console.log(precio)
  }

  /*---------------------LOGIN*/
  logView(vista){
    if(vista == 'open'){
      this.loginView = true;
      this.showCarrito = 'hide';
    }else{
      this.loginView = false;
    }
  }

  /*---------------------------PAGO*/
  payView(step){
    switch(step){
      case 'open':
        this.payment = true;
        break;
      case '1':
        this.paymentStep = 'one';
        break;
      case '2':
        this.paymentStep = 'two';
        break;
      case '3':
        this.paymentStep = 'three';
        break;
      case '4':
        this.paymentStep = 'four';
        break;
       case 'payData':
        this.paymentStep = 'payData';
        break;
      case '5':
        this.paymentStep = 'five';
        break;
      case 'end':
        this.paymentStep = 'last';
        break;
      case 'close':
        this.payment = false;
        this.paymentStep = 'open';
        break;
    }
  }

  selectPago(forma){
    this.formaPago = forma;
  }

  finish(){
  	this.section = 'inico';
  	this.categoria = '';
  	this.productoView = false;
  	this.loginView = false;
  	this.mainImg = 'one';
  	this.productoDetail = {
  	  name: '',price: '',url:''
  	}
  	this.showCarrito = 'hide';
  	this.carrito = [];
  	this.total = 0;

  	this.payment = false;
  	this.paymentStep = '1';
  	this.formaPago = 'entrega';
  }
}
