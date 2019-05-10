import productsReducer from "./reducer";




var data = [
  { 
    "id": 1,
    "img": "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//2916/thumb/2130008_gol_51r2_pri_thmb.jpg",
    "name": "AutoCraft Gold Battery, Group Size 51R, 500 CCA",
    "number": "#51R-2",
    "pricing": 164.99
  },
  {
    "id": 2,
    "img": "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//2916/thumb/2040107_svr_51r1_pri_thmb.jpg",
    "name": "AutoCraft Silver Battery, Group Size 51R, 410 CCA",
    "number": "#51R-1",
    "pricing": 134.99
    
  },
  {
    "id": 3,
    "img": "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage//2916/thumb/16940001_otm_d51r_pri_thmb.jpg",
    "name": "Optima Yellow Top Deep Cycle Battery, Group Size 51R, 450 CCA",
    "number": "#D51R",
    "pricing": 237.99
    
  }
];

var result = {};

data.forEach(function(product){
    result[product.id] = {
      "partNo" : product.number,
      "price" : product.pricing
      };
});

console.log(JSON.stringify(result, null, 2))