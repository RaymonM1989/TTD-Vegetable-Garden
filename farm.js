// Looks up 'Yield (in kg) from 1 [input] plant'
const getYieldForPlant = crop => crop.yield;

// Looks up 'Costs (in €) for 1 [input] plant'
const getCostsForPlant = crop => crop.costs;

// Looks up 'Price (in €) for selling 1 kg of [input] plant'
const getPriceForPlant = crop => crop.price;

// Calculates 'Revenue (in €) from selling the Yield from 1 [input] plant' ('Sale Price for 1 plant' * 'Yield from 1 plant')
const getRevenueForPlant = crop => getPriceForPlant(crop) * getYieldForPlant(crop);

// Calculate 'Profit (in €) from selling the Yield from 1 [input] plant' ('Revenue from 1 plant' - 'Costs for 1 plant')
const getProfitForPlant = crop => getRevenueForPlant(crop) - getCostsForPlant(crop);

// Calculates 'Yield (in kg) from 1 [input] crop' ('Yield from 1 plant' * 'Amount of plants in crop')
const getYieldForCrop = input => getYieldForPlant(input.crop) * input.numCrops;

// Calculates 'Costs (in €) for planting a [input] crop' ('Costs for 1 plant' * 'Amount of plants in crop')
const getCostsForCrop = input => getCostsForPlant(input.crop) * input.numCrops;

// Calculates 'Revenue (in €) for selling the total Yield from 1 [input] crop' ('Sale Price for 1 plant' * 'Amount of plants in crop')
const getRevenueForCrop = input => getRevenueForPlant(input.crop) * input.numCrops;

// Calculates 'Profit (in €) for selling the total Yield from 1 [input] crop' ('Profit from 1 plant' * 'Amount of plants in crop')
const getProfitForCrop = input => getProfitForPlant(input.crop) * input.numCrops;

// Calculates 'Total Yield (in kg) from multiple [input] crops' ('Yield from 1 plant' * 'Amount of plants in crop' for every 'crop' in the input)
const getTotalYield = crops => 
{
    let totalCrops = 0;
    crops.crops.forEach(element => 
        { totalCrops += getYieldForCrop(element); });
    return totalCrops;
}

module.exports = 
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
};