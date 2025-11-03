import coffeeCup from "@/assets/coffee-cup.jpg";
import pastries from "@/assets/pastries.jpg";

const Menu = () => {
  const menuItems = [
    {
      category: "Signature Coffees",
      items: [
        {
          name: "Moonlight Latte",
          description: "Espresso with steamed milk and a hint of vanilla",
          price: "$5.50",
          image: coffeeCup,
        },
        {
          name: "Eclipse Mocha",
          description: "Rich chocolate and espresso blend with whipped cream",
          price: "$6.00",
          image: coffeeCup,
        },
        {
          name: "Luna Cappuccino",
          description: "Classic cappuccino with perfectly frothed milk",
          price: "$4.75",
          image: coffeeCup,
        },
      ],
    },
    {
      category: "Pastries & Treats",
      items: [
        {
          name: "Croissant Classique",
          description: "Buttery French croissant, baked fresh daily",
          price: "$3.50",
          image: pastries,
        },
        {
          name: "Chocolate Moon Cake",
          description: "Decadent chocolate cake with espresso frosting",
          price: "$5.00",
          image: pastries,
        },
        {
          name: "Almond Biscotti",
          description: "Crispy Italian biscotti perfect for dipping",
          price: "$3.00",
          image: pastries,
        },
      ],
    },
  ];

  return (
    <section id="menu" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
          Our <span className="gradient-text">Menu</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Discover our carefully crafted selection of specialty coffees and artisan treats
        </p>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <h3 className="text-3xl font-serif font-semibold mb-8 text-center text-accent">
              {category.category}
            </h3>
            <ul className="grid md:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <span className="text-accent font-bold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
