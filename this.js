const laptop = {
	name: "MacBook Pro",
	price: 1999,

	getDetails: function () {
		return `Laptop: ${this.name}, Price: $${this.price}`;
	},
};

console.log(laptop.getDetails());
