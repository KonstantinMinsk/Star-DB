const { withChildFunction } = require("../../sw-components/item-list")
const { withData } = require("./with-data")
const { default: withSwapiServise } = require("./with-swapi-servise")

const compose = (...funcs) => (component) => {
    return funcs.reduceRight((prevResult, fn) => {
                return fn(prevResult)
    }, component)
}
const renderModelandName = () => {}
const mapPlanetMethodsToPros = () => {}

compose(
    withSwapiServise(mapPlanetMethodsToPros),
    withData,
    withChildFunction(renderModelandName),
)

const arr = ['a', 'b', 'c']
const res = arr.reduceRight((prevResult, value) => {
    // console.log(prevResult, value);
    return prevResult+value
}, 'WW');
// console.log(res);


const sampleFN = (x) => (y) => x*y;
// console.log(sampleFN(2)(5));
const arrNFuncs = [sampleFN, sampleFN, sampleFN]
const resFuncs = arrNFuncs.reduceRight((prevResult, fn) => {
    // console.log(prevResult, fn);
    return fn(2)(prevResult)
}, 10);
// console.log(resFuncs);
