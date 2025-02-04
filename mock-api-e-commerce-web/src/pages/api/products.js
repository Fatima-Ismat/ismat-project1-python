export default function handler(req, res){
     const products = [
          {
               id: 1,
               name: "Cheese Burger",
               price : 10,
               image: "https://th.bing.com/th/id/OIP.51LxXlC0YizlqcfvaSqY2AHaE8?rs=1&pid=ImgDetMain",
          },

          {
               id: 2,
               name: "French Burger",
               price : 50,
               image: "https://th.bing.com/th/id/OIP.k0dPCbmJK54AyV9l3eLdzgHaEo?rs=1&pid=ImgDetMain",
          },

          {
               id: 3,
               name: "3 Burger",
               price : 80,
               image: "https://th.bing.com/th/id/OIP.xMSfAbxROtmVmd77nSXhzAAAAA?rs=1&pid=ImgDetMain",
          },

          {
               id: 4,
               name: "4 Burger",
               price : 60,
               image: "https://thumbs.dreamstime.com/b/craft-burger-cooking-black-background-black-food-gloves-consist-sauce-lettuce-tomato-red-onion-pickle-cheese-bacon-air-167640323.jpg",
          },

          {
               id: 5,
               name: "5 Burger",
               price : 50,
               image: "https://thumbs.dreamstime.com/b/big-grilled-chicken-burger-double-cutlet-cheese-wooden-background-side-view-close-up-208658240.jpg",
          },

          {
               id: 6,
               name: "6 Burger",
               price : 100,
               image: "https://th.bing.com/th/id/OIP.lkl9IzIYsoW2celgozPDcwHaHa?rs=1&pid=ImgDetMain",
          },
         
     ];
     res.status(200).json(products);
}