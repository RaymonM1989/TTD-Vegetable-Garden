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
    getProfitForPlant,
    getProfitForCrop,
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

// Input with single crop (corn)
const inputC = 
{ 
    crop: corn,
    numCrops: 10,
};

// Input with single crop (pumpkin)
const inputP = 
{ 
    crop: pumpkin,
    numCrops: 12,
};

// Input with single crop (avocado)
const inputA = 
{ 
    crop: avocado,
    numCrops: 8,
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
        expect(getCostsForPlant(pumpkin)).toBe(3);
        expect(getCostsForPlant(avocado)).toBe(1);
    });
});

describe("getCostsForCrop", () => 
{
    test("Get costs for planting 1 crop", () => 
    {
        expect(getCostsForCrop(inputC)).toBe(20);
        expect(getCostsForCrop(inputP)).toBe(36);
        expect(getCostsForCrop(inputA)).toBe(8);
    });
});

describe("getPriceForPlant", () => 
{
    test("Get price for selling 1 kg of plant", () => 
    {
        expect(getPriceForPlant(corn)).toBe(4);
        expect(getPriceForPlant(pumpkin)).toBe(4);
        expect(getPriceForPlant(avocado)).toBe(5);
    });
});

describe("getRevenueForPlant", () => 
{
    test("Get revenue for selling total yield of 1 plant", () => 
    {
        expect(getRevenueForPlant(corn)).toBe(12);
        expect(getRevenueForPlant(pumpkin)).toBe(16);
        expect(getRevenueForPlant(avocado)).toBe(15);
    });
});

describe("getRevenueForCrop", () => 
{
    test("Get revenue for selling total yield of crop", () => 
    {
        expect(getRevenueForCrop(inputC)).toBe(120);
        expect(getRevenueForCrop(inputP)).toBe(192);
        expect(getRevenueForCrop(inputA)).toBe(120);
    });
});

describe("getProfitForPlant", () => 
{
    test("Get profit for selling total yield of 1 plant", () => 
    {
        expect(getProfitForPlant(corn)).toBe(10);
        expect(getProfitForPlant(pumpkin)).toBe(13);
        expect(getProfitForPlant(avocado)).toBe(14);
    });
});

describe("getProfitForCrop", () => 
{
    test("Get profit for selling total yield of crop", () => 
    {
        expect(getProfitForCrop(inputC)).toBe(100);
        expect(getProfitForCrop(inputP)).toBe(156);
        expect(getProfitForCrop(inputA)).toBe(112);
    });
});
