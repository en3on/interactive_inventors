/* jshint esversion:6 */

class Inventors {
  constructor() {
    this.inventors = [
          { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
          { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
          { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
          { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
          { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
          { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
          { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
          { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
          { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
          { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
          { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
          { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
        ];

    this.addYearsLived(this.inventors);
  }

  addYearsLived(inventors) {
    inventors.forEach(function(inventor) {
      const yearsLived = inventor.passed - inventor.year;
      inventor.yearsLived = yearsLived;
    });
  }

  resetTable() {
    const table = document.querySelector('tbody');
    table.innerHTML = null;
    return table;
  }

  createTableRow(inventor, tableBody) {
    const row = tableBody.insertRow(-1);

    Object.values(inventor).forEach(function(value, idx) {
      if (idx !== 4) {
        const newCell = row.insertCell(idx);
        const newText = document.createTextNode(value.toString());
        newCell.appendChild(newText);
      }
    });
  }

  allInventors() {
    this.displayInventors(this.inventors);
  }

  displayInventors(inventors) {
    const tableBody = this.resetTable();
    const createInventor = this.createTableRow;
    inventors.forEach(function(inventor) {
      createInventor(inventor, tableBody);
    });
  }

  bornIn1500s() {
    const tableBody = this.resetTable();
    const createInventor = this.createTableRow;
    this.inventors.forEach(function(inventor) {
      if (/^15/.test(inventor.year)) {
        createInventor(inventor, tableBody);
      }
    });
  }

  sortNameAsc() {
    const inventors = this.inventors.sort((x, y) => {
      if (x.last < y.last) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });

    this.displayInventors(inventors);
  }

  sortNameDsc() {
    const inventors = this.inventors.sort((x, y) => {
      if (x.last > y.last) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });

    this.displayInventors(inventors);
  }

  sortAsc(sortBy) {
    const inventors = this.inventors.sort((x, y) => { return x[sortBy] - y[sortBy]; });
    this.displayInventors(inventors);
  }

  sortDsc(sortBy) {
    const inventors = this.inventors.sort((x, y) => { return y[sortBy] - x[sortBy]; });
    this.displayInventors(inventors);
  }
}

const main = new Inventors();

main.allInventors();


const resetTableButton = document.querySelector("#resetTable");

resetTableButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.allInventors();
});


const bornIn1500sButton = document.querySelector("#bornIn1500s");

bornIn1500sButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.bornIn1500s();
});


const birthAscButton = document.querySelector("#birthAsc");

birthAscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortAsc('year');
});


const birthDscButton = document.querySelector("#birthDsc");

birthDscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortDsc('year');
});


const yearsLivedAscButton = document.querySelector("#yearsLivedAsc");

yearsLivedAscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortAsc('yearsLived');
});


const yearsLivedDscButton = document.querySelector("#yearsLivedDsc");

yearsLivedDscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortDsc('yearsLived');
});

const surnameAscButton = document.querySelector("#surnameAsc");

surnameAscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortNameAsc('first');
});

const surnameDscButton = document.querySelector("#surnameDsc");

surnameDscButton.addEventListener("click", function(event) {
  event.preventDefault();
  main.sortNameDsc('last');
});
