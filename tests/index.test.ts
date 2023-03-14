import * as calculator from "../src/index"

describe("calculate income tax to be paid ", () => {
    it("Salary less than R$ 2500", () => {
        const salary = generateSalary(0, 2500)
        const calculate = calculator.calculateTax(salary)
        expect(calculate).toBe(0)

    })
    it("Salary less than R$ 3200", () => {
        const salary = generateSalary(2500, 3200)
        const calculate = calculator.calculateTax(salary)
        expect(calculate).toBe(salary * 0.075)
    })
    it("Salary less than R$ 4250", () => {
        const salary = generateSalary(3200, 4250)
        const calculate = calculator.calculateTax(salary)
        expect(calculate).toBe(salary * 0.15)
    })
    it("Salary less than R$ 5300", () => {
        const salary = generateSalary(4250, 5300)
        const calculate = calculator.calculateTax(salary)
        expect(calculate).toBe(salary * 0.225)
    })
    it("Salary greater than R$ 5300", () => {
        const salary = generateSalary(5300, 182767882999999999)
        const calculate = calculator.calculateTax(salary)
        expect(calculate).toBe(salary * 0.275)
    })
    function generateSalary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
})

