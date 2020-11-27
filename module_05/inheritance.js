
function User(firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;

    User.prototype.getfullname = function () {
        console.log((`${this.firsName}: ${this.lastName}`));
    }

    User.prototype.sayHello = function () {
        return (`${this.firsName}: ${this.lastName}`);
    }
}

let vova = new User('Vova', 'Ivanov');

// console.log(vova);
// ======================================================

function Customer(firsName, lastName, membership) {
    // Functional inheritance
    User.apply(this, arguments);
    this.membership = membership;
    // Functional inheritance
}

// Prototype inheritance
Customer.prototype = Object.create(User.prototype);

// Warrior.prototype = Object.create(Hero.prototype);
Customer.prototype.constructor = Customer;

// Prototype inheritance

Customer.prototype.getMembership = function () {
    console.log(this.membership);
}

Customer.prototype.getfullname = function () {
    console.log((`${this.firsName.toUpperCase()}: ${this.lastName.toUpperCase()}`));
}


let sara = new Customer('Sara', 'Smith', 'Basic');

console.log(sara);

// vova.getfullname();
// sara.getMembership();
// sara.getfullname();
// console.log(sara)



class User { }
class Customer extends User { }


function seyHello() {

}




class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                {this.state.value}
            </button>
        );
    }
}


builder.append('^').prepend('^').pad("=")