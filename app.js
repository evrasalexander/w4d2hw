function add(x, y) {
    return x + y;
};
console.log(add(2, 3));



function add(x, y, z) {
    return x + y + z;
};
console.log(add(2, 3, 5));


function add(x, y, z, a) {
    return x + y + z + a;
};
console.log(add(2, 3, 5, 10));

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

  const dog = {
      "name": "Spot",
      "legs": 4,
      "tails": 1,
      "enemies": ["fleas", "cats"]
  };

  const human = {
    "name": "Alex",
    "legs": 2,
    "tails": 0,
    "enemies": ["Hedgfund Managers", "Politicians"]
};

var Kitty = cat;
var Doggy = dog;
var Person = human;

const nameValue = cat.name;
const nameValue = dog.name;
const nameValue = human.name;

Kitty["legs"];
Doggy["enemies"];
Human["tails"];

Kitty["cat-nap"] = "Zzzzz...";
Doggy["growl"] = "Grrrr...";
Human["greet"] = "Hello.";

Kitty["name"] = "Felix";
Doggy["name"] = "Cosmo";
Human["name"] = "Boba Fett";








