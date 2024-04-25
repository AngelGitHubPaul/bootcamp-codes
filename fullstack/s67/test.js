// This is the file to check whether your answer is correct or wrong.
// Do not change anything in this file.

const assert = require('assert');
const solutions = require('./index');

describe('[1] getTotalInventoryValue returns the total value of given inventory array', function() {
    it('getTotalInventoryValue returns expected value from given values.', function() {

        const products = [
            { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
            { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 },
            { name: 'Book', category: 'Books', price: 15, quantity: 25 },
            { name: 'Headphones', category: 'Electronics', price: 50, quantity: 8 }
        ];

       expect(solutions.getTotalInventoryValue(products)).toEqual(5975);
    });

    it('getTotalInventoryValue returns correct value from different array values.', function() {

        const products = [
            { name: 'Cookies', category: 'Food', price: 50, quantity: 200 },
            { name: 'Milk', category: 'Drinks', price: 45, quantity: 100 }
        ];

       expect(solutions.getTotalInventoryValue(products)).toEqual(14500);
    });
});

describe('[2] isUserValid returns correct value when validating given arguments', function() {
    it('isUserValid returns expected boolean from given values.', function() {

        const users = [
            { username: 'alice', password: 'pass123' },
            { username: 'bob', password: 'pass456' },
            { username: 'charlie', password: 'pass789' }
        ];

       expect(solutions.isUserValid(users,"alice","pass123")).toEqual(true);
    });

    it('isUserValid returns expected boolean from different values.', function() {

        const users = [
            { username: 'bennie', password: 'coolPass' },
            { username: 'jennie', password: 'password99' }
        ];

       expect(solutions.isUserValid(users,"bennie","pass123")).toEqual(false);

    });
});

describe('[3] calculateSalary returns correct array from given arguments', function() {
    it('calculateSalary returns an array of employee objects with an additional property totalSalary with the given values', function() {

        const employees = [
            { name: 'Alice', position: 'Manager', hoursWorked: 40, hourlyRate: 30 },
            { name: 'Bob', position: 'Developer', hoursWorked: 35, hourlyRate: 25 },
            { name: 'Charlie', position: 'Intern', hoursWorked: 20, hourlyRate: 15 }
        ];

       expect(solutions.calculateSalary(employees)[0].totalSalary).toEqual(1200);
       expect(solutions.calculateSalary(employees)[1].totalSalary).toEqual(875);
       expect(solutions.calculateSalary(employees)[2].totalSalary).toEqual(300);

    });

    it('calculateSalary returns an array of employee objects with an additional property totalSalary with different values', function() {

        const employees = [
            { name: 'Miguel', position: 'Manager', hoursWorked: 50, hourlyRate: 50 },
            { name: 'Juan', position: 'Developer', hoursWorked: 40, hourlyRate: 30 },
            { name: 'Carlos', position: 'Intern', hoursWorked: 15, hourlyRate: 15 }
        ];

       expect(solutions.calculateSalary(employees)[0].totalSalary).toEqual(2500);
       expect(solutions.calculateSalary(employees)[1].totalSalary).toEqual(1200);
       expect(solutions.calculateSalary(employees)[2].totalSalary).toEqual(225);

    });
});

describe('[4] getAvailableBooks returns correct array from given arguments', function() {

    it('getAvailableBooks returns an array of available books that are not borrowed by any borrower with the given values', function() {

        const books = [
            { title: 'Book 1', author: 'Author 1'},
            { title: 'Book 2', author: 'Author 2'},
            { title: 'Book 3', author: 'Author 3'},
            { title: 'Book 4', author: 'Author 4'},
            { title: 'Book 5', author: 'Author 4'}
          ];
        
          const borrowers = [
            { name: 'Borrower 1', books: ['Book 4'] },
            { name: 'Borrower 2', books: ['Book 5'] }
          ];

        expect(solutions.getAvailableBooks(books,borrowers)[0].title).toEqual("Book 1");
        expect(solutions.getAvailableBooks(books,borrowers)[1].title).toEqual("Book 2");
        expect(solutions.getAvailableBooks(books,borrowers)[2].title).toEqual("Book 3");

    });

    it('getAvailableBooks returns an array of available books that are not borrowed by any borrower with the different values', function() {

        const books = [
            { title: 'Book 1', author: 'Author 1'},
            { title: 'Book 2', author: 'Author 2'},
            { title: 'Book 3', author: 'Author 3'},
            { title: 'Book 4', author: 'Author 4'},
            { title: 'Book 5', author: 'Author 4'}
          ];
        
          const borrowers = [
            { name: 'Borrower 1', books: ['Book 3',"Book 4"] },
            { name: 'Borrower 2', books: ['Book 5'] }
          ];

        expect(solutions.getAvailableBooks(books,borrowers)[0].title).toEqual("Book 1");
        expect(solutions.getAvailableBooks(books,borrowers)[1].title).toEqual("Book 2");

    });
});

describe('[5] getTotalSalesByDate returns correct array from given arguments', function() {

    it('getTotalSalesByDate returns the total quantity of products sold on that date with the given values', function() {

        const sales = [
            { date: '2023-01-01', product: 'Product A', quantity: 10 },
            { date: '2023-01-01', product: 'Product B', quantity: 5 },
            { date: '2023-01-02', product: 'Product A', quantity: 8 },
            { date: '2023-01-02', product: 'Product C', quantity: 3 }
          ];
        
        expect(solutions.getTotalSalesByDate(sales,'2023-01-01')).toEqual(15);


    });

    it('getTotalSalesByDate returns the total quantity of products sold on that date with the different values', function() {

        const sales = [
            { date: '2023-03-01', product: 'Product A', quantity: 5 },
            { date: '2023-03-01', product: 'Product B', quantity: 20 },
            { date: '2023-04-02', product: 'Product A', quantity: 3 },
            { date: '2023-04-02', product: 'Product C', quantity: 2 }
          ];
        
        expect(solutions.getTotalSalesByDate(sales,'2023-04-02')).toEqual(5);

    });
});