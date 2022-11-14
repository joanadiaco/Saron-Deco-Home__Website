/* Array de 4 productos que se observan en index.html */

const nuestrosProductos = [
    {
        nombre: 'Almohadón Terracota',
        imagen: './img/Productos/almohadon-liso-2.png',
        valor: 1200
    },
    {
        nombre: 'Canasto de yute',
        imagen: './img/Productos/canasto-yute-1.png',
        valor: 3000
    },
    {
        nombre: 'Combo: difusor + spray',
        imagen: './img/Productos/combo-aromas-1.png',
        valor: 1500
    },
    {
        nombre: 'Manta Waffle Celeste',
        imagen: './img/Productos/manta-waffle-3.png',
        valor: 2400
    }
]


/* A continuación, creo 4 cards de Bootstrap para agregar en la sección "Nuestros Productos" de index.html */
const contenedorNuestrosProductos = document.getElementById("contenedorNuestrosProductos");

nuestrosProductos.forEach(nuestrosProductos => {
    let div = document.createElement("div");
    div.innerHTML = `   <div class="col">
                                <div class="card h-100 shadow rounded">
                                    <img src=" ${nuestrosProductos.imagen} " class="card-img-top" alt=" ${nuestrosProductos.nombre} ">
                                    <div class="card-body">
                                        <h5 class="card-title"> ${nuestrosProductos.nombre} </h5>
                                        <h6 class="card-price"> $${nuestrosProductos.valor} </h6>
                                        <p class="card-text">3 cuotas sin interés de $${nuestrosProductos.valor / 3}</p>
                                        <button class="btn btn-secondary button">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                    `
    
    contenedorNuestrosProductos.appendChild(div);
})


/* Ahora le damos funcionalidad al botón "Agregar al carrito" de las 4 cards. Estos botones son los únicos que tienen la clase "button" */
const clickButton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tBody');  //Declaro una constante para la clase tbody que está en carrito.html
let carrito = [];  //Dentro de esta variable iré guardando los items que se vayan agregando al carrito de compras.


clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem);
})

function addToCarritoItem(e){
    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-price').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem);
}

function addItemCarrito(newItem){

    carrito.push(newItem); //Dentro de mi variable "carrito" voy a ir guardando los items que se vayan agregando.
    
    renderCarrito();
}

function renderCarrito(){
    console.log(carrito);
    /* tbody.innerHTML = ` `
    carrito.map(item => {
        const tr = document.createElement('tr');
        tr.classList.add('ItemCarrito');  //Creo la clase ItemCarrito para el tr
        const content = `   <th scope="row">1</th>
                            <td class="table__producto">
                                <img src=" ${item.img} " alt=" ${item.title} ">
                                <h6 class="title"> ${item.title} </h6>
                            </td>
                            <td class="table__precio">
                                <p>$ ${item.precio} </p>
                            </td>
                            <td class="table__cantidad">
                                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                                <button class="delete btn btn-danger">
                                    X
                                </button>
                            </td>
                        `
        
        tr.innerHTML = content;
        tbody.append(tr); 
    })*/
}
