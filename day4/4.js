const inventors=[
    {first: 'Albert', last:'Einstein', year:1879, passed:1955 },
    {first: 'Isaac', last:'Newton', year:1643, passed:1727},
    {first:'Galileo', last:'Galilei', year:1564, passed:1642},
    {first:'Marie', last:'Curie', year:1867, passed:1934},
    {first:'Johannes', last:'kepler', year:1571, passed:1630},
    {first:'Nicolaus', last:'Copernicus', year:1473, passed:1543},
    {first:'Max', last:'Planck', year:1858, passed:1947},
];




const people=['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, ludwig','Begin, Menachem','Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert','Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony','Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry,Halle','Berry Wendell', 'Bethea, Erin','Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billins, Josh','Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

//1.Filter the list of inventors for those who were born in the 1500's


let middle=inventors.filter(middle=>middle.year>=1500 && middle.year<1600)
   
console.log(middle)
console.table(middle)




//Array.phototype.map()
//2.Give us an array of the inventory first and last names

const fullname=inventors.map(inventor=>`${inventor.first}  ${inventor.last}`)
console.log(fullname)

//Array.phototype.sort()
//3.sort the inventors by birthday, oldest to youngest

const ordered=inventors.sort((a,b)=>a.year>b.year ? 1 : -1)

console.log(ordered)
console.table(ordered)

//Array.phototype.reduce()
//4. How many years did all the inventors live?

const total=inventors.reduce((total,inventor)=>{
    return total + (inventor.passed-inventor.year)
},0)

console.log(total)


//5. Sort the inventors by years lived

const sorted=inventors.sort((a,b)=>(a.passed-a.year)>(b.passed-b.year) ? -1 : 1)

console.table(sorted)

//6.create a list of boulevrds in paris that contain 'de' anywheare in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/** 
 ****this is the answer*****
// const links=Array.from(document.querySelectorAll('.mw-category a'))

// const de=links
// .map(link=>link.textContent)
// .filter(link=>link.includes('de'))

*/
            



//7.sort exercise
//Sort the people alphabetically by the last name

const alpha=people.sort((a,b)=>{
    const [alast, afirst]=a.split(', ');
    const [blast, bfirst]=b.split(', ');
    return alast>blast ? 1: -1
})
console.table(alpha)



//8.Reduce exercise
//Sum up the instances of each of these
const data=['car','car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation=data.reduce((object, item)=>{
    if(!object[item]){
        object[item]=0;
    }
    object[item]++;
        return object;
    
},{})

console.log(transportation)