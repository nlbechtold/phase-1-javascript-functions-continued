// code your solution here
function saturdayFun(act = "roller-skate") {

        return (`This Saturday, I want to ${act}!`)
    }



function mondayWork(act = "go to the office") {
    return (`This Monday, I will ${act}.`)
}


// describe("defines mondayWork function expression as specified", function() {
//     it("function exists", function() {
//       expect(mondayWork).to.exist
//     })

//     it("uses the default activity 'go to the office' when no arguments are passed", function() {
//       expect(mondayWork()).to.equal("This Monday, I will go to the office.")
//     })

//     it("permits the default activity to be overriden", function() {
//       expect(mondayWork("work from home")).to.equal("This Monday, I will work from home.")
//     })
//   })


function wrapAdjective(expression) {
    return function (adj="special") {
        return `You are ${expression}${adj}${expression}!`;
    }
}


