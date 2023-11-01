// Task 1
class SimpleMarker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    print(text) {
      const nonWhitespaceChars = text.replace(/\s/g, "").length;
      const inkRequired = nonWhitespaceChars * 0.5;
      if (this.inkLevel >= inkRequired) {
        console.log(`Printing: ${text}`);
        this.inkLevel -= inkRequired;
      } else {
        console.log("Out of ink!");
      }
    }
  }
  
  class RefillableMarker extends SimpleMarker {
    refill() {
      this.inkLevel = 100; 
    }
  }
  
  const simpleMarker = new SimpleMarker("blue", 50);
  simpleMarker.print("Hello, World!"); 
  simpleMarker.print("This is a test"); 
  simpleMarker.print("Out of ink?"); 
  
  const refillableMarker = new RefillableMarker("red", 80);
  refillableMarker.print("Refillable marker test.");
  refillableMarker.refill(); 
  refillableMarker.print("After refill."); 


  //Task 2


  class ExtendedDate extends Date {
    constructor() {
      super();
    }
  
    formatDateText() {
      const months = [
        "січень",
        "лютий",
        "березень",
        "квітень",
        "травень",
        "червень",
        "липень",
        "серпень",
        "вересень",
        "жовтень",
        "листопад",
        "грудень",
      ];
      const day = this.getDate();
      const month = months[this.getMonth()];
      return `${day} ${month}`;
    }
  

    isFutureOrPast() {
      const currentDate = new Date();
      return this > currentDate;
    }
  

    isLeapYear() {
      const year = this.getFullYear();
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
      }
      return false;
    }
  
 
    getNextDate() {
      const nextDate = new Date(this);
      nextDate.setDate(this.getDate() + 1);
      return nextDate;
    }
  }
  

  const myDate = new ExtendedDate();
  
  console.log("Дата текстом:", myDate.formatDateText());
  console.log("Майбутня або минула дата:", myDate.isFutureOrPast() ? "Майбутня" : "Минула");
  console.log("Чи високосний рік:", myDate.isLeapYear() ? "Так" : "Ні");
  console.log("Наступна дата:", myDate.getNextDate());
  

  //Task 3

  class Employee {
    constructor(id, name, position, department) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.department = department;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let tableHtml = '<table>';
        tableHtml += '<tr><th>ID</th><th>Name</th><th>Position</th><th>Department</th></tr>';

        for (const employee of this.employees) {
            tableHtml += '<tr>';
            tableHtml += `<td>${employee.id}</td>`;
            tableHtml += `<td>${employee.name}</td>`;
            tableHtml += `<td>${employee.position}</td>`;
            tableHtml += `<td>${employee.department}</td>`;
            tableHtml += '</tr>';
        }

        tableHtml += '</table>';
        return tableHtml;
    }
}

const bankEmployees = [
    new Employee(1, 'John Doe', 'Manager', 'Finance'),
    new Employee(2, 'Jane Smith', 'Accountant', 'Finance'),
    new Employee(3, 'Bob Johnson', 'Teller', 'Customer Service'),
];
document.addEventListener('DOMContentLoaded', function () {
    const empTable = new EmpTable(bankEmployees);
    const tableHtml = empTable.getHtml();
    document.getElementById('employeeTable').innerHTML = tableHtml;
});


//Task 4
const employees = [
    { name: 'John', position: 'Manager', salary: 50000 },
    { name: 'Alice', position: 'Engineer', salary: 60000 },
    { name: 'Bob', position: 'Designer', salary: 55000 }
];

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('employeeTable2');

    employees.forEach(employee => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        nameCell.innerHTML = employee.name;
        const positionCell = row.insertCell(1);
        positionCell.innerHTML = employee.position;
        const salaryCell = row.insertCell(2);
        salaryCell.innerHTML = employee.salary;
    });
});
  
  
  