//Timmy => "Your grand total is $65"
//Sarah => "Your grand total is $37.5."
//Rocky => "Your grand total is $102.5"
checkOutSystem(customer) =
totalCost = customer.pricePerRefill * refills;


const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}