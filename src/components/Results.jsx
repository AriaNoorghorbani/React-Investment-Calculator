import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((eachYear) => {
          const totalInterest =
            eachYear.valueEndOfYear -
            eachYear.annualInvestment * eachYear.year -
            initialInvestment;

          const investedCapital = eachYear.valueEndOfYear - totalInterest;

          return (
            <tr key={eachYear.year}>
              <td>{eachYear.year}</td>
              <td>{formatter.format(eachYear.valueEndOfYear)}</td>
              <td>{formatter.format(eachYear.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
