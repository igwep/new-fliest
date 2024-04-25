const menu = [
    {
        id:1,
        title: 'BRUNCH EGG',
        category:'Dinner',
        img:"/src/img/menu/brunchEgg.jpeg",
        price:15.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:2,
        title: 'BUTTER MILK',
        category:'Lunch',
        img:"/src/img/menu/buttermilk.jpg",
        price:11.4,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:3,
        title: 'EGUSI',
        category:'Dinner',
        img:"/src/img/menu/egusi.jpeg",
        price:9.5,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:4,
        title: 'JOLLOF RICE',
        category:'Breakfast',
        img:"/src/img/menu/jollofRice.jpeg",
        price:12.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:5,
        title: 'STEW',
        category:'Lunch',
        img:"/src/img/menu/stew.jpg",
        price:7.5,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:6,
        title: 'DOUBLE DINNER',
        category:'Dinner',
        img:"/src/img/menu/doubleDinner.jpg",
        price:12.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:7,
        title: 'BRUNCH EGG',
        category:'Breakfast',
        img:"/src/img/menu/brunchEgg.jpeg",
        price:15.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:8,
        title: 'BRUNCH EGG',
        category:'Lunch',
        img:"/src/img/menu/brunchEgg.jpeg",
        price:15.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:9,
        title: 'BRUNCH EGG',
        category:'Dinner',
        img:"/src/img/menu/brunchEgg.jpeg",
        price:15.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
    {
        id:10,
        title: 'BRUNCH EGG',
        category:'Breakfast',
        img:"/src/img/menu/brunchEgg.jpeg",
        price:15.9,
        desc: ' fluffy scrambled eggs, omelettes filled with cheese and veggies '
    },
];
const linkList = document.querySelector('.link-list');
const burger = document.querySelector('.burger');
const menuSection = document.querySelector('.section-menu');
const filterBtn = document.querySelectorAll('.filterBtn');
const loadings = document.querySelectorAll('.loadMore');
const loadMore = loadings[0];
const loadLess = loadings[1];
console.log(loadLess);
let currentImg = 4;
const menuCard = document.querySelectorAll('.menuCard');
burger.addEventListener('click', function(){
    linkList.classList.toggle('h-[15rem]');
});
let displayCount = 4;
window.addEventListener('DOMContentLoaded', function display(){
    displayMenu(menu.slice(0, displayCount));
    

});
filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const btnCategory = e.currentTarget.dataset.id;
      const category = menu.filter(function(item){
        if(item.category === btnCategory){
            return item;
        }
      });
      if(btnCategory === 'All'){
        displayMenu(menu.slice(0,displayCount));

      }
      else {
        displayMenu(category.slice(0, displayCount));
      };

      });

    }); 
    /* you have to display them dynamically */ 
  loadings.forEach(function(btn){
btn.addEventListener('click', function(e){
const loadCategory = e.currentTarget.dataset.id;
if(loadCategory === 'loadMore'){
    displayCount += 2;
        displayMenu(menu.slice(0, displayCount)); 
};
if(displayCount >= menu.length){
            loadMore.classList.toggle('hidden');
        };
        if(displayCount <= 3){
            loadMore.classList.remove('hidden');
            loadMore.classList.toggle('flex');
        };
if(loadCategory <= 'loadLess'){
    displayCount = displayCount - 2;
    displayMenu(menu.slice(0, displayCount));
    /* if(displayCount <= menu.length){
       loadLess.style.display ='none';

    };
    if(displayCount >= 3){
            loadLess.classList.remove('flex');
            loadLess.classList.toggle('hidden');
        };
        console.log(loadLess.classList); */
};

console.log(displayCount);
})
  });
function displayMenu(menuItem){
    let displayMenu = menuItem.map(function(item){
        return  `<div class=" shadow-lg shadow-black flex flex-col items-center gap-4 w-56 p-2 rounded-md h-60 bg-white menuCard mt-8">
                <div class="w-44 h-24 border-2 border-red-400 rounded-lg mt-4"><img src=${item.img} alt="" class="w-full h-full"></div>
                <div class="flex flex-col"><!-- title and pricing -->
                    <div class="flex justify-between gap-8  border-gray-400 p-1 border-b-2 mb-2"><h4 class="font-bold text-sm">${item.title}</h4>
                        <h4 class="text-red-800 font-bold">$${item.price}</h4></div>
                        <div class="w-44">
                            <p class="text-sm">${item.desc}</p>
                        </div>
                </div>
            </div>`;      
    });
    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu;
    if(menuItem.length <= 3){
        loadLess.style.display ='none';
    }
    else {
        loadLess.style.display= 'block';
    }
};