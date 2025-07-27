<!-- markdownlint-disable -->

# Practice 07: Advanced Financial Analysis Library

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Building comprehensive function libraries with multiple related functions
- Understanding advanced parameter handling and default values
- Implementing higher-order functions that accept other functions as parameters
- Creating function composition and chaining patterns
- Working with complex return values including objects and arrays
- Understanding advanced scope concepts and closure patterns
- Building modular, reusable code with proper function organization

## 📋 Exercise Description

Create a comprehensive financial analysis library that provides various calculation functions for personal finance, business analysis, and investment planning. This advanced exercise demonstrates professional-level function design with complex mathematical calculations, data processing, and reporting capabilities.

## 🔧 Requirements

### Basic Requirements:
1. Create functions using declaration, expression, and arrow function syntax
2. Implement functions with multiple parameters and default values
3. Build functions that return complex objects and arrays
4. Use higher-order functions that accept callback functions
5. Demonstrate local and global scope with practical examples
6. Create function composition for complex calculations

### Advanced Requirements:
1. Implement function factories that create specialized calculation functions
2. Build a plugin system where functions can be dynamically added
3. Create advanced error handling and input validation
4. Implement memoization for performance optimization
5. Build a comprehensive reporting system with multiple output formats
6. Create utility functions that enhance the main calculation functions

## 💻 Example Code Structure

```javascript
// Global configuration and constants
const FINANCIAL_CONSTANTS = {
    MONTHS_PER_YEAR: 12,
    WEEKS_PER_YEAR: 52,
    DAYS_PER_YEAR: 365,
    DEFAULT_TAX_RATE: 0.25,
    DEFAULT_INFLATION_RATE: 0.03
};

// Global calculation history for tracking
let calculationHistory = [];
let currentSession = {
    startTime: new Date(),
    calculationsPerformed: 0,
    totalProcessingTime: 0
};

console.log("💰 ADVANCED FINANCIAL ANALYSIS LIBRARY");
console.log("=" .repeat(50));
console.log("🚀 Initializing comprehensive financial calculation system...");

// Step 1: Basic Financial Functions

// Function declaration - loan payment calculator
function calculateLoanPayment(principal, annualRate, termInMonths, downPayment = 0) {
    console.log(`\\n📊 LOAN PAYMENT CALCULATION:`);
    console.log(`   Principal: $${principal.toLocaleString()}`);
    console.log(`   Down Payment: $${downPayment.toLocaleString()}`);
    console.log(`   Annual Rate: ${(annualRate * 100).toFixed(2)}%`);
    console.log(`   Term: ${termInMonths} months`);
    
    const loanAmount = principal - downPayment;
    const monthlyRate = annualRate / FINANCIAL_CONSTANTS.MONTHS_PER_YEAR;
    
    let monthlyPayment;
    if (monthlyRate === 0) {
        monthlyPayment = loanAmount / termInMonths;
    } else {
        monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
                        (Math.pow(1 + monthlyRate, termInMonths) - 1);
    }
    
    const totalPaid = monthlyPayment * termInMonths;
    const totalInterest = totalPaid - loanAmount;
    
    const result = {
        monthlyPayment: monthlyPayment,
        totalPaid: totalPaid,
        totalInterest: totalInterest,
        loanAmount: loanAmount,
        interestRate: annualRate
    };
    
    console.log(`   💳 Monthly Payment: $${monthlyPayment.toFixed(2)}`);
    console.log(`   💰 Total Interest: $${totalInterest.toFixed(2)}`);
    console.log(`   📈 Total Cost: $${totalPaid.toFixed(2)}`);
    
    // Track calculation in history
    trackCalculation('loan_payment', result);
    
    return result;
}

// Function expression - compound interest calculator
const calculateCompoundInterest = function(principal, rate, timeYears, compoundingFreq = 12) {
    console.log(`\\n📈 COMPOUND INTEREST CALCULATION:`);
    console.log(`   Initial Investment: $${principal.toLocaleString()}`);
    console.log(`   Annual Rate: ${(rate * 100).toFixed(2)}%`);
    console.log(`   Time Period: ${timeYears} years`);
    console.log(`   Compounding: ${compoundingFreq} times per year`);
    
    const compoundedAmount = principal * Math.pow(1 + (rate / compoundingFreq), compoundingFreq * timeYears);
    const interestEarned = compoundedAmount - principal;
    const effectiveRate = Math.pow(1 + (rate / compoundingFreq), compoundingFreq) - 1;
    
    const result = {
        principal: principal,
        finalAmount: compoundedAmount,
        interestEarned: interestEarned,
        effectiveAnnualRate: effectiveRate,
        totalReturn: (interestEarned / principal) * 100
    };
    
    console.log(`   🎯 Final Amount: $${compoundedAmount.toFixed(2)}`);
    console.log(`   💵 Interest Earned: $${interestEarned.toFixed(2)}`);
    console.log(`   📊 Total Return: ${result.totalReturn.toFixed(2)}%`);
    
    trackCalculation('compound_interest', result);
    
    return result;
};

// Arrow function - tax calculation
const calculateTaxes = (income, taxBrackets = null, deductions = 0) => {
    console.log(`\\n🏛️  TAX CALCULATION:`);
    console.log(`   Gross Income: $${income.toLocaleString()}`);
    console.log(`   Deductions: $${deductions.toLocaleString()}`);
    
    const taxableIncome = Math.max(0, income - deductions);
    
    // Default progressive tax brackets if none provided
    const defaultBrackets = [
        { min: 0, max: 10000, rate: 0.10 },
        { min: 10000, max: 40000, rate: 0.12 },
        { min: 40000, max: 85000, rate: 0.22 },
        { min: 85000, max: 160000, rate: 0.24 },
        { min: 160000, max: Infinity, rate: 0.32 }
    ];
    
    const brackets = taxBrackets || defaultBrackets;
    let totalTax = 0;
    let taxBreakdown = [];
    
    for (let bracket of brackets) {
        if (taxableIncome > bracket.min) {
            const taxableInThisBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
            const taxInThisBracket = taxableInThisBracket * bracket.rate;
            totalTax += taxInThisBracket;
            
            if (taxableInThisBracket > 0) {
                taxBreakdown.push({
                    bracket: `${bracket.rate * 100}%`,
                    income: taxableInThisBracket,
                    tax: taxInThisBracket
                });
            }
        }
    }
    
    const effectiveRate = totalTax / income;
    const marginalRate = brackets.find(b => taxableIncome > b.min && taxableIncome <= b.max)?.rate || 0;
    const afterTaxIncome = income - totalTax;
    
    console.log(`   📋 Taxable Income: $${taxableIncome.toLocaleString()}`);
    console.log(`   💸 Total Tax: $${totalTax.toFixed(2)}`);
    console.log(`   📊 Effective Rate: ${(effectiveRate * 100).toFixed(2)}%`);
    console.log(`   📈 Marginal Rate: ${(marginalRate * 100).toFixed(2)}%`);
    
    const result = {
        grossIncome: income,
        taxableIncome: taxableIncome,
        totalTax: totalTax,
        afterTaxIncome: afterTaxIncome,
        effectiveRate: effectiveRate,
        marginalRate: marginalRate,
        taxBreakdown: taxBreakdown
    };
    
    trackCalculation('tax_calculation', result);
    
    return result;
};

// Step 2: Higher-Order Functions

// Function that accepts other functions as parameters
function performFinancialAnalysis(scenarios, calculationFunction, reportFunction) {
    console.log(`\\n🔍 PERFORMING FINANCIAL ANALYSIS:`);
    console.log(`   Scenarios to analyze: ${scenarios.length}`);
    console.log(`   Using calculation function: ${calculationFunction.name}`);
    
    const results = [];
    
    for (let i = 0; i < scenarios.length; i++) {
        const scenario = scenarios[i];
        console.log(`\\n   📋 Scenario ${i + 1}: ${scenario.name}`);
        
        // Call the provided calculation function with scenario data
        const result = calculationFunction(...scenario.parameters);
        result.scenarioName = scenario.name;
        results.push(result);
    }
    
    // Generate report using provided report function
    if (reportFunction) {
        reportFunction(results);
    }
    
    return results;
}

// Function that returns other functions (function factory)
function createInvestmentCalculator(defaultRate, defaultYears) {
    console.log(`\\n🏭 CREATING INVESTMENT CALCULATOR:`);
    console.log(`   Default Rate: ${(defaultRate * 100).toFixed(2)}%`);
    console.log(`   Default Years: ${defaultYears}`);
    
    // Return a customized function with preset defaults
    return function(principal, customRate = null, customYears = null) {
        const rate = customRate !== null ? customRate : defaultRate;
        const years = customYears !== null ? customYears : defaultYears;
        
        console.log(`\\n   🎯 Using Investment Calculator:`);
        console.log(`      Principal: $${principal.toLocaleString()}`);
        console.log(`      Rate: ${(rate * 100).toFixed(2)}%`);
        console.log(`      Years: ${years}`);
        
        const futureValue = principal * Math.pow(1 + rate, years);
        const growth = futureValue - principal;
        
        return {
            principal: principal,
            rate: rate,
            years: years,
            futureValue: futureValue,
            growth: growth,
            annualizedReturn: Math.pow(futureValue / principal, 1 / years) - 1
        };
    };
}

// Step 3: Complex Function Composition

// Utility function for chaining calculations
const composeCalculations = (...functions) => {
    return (initialValue) => {
        return functions.reduce((result, func) => {
            if (typeof func === 'function') {
                return func(result);
            }
            return result;
        }, initialValue);
    };
};

// Specialized calculation functions for composition
const addInflationAdjustment = (calculation) => {
    const inflationRate = FINANCIAL_CONSTANTS.DEFAULT_INFLATION_RATE;
    const years = calculation.years || 10;
    
    calculation.inflationAdjustedValue = calculation.futureValue / Math.pow(1 + inflationRate, years);
    calculation.realGrowth = calculation.inflationAdjustedValue - calculation.principal;
    calculation.realReturn = (calculation.realGrowth / calculation.principal) * 100;
    
    console.log(`   🎈 Inflation Adjustment Applied (${(inflationRate * 100).toFixed(1)}%)`);
    console.log(`      Real Future Value: $${calculation.inflationAdjustedValue.toFixed(2)}`);
    console.log(`      Real Return: ${calculation.realReturn.toFixed(2)}%`);
    
    return calculation;
};

const addTaxImpact = (calculation) => {
    const taxRate = FINANCIAL_CONSTANTS.DEFAULT_TAX_RATE;
    
    if (calculation.growth > 0) {
        calculation.capitalGainsTax = calculation.growth * taxRate;
        calculation.afterTaxValue = calculation.futureValue - calculation.capitalGainsTax;
        calculation.afterTaxReturn = ((calculation.afterTaxValue - calculation.principal) / calculation.principal) * 100;
        
        console.log(`   🏛️  Tax Impact Applied (${(taxRate * 100).toFixed(1)}%)`);
        console.log(`      Capital Gains Tax: $${calculation.capitalGainsTax.toFixed(2)}`);
        console.log(`      After-Tax Value: $${calculation.afterTaxValue.toFixed(2)}`);
        console.log(`      After-Tax Return: ${calculation.afterTaxReturn.toFixed(2)}%`);
    }
    
    return calculation;
};

// Step 4: Advanced Reporting Functions

function generateInvestmentReport(results) {
    console.log(`\\n\\n📊 COMPREHENSIVE INVESTMENT REPORT:`);
    console.log("=" .repeat(55));
    
    if (!results || results.length === 0) {
        console.log("⚠️  No data available for report generation");
        return;
    }
    
    // Summary statistics
    const totalInvestment = results.reduce((sum, r) => sum + (r.principal || 0), 0);
    const totalFutureValue = results.reduce((sum, r) => sum + (r.futureValue || r.finalAmount || 0), 0);
    const totalGrowth = totalFutureValue - totalInvestment;
    const averageReturn = results.reduce((sum, r) => sum + (r.totalReturn || 0), 0) / results.length;
    
    console.log(`📈 PORTFOLIO SUMMARY:`);
    console.log(`   Total Investment: $${totalInvestment.toLocaleString()}`);
    console.log(`   Projected Value: $${totalFutureValue.toLocaleString()}`);
    console.log(`   Expected Growth: $${totalGrowth.toLocaleString()}`);
    console.log(`   Average Return: ${averageReturn.toFixed(2)}%`);
    
    // Individual scenario analysis
    console.log(`\\n📋 SCENARIO BREAKDOWN:`);
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log(`\\n   ${i + 1}. ${result.scenarioName || `Scenario ${i + 1}`}:`);
        
        if (result.monthlyPayment) {
            // Loan scenario
            console.log(`      Monthly Payment: $${result.monthlyPayment.toFixed(2)}`);
            console.log(`      Total Interest: $${result.totalInterest.toFixed(2)}`);
        } else if (result.futureValue || result.finalAmount) {
            // Investment scenario
            const value = result.futureValue || result.finalAmount;
            const principal = result.principal;
            const growth = value - principal;
            
            console.log(`      Investment: $${principal.toLocaleString()}`);
            console.log(`      Future Value: $${value.toFixed(2)}`);
            console.log(`      Growth: $${growth.toFixed(2)}`);
            
            if (result.inflationAdjustedValue) {
                console.log(`      Real Value: $${result.inflationAdjustedValue.toFixed(2)}`);
            }
            
            if (result.afterTaxValue) {
                console.log(`      After-Tax Value: $${result.afterTaxValue.toFixed(2)}`);
            }
        }
    }
    
    // Risk assessment
    console.log(`\\n⚠️  RISK ASSESSMENT:`);
    console.log(`   📊 Portfolio Diversification: ${results.length > 1 ? 'Good' : 'Consider diversifying'}`);
    console.log(`   🎯 Average Return Level: ${averageReturn > 8 ? 'High' : averageReturn > 5 ? 'Moderate' : 'Conservative'}`);
    console.log(`   📈 Growth Potential: ${totalGrowth > totalInvestment * 0.5 ? 'High' : 'Moderate'}`);
}

function trackCalculation(type, result) {
    const calculation = {
        type: type,
        timestamp: new Date(),
        result: result,
        sessionId: currentSession.startTime.getTime()
    };
    
    calculationHistory.push(calculation);
    currentSession.calculationsPerformed++;
}

// Step 5: Demonstrate the Financial Library

console.log("\\n\\n🎯 DEMONSTRATING FINANCIAL LIBRARY CAPABILITIES:");
console.log("-".repeat(60));

// Example 1: Basic function usage
console.log("\\n1️⃣  BASIC CALCULATIONS:");
const loanResult = calculateLoanPayment(300000, 0.045, 360, 60000); // 30-year mortgage
const investmentResult = calculateCompoundInterest(50000, 0.07, 20, 12); // 20-year investment
const taxResult = calculateTaxes(85000, null, 12000); // Tax calculation

// Example 2: Function factory usage
console.log("\\n\\n2️⃣  CUSTOM INVESTMENT CALCULATORS:");
const conservativeCalculator = createInvestmentCalculator(0.04, 10); // 4% for 10 years
const aggressiveCalculator = createInvestmentCalculator(0.10, 15); // 10% for 15 years

const conservativeResult = conservativeCalculator(25000);
const aggressiveResult = aggressiveCalculator(25000);

console.log(`\\n   📊 Conservative Investment: $${conservativeResult.futureValue.toFixed(2)}`);
console.log(`   📊 Aggressive Investment: $${aggressiveResult.futureValue.toFixed(2)}`);

// Example 3: Higher-order function usage
console.log("\\n\\n3️⃣  SCENARIO ANALYSIS:");
const investmentScenarios = [
    {
        name: "Conservative Portfolio",
        parameters: [100000, 0.05, 25, 1] // $100k, 5%, 25 years, annual compounding
    },
    {
        name: "Balanced Portfolio", 
        parameters: [100000, 0.07, 25, 12] // $100k, 7%, 25 years, monthly compounding
    },
    {
        name: "Aggressive Portfolio",
        parameters: [100000, 0.10, 25, 12] // $100k, 10%, 25 years, monthly compounding
    }
];

const scenarioResults = performFinancialAnalysis(
    investmentScenarios,
    calculateCompoundInterest,
    generateInvestmentReport
);

// Example 4: Function composition
console.log("\\n\\n4️⃣  ADVANCED ANALYSIS WITH COMPOSITION:");
const comprehensiveAnalysis = composeCalculations(
    addInflationAdjustment,
    addTaxImpact
);

const detailedResult = comprehensiveAnalysis({
    principal: 75000,
    futureValue: 150000,
    years: 15,
    growth: 75000
});

console.log(`\\n   🎯 Comprehensive Analysis Complete`);
console.log(`      Final After-Tax Real Value: $${detailedResult.afterTaxValue.toFixed(2)}`);

// Example 5: Session summary
console.log("\\n\\n5️⃣  SESSION SUMMARY:");
console.log("-".repeat(30));
console.log(`⏱️  Session Duration: ${((new Date() - currentSession.startTime) / 1000).toFixed(2)} seconds`);
console.log(`🧮 Calculations Performed: ${currentSession.calculationsPerformed}`);
console.log(`📚 Calculation History: ${calculationHistory.length} entries`);

// Display calculation types performed
const calculationTypes = [...new Set(calculationHistory.map(c => c.type))];
console.log(`🔧 Calculation Types Used: ${calculationTypes.join(', ')}`);

console.log("\\n✅ Financial Analysis Library Demo Complete!");
```

## 🚀 Bonus Challenges

If you finish early, try these enhancements:

1. **Retirement Planning Calculator**: Create functions that calculate retirement savings needs and withdrawal strategies
2. **Monte Carlo Simulation**: Implement probability-based investment outcome modeling
3. **Debt Avalanche vs Snowball**: Create functions to compare debt payoff strategies
4. **Real Estate Analysis**: Build functions for property investment analysis including cash flow and ROI
5. **Currency Conversion**: Add international finance functions with real-time exchange rates
6. **Risk Assessment**: Create functions that calculate portfolio risk metrics like Sharpe ratio and beta
7. **Financial Goal Planner**: Build a system that helps users plan for multiple financial goals simultaneously
8. **Performance Benchmarking**: Compare investment performance against market indices

## ✅ Success Criteria

Your financial analysis library should:

- [ ] Include at least 8 different calculation functions using various function types
- [ ] Demonstrate function declaration, expression, and arrow function syntax
- [ ] Implement at least 2 higher-order functions that accept callbacks
- [ ] Create at least 1 function factory that returns customized functions
- [ ] Use function composition to combine multiple calculations
- [ ] Handle complex parameter scenarios with default values
- [ ] Generate comprehensive reports with detailed analysis
- [ ] Maintain calculation history and session tracking
- [ ] Include proper error handling and input validation
- [ ] Demonstrate advanced scope concepts and variable management

## 🎓 Key Learning Outcomes

After completing this exercise, you will have:

- Mastered all types of function syntax and their appropriate use cases
- Experience with professional-level function organization and modular design
- Understanding of higher-order functions and functional programming concepts
- Skills in building comprehensive calculation libraries
- Knowledge of financial mathematics and real-world applications
- Confidence in creating complex, reusable function systems

---

**Time Estimate:** 60-90 minutes  
**Difficulty:** Advanced  
**Focus:** Complex functions, higher-order functions, professional code organization
