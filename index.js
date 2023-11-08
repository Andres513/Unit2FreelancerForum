// 1. Is your HTML file connected to your JS file?

// 2. Have you defined arrays for possible names and occupations?

// 3. Have you defined an initial array of freelancers?

// 4. Do you know how you want the freelancers' information to be displayed on the page?

// 5. Have you written and called a function to render the initial freelancer data?

// 6. Have you written a function to generate a new random freelancer?

// 7. Is this function being called in an interval?

// 8. Have you written a function to calculate the average starting price of your freelancers' array?

// 9. When should this function be called to update the displayed message?

const names = ["Frank", "Alex", "Emily", "Eric"];
const occupations = [
    "programmer",
    "writer",
    "teacher",
    "gardener",
    "fisherman",
    "rodeo clown"
]
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
]

const average = document.querySelector("#average")
const tableBody = document.querySelector("#table-body")

const addFreelancerIntervalId = setInterval(randomFreelancer, 500);

render();

function render() {
     const newRows = freelancers.map((freelancer) => {
         const newRow = document.createElement("tr");
         
         const name = document.createElement("td");
         name.innerText = freelancer.name

         const occupation = document.createElement("td");
         occupation.innerHTML = freelancer.occupation

         const price = document.createElement("td");
         price.innerText = `$${freelancer.price}`;

         newRow.append(name, occupation, price);

        return newRow;
     })

     tableBody.replaceChildren(...newRows)

     const wholeAverage = Math.floor(calculateAvg())
     average.innerText = wholeAverage;
}
function randomFreelancer(){

    const name = names[Math.floor(Math.random() * names.length)];
    const occupation  = occupations[Math.floor(Math.random() * occupations.length)];
    const price  = Math.floor(Math.random() * 200);

    freelancers.push({ name, occupation, price });

    render();

    if (freelancers.length === 20) {
        clearInterval(addFreelancerIntervalId)
    }
}
function calculateAvg(){

    const sum = freelancers.reduce((accum, current)=> accum + current.price, 0);
    return sum / freelancers.length;

}