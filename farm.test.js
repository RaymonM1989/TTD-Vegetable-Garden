const 
{ 
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getPriceForPlant,
    getRevenueForPlant,
    getRevenueForCrop,
} = require("./farm");

// INITIAL TEST (CAN'T ADJUST)
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// INITIAL TEST (CAN'T ADJUST)
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

// INITIAL TEST (CAN'T ADJUST)
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// Corn properties
const corn =
{
    name: "corn",
    yield: 3,
    costs: 2,
    price: 4,
    factor: 
    {
        sun: 
        {
            low: -40,
            medium: 0,
            high: 40
        },
        wind: 
        {
            low: 20,
            medium: 0,
            high: -20
        },
        soil: 
        {
            low: 0,
            medium: 0,
            high: 0
        }
    }
};

// Pumpkin properties
const pumpkin =
{
    name: "pumpkin",
    yield: 4,
    costs: 3,
    price: 4,
    factor: 
    {
        sun: 
        {
            low: -50,
            medium: 0,
            high: 50
        },
        wind: 
        {
            low: 0,
            medium: -30,
            high: -60
        },
        soil: 
        {
            low: 0,
            medium: 0,
            high: 0
        }
    }
};

// Avocado properties
const avocado =
{
    name: "avocado",
    yield: 3,
    costs: 1,
    price: 5,
    factor: 
    {
        sun: 
        {
            low: 0,
            medium: 10,
            high: 20
        },
        wind: 
        {
            low: 0,
            medium: 0,
            high: 0
        },
        soil: 
        {
            low: -50,
            medium: 0,
            high: 50
        }
    }
};

// Input with single crop
const input = 
{ 
    crop: corn,
    numCrops: 10,
};

// Input with multiple crops
const crops = 
[
    { crop: corn, numCrops: 10 },
    { crop: pumpkin, numCrops: 5 },
    { crop: avocado, numCrops: 3 },
];

describe("getCostsForPlant", () => 
{
    test("Get costs for planting 1 plant", () => 
    {
        expect(getCostsForPlant(corn)).toBe(2);
    });
});

describe("getCostsForCrop", () => 
{
    test("Get costs for planting 1 crop", () => 
    {
        expect(getCostsForCrop(input)).toBe(20);
    });
});

describe("getPriceForPlant", () => 
{
    test("Get price for selling 1 kg of plant", () => 
    {
        expect(getPriceForPlant(corn)).toBe(4);
    });
});

describe("getRevenueForPlant", () => 
{
    test("Get revenue for selling total yield of 1 plant", () => 
    {
        expect(getRevenueForPlant(corn)).toBe(12);
    });
});

describe("getRevenueForCrop", () => 
{
    test("Get revenue for selling total yield of crop", () => 
    {
        expect(getRevenueForCrop(input)).toBe(120);
    });
});