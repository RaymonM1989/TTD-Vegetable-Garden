// Looks up 'Yield (in kg) from 1 [input] plant'
const getYieldForPlant = crop => crop.yield;

// Calculates 'Yield (in kg) from 1 [input] crop' ('Yield from 1 plant' * 'Amount of plants in crop')
const getYieldForCrop = input => getYieldForPlant(input.crop) * input.numCrops;

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
};