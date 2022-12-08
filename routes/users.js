var express = require("express");
var router = express.Router();

let products = [
  {
    Name: "POCO M4 Pro",
    Company: "XIOMI",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
  },
  {
    Name: "POCO C31",
    Company: "XIOMI",
    Price: "11999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "MOTOROLA e40",
    Company: "MOTOROLA",
    Price: "8999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
  },
  {
    Name: "REDMI 10",
    Company: " XIOMI",
    Price: " 9999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
  },
  {
    Name: "INFINIX HOT 11S",
    Company: "INFINIX",
    Price: "7999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ktn9pjk0/mobile/k/r/a/hot-11s-x6812-64-4-infinix-original-imag6xq6wa6ptgex.jpeg?q=70",
  },
  {
    Name: "SAMSUNG F22",
    Company: "SAMSUNG",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "REALME C35",
    Company: "REALME",
    Price: "12999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
  },
  {
    Name: "REDMI A1",
    Company: "XIOMI",
    Price: "6999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/f/c/-original-imagkjwrwzztvye6.jpeg?q=70",
  },
  {
    Name: "POCO M4 Pro",
    Company: "XIOMI",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
  },
  {
    Name: "POCO C31",
    Company: "XIOMI",
    Price: "11999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "MOTOROLA e40",
    Company: "MOTOROLA",
    Price: "8999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
  },
  {
    Name: "REDMI 10",
    Company: " XIOMI",
    Price: " 9999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
  },
  {
    Name: "INFINIX HOT 11S",
    Company: "INFINIX",
    Price: "7999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ktn9pjk0/mobile/k/r/a/hot-11s-x6812-64-4-infinix-original-imag6xq6wa6ptgex.jpeg?q=70",
  },
  {
    Name: "SAMSUNG F22",
    Company: "SAMSUNG",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "REALME C35",
    Company: "REALME",
    Price: "12999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
  },
  {
    Name: "REDMI A1",
    Company: "XIOMI",
    Price: "6999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/f/c/-original-imagkjwrwzztvye6.jpeg?q=70",
  },
];

/* GET users listing. */
router.get("/", function (req, res) {
  if (req.session.login) {
    res.render("users", { products });
  } else {
    res.redirect("/");
  }
});
module.exports = router;
