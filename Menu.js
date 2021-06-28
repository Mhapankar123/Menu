const menu = [
    {
        id:1,
        title:'Fried Rice and Poached Egg',
        catogery:'lunch',
        price: '160₹',
        img: './images/friedricepoachedegg.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'
    },
    {
        id:2,
        title:'Grilled Meat',
        catogery:'lunch',
        price: '450₹',
        img: './images/grilledmeart.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'
    },
    {
        id:3,
        title:'Pancakes with sliced strawberry',
        catogery:'breakfast',
        price: '200₹',
        img: './images/pancakeswithslicedstrawberry.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'    
    },
    {
        id:4,
        title:'Pizza',
        catogery:'lunch',
        price: '600₹',
        img: './images/pizza.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'    
    },
    {
        id:5,
        title:'Vegetable Salad',
        catogery:'dinner',
        price: '130₹',
        img: './images/vegetablesalad.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'    
    },
    {
        id:6,
        title:'Slice of Cake',
        catogery:'breakfast',
        price: '70₹',
        img: './images/cake.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'    
    },
    {
        id:7,
        title:'CupCake',
        catogery:'breakfast',
        price: '130₹',
        img: './images/cupcake.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'            
    },
    {
        id:8,
        title:'Fried Chicken',
        catogery:'dinner',
        price: '220₹',
        img: './images/friedchicken.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'            
    },
    {
        id:9,
        title:'Sandwich',
        catogery:'dinner',
        price: '130₹',
        img: './images/sandwich.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'            
    },
    {
        id:10,
        title:'Sea Food Ramen Platter',
        catogery:'dinner',
        price: '130₹',
        img: './images/seafoodramenplatter.jpg',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius nesciunt repellat repudiandae quae? Animi cupiditate repellendus eius eveniet illo..'            
    }
];


const menuDiv = document.querySelector('.menu-div');
const filterbtn = document.querySelectorAll('.btn');

//Loading the items
window.addEventListener('DOMContentLoaded',() =>{
    dislayMenuItems(menu);

    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
    },["all"]);

    const categorybtn = categories.map(function(category){
        return `<button class="btn" data-id=${category}>${category}</button>`
    }).join('');
    console.log(categorybtn);
});


//Filter Buttons
filterbtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        //Most important part was the dataset
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.catogery === category){
                return menuItem;
            }
        });

        if(category === 'all'){
            //Displaying all the items using the below function and from out menu array.
            dislayMenuItems(menu)   
        }else{
            dislayMenuItems(menuCategory)
        }
    });
});

const dislayMenuItems = (menuItems) =>{
    let displayItem = menuItems.map((item)=>{
       return  `<div class="menu-item">
                    <img src=${item.img} class="item-img" alt=${item.title}>
                    <div class="menu-info">
                        <header class='header'>
                            <h3 class="title">${item.title}</h3>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="desc">
                            ${item.description}
                        </p>
                    </div>
                </div>`
    });
    displayItem = displayItem.join("");
    menuDiv.innerHTML = displayItem;
};


