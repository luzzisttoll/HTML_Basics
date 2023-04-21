const items= [
    {firstName:"Hans", points:30},
    {firstName:"Paul", points:20},
    {firstName:"Franz", points:35},
    {firstName:"Friedrich", points:52},
    {firstName:"hs", points:100},
];

const filteredItems = items.filter((item) => {
    return item.points <=30
})
console.log(filteredItems)

const itemNames = items.map((item) => {
    return item.firstName
})
console.log(itemNames)

const foundItem = items.find((item) => {
    return item.firstName == "hs"
})
console.log(foundItem)

items.forEach((item) => {
    console.log(item.points)
})

const hasInexpensiveItems = items.some((item) => {
    return item.points <= 50
})
console.log(hasInexpensiveItems)

const hasInexpensiveItems2 = items.every((item) => {
    return item.points <= 50
})
console.log(hasInexpensiveItems2)

const total = items.reduce((currentTotal, item) => {
    return item.points + currentTotal
}, 0)
console.log(total)

