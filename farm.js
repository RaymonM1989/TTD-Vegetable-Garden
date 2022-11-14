// Looks up 'Yield (in kg) from 1 [input] plant'
const getYieldForPlant = (crop, environmentFactors) => 
{
    plantYield = crop.yield;
    if (environmentFactors != undefined && crop.factor != undefined && crop.factor.sun != undefined && environmentFactors.sun != undefined) 
    { plantYield = plantYield * ((100 + crop.factor.sun[environmentFactors.sun]) / 100); }
    if (environmentFactors != undefined && crop.factor != undefined && crop.factor.wind != undefined && environmentFactors.wind != undefined) 
    { plantYield = plantYield * ((100 + crop.factor.wind[environmentFactors.wind]) / 100); }
    if (environmentFactors != undefined && crop.factor != undefined && crop.factor.soil != undefined && environmentFactors.soil != undefined) 
    { plantYield = plantYield * ((100 + crop.factor.soil[environmentFactors.soil]) / 100); }
    return plantYield;
}

// Looks up 'Costs (in €) for 1 [input] plant'
const getCostsForPlant = crop => crop.costs;

// Looks up 'Price (in €) for selling 1 kg of [input] plant'
const getPriceForPlant = crop => crop.price;

// Calculates 'Revenue (in €) from selling the Yield from 1 [input] plant' ('Sale Price for 1 plant' * 'Yield from 1 plant')
const getRevenueForPlant = (crop, environmentFactors) => getPriceForPlant(crop) * getYieldForPlant(crop, environmentFactors);

// Calculate 'Profit (in €) from selling the Yield from 1 [input] plant' ('Revenue from 1 plant' - 'Costs for 1 plant')
const getProfitForPlant = (crop, environmentFactors) => getRevenueForPlant(crop, environmentFactors) - getCostsForPlant(crop);

// Calculates 'Yield (in kg) from 1 [input] crop' ('Yield from 1 plant' * 'Amount of plants in crop')
const getYieldForCrop = (input, environmentFactors) => getYieldForPlant(input.crop, environmentFactors) * input.numCrops;

// Calculates 'Costs (in €) for planting a [input] crop' ('Costs for 1 plant' * 'Amount of plants in crop')
const getCostsForCrop = input => getCostsForPlant(input.crop) * input.numCrops;

// Calculates 'Revenue (in €) for selling the total Yield from 1 [input] crop' ('Sale Price for 1 plant' * 'Amount of plants in crop')
const getRevenueForCrop = (input, environmentFactors) => getRevenueForPlant(input.crop, environmentFactors) * input.numCrops;

// Calculates 'Profit (in €) for selling the total Yield from 1 [input] crop' ('Profit from 1 plant' * 'Amount of plants in crop')
const getProfitForCrop = (input, environmentFactors) => getProfitForPlant(input.crop, environmentFactors) * input.numCrops;

// Calculates 'Total Yield (in kg) from multiple [input] crops' (Add 'Yield from crop' for every 'crop' in the input)
const getTotalYield = (crops, environmentFactors) => 
{
    let totalCrops = 0;
    crops.crops.forEach(element => 
        { totalCrops += getYieldForCrop(element, environmentFactors); });
    return totalCrops;
}

// Calculates 'Total Profit (in €) from selling multiple [input] crops' (Add 'Profit from crop' for every 'crop' in the input)
const getTotalProfit = (crops, environmentFactors) => 
{
    let totalProfit = 0;
    crops.forEach(element => 
        { totalProfit += getProfitForCrop(element, environmentFactors); });
    return totalProfit;
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
    getTotalProfit,
};