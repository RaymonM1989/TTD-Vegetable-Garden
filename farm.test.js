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
    getTotalProfit,
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

    // ADDED ENVIRONMENTAL FACTORS TEST (CAN'T ADJUST INPUT)
    test("Get yield for plant with environment factors", () => 
    {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
            };
            
            const environmentFactors = {
            sun: "low",
            };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
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

    // ADDED ENVIRONMENTAL FACTORS TEST (CAN'T ADJUST INPUT)
    test("Get yield for plant with environment factors", () => 
    {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
            };
            const input = {
                crop: corn,
                numCrops: 10,
            };            
            const environmentFactors = {
            sun: "low",
            };

        expect(getYieldForCrop(input, environmentFactors)).toBe(150);
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

    // ADDED ENVIRONMENTAL FACTORS TEST (CAN'T ADJUST INPUT)
    test("Get yield for plant with environment factors", () => 
    {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
            };
            const pumpkin = {
                name: "pumpkin",
                yield: 4,
            };
            const crops = [
                { crop: corn, numCrops: 5 },
                { crop: pumpkin, numCrops: 2 },
            ];            
            const environmentFactors = {
            sun: "low",
            };

        expect(getTotalYield({ crops }, environmentFactors)).toBe(83);
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
            low: -50,
            medium: 0,
            high: 50
        },
        wind: 
        {
            low: 10,
            medium: 0,
            high: -20
        },
        soil: 
        {
            low: -10,
            medium: 0,
            high: 10
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
            low: 0,
            medium: 10,
            high: 30
        },
        wind: 
        {
            low: 0,
            medium: 0,
            high: 0
        },
        soil: 
        {
            low: -60,
            medium: -10,
            high: 20
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
            low: -20,
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
    { crop: pumpkin, numCrops: 12 },
    { crop: avocado, numCrops: 8 },
];

const environmentFactors =
{
    sun: "low",
    wind: "medium",
    soil: "high",
}

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
    test("Get revenue for selling total yield of 1 plant, without environmental factors", () => 
    {
        expect(getRevenueForPlant(corn)).toBe(12);
        expect(getRevenueForPlant(pumpkin)).toBe(16);
        expect(getRevenueForPlant(avocado)).toBe(15);
    });

    test("Get revenue for selling total yield of 1 plant, with environmental factors", () => 
    {
        expect(getRevenueForPlant(corn, environmentFactors)).toBeCloseTo(6.6, 2);
        expect(getRevenueForPlant(pumpkin, environmentFactors)).toBeCloseTo(19.2, 2);
        expect(getRevenueForPlant(avocado, environmentFactors)).toBeCloseTo(8.4, 2);
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

    test("Get revenue for selling total yield of crop, with environmental factors", () => 
    {
        expect(getRevenueForCrop(inputC, environmentFactors)).toBeCloseTo(66, 2);
        expect(getRevenueForCrop(inputP, environmentFactors)).toBeCloseTo(230.4, 2);
        expect(getRevenueForCrop(inputA, environmentFactors)).toBeCloseTo(67.2, 2);
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

    test("Get profit when yield is 0", () => 
    {
        const corn =
        {
            name: "corn",
            yield: 0,
            costs: 2,
            price: 4,
        };
        const pumpkin =
        {
            name: "pumpkin",
            yield: 0,
            costs: 3,
            price: 4,
        };
        const avocado =
        {
            name: "avocado",
            yield: 0,
            costs: 1,
            price: 5,
        };
        expect(getProfitForPlant(corn)).toBe(-2);
        expect(getProfitForPlant(pumpkin)).toBe(-3);
        expect(getProfitForPlant(avocado)).toBe(-1);
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

    test("Get profit when numCrops is 0", () => 
    {
        const inputC = 
        { 
            crop: corn,
            numCrops: 0,
        };
        const inputP = 
        { 
            crop: pumpkin,
            numCrops: 0,
        };
        const inputA = 
        { 
            crop: avocado,
            numCrops: 0,
        };
        expect(getProfitForCrop(inputC)).toBe(0);
        expect(getProfitForCrop(inputP)).toBe(0);
        expect(getProfitForCrop(inputA)).toBe(0);
    });

    test("Get profit when yield is 0", () => 
    {
        const corn =
        {
            name: "corn",
            yield: 0,
            costs: 2,
            price: 4,
        };
        const pumpkin =
        {
            name: "pumpkin",
            yield: 0,
            costs: 3,
            price: 4,
        };
        const avocado =
        {
            name: "avocado",
            yield: 0,
            costs: 1,
            price: 5,
        };
        const inputC = 
        { 
            crop: corn,
            numCrops: 10,
        };
        const inputP = 
        { 
            crop: pumpkin,
            numCrops: 12,
        };
        const inputA = 
        { 
            crop: avocado,
            numCrops: 8,
        };
        expect(getProfitForCrop(inputC)).toBe(-20);
        expect(getProfitForCrop(inputP)).toBe(-36);
        expect(getProfitForCrop(inputA)).toBe(-8);
    });
});

describe("getTotalProfit", () => 
{
    test("Calculate total profit with multiple crops", () => 
    {
        expect(getTotalProfit(crops)).toBe(368);
    });

    test("Calculate total profit when yield is 0", () => 
    {
        const corn =
        {
            name: "corn",
            yield: 0,
            costs: 2,
            price: 4,
        };
        const pumpkin =
        {
            name: "pumpkin",
            yield: 0,
            costs: 3,
            price: 4,
        };
        const avocado =
        {
            name: "avocado",
            yield: 0,
            costs: 1,
            price: 5,
        };
        const crops = 
        [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 12 },
            { crop: avocado, numCrops: 8 },
        ];
        expect(getTotalProfit(crops)).toBe(-64);
    });

    test("Get total profit when numCrops is 0", () => 
    {
        const crops = 
        [
            { crop: corn, numCrops: 0 },
            { crop: pumpkin, numCrops: 0 },
            { crop: avocado, numCrops: 0 },
        ];
        expect(getTotalProfit(crops)).toBe(0);
    });
});
