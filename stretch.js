/* eslint-disable no-unused-vars */
//Stretch 1

const adderMaker = function(n) {
    return function(m) {
        return n + m;
    }
}

const addSix = adderMaker(6);

console.log(addSix(10));
console.log(addSix(21));

const addFour = adderMaker(4);

console.log(addFour(5));

//Stretch 2
/*
Object-Oriented programming models data and procedures based on objects. An object is assigned properties and methods that can only be accessed through the object.
This approach makes liberal use of variables, increasing the importance of the state of programs. Functional programming achieves all of its computations through
functions and higher-level functions composed of lower-level functions. The goal is to avoid side effects and state dependence so that each function will always
return the same results given the same inputs.

Object-oriented programming's advantages include it's more intuitive interpretation which allows for faster programming and perhaps easier communication of what your
program does to colleagues and other developers. Because object-oriented programming closely reflects the way humans view the world, it comes much more naturally than
functional programming to many developers. Object-oriented programming may also be preferred where data security is the primary concern because it requires explicit
methods to be written for users/other programs to have access to an object's associated data. The default-state is privacy. 

Functional Programming's advantages include it's consistency across many environments/states. Because functionally written programs have been written to avoid unexpected
side effects, they should perform just-as-well in a multitude of environments. This is especially advantageous for parallel computing. */