let a = [
    {
        'n': 2,
        'b': [
            'hi',
            'bye'
        ]
    },
    {
        'n': 3,
        'b': [
            'hi',
            'bye'
        ]
    },
    {
        'n': 1,
        'b': [
            'hi',
            'bye'
        ]
    }];

// a.forEach(a => {
//     console.log(a)
// });

a.sort((a, b) => (a['n'] - b['n']));
console.log(a);

d = [2,1];
d.forEach(c => {
    console.log(c);
})