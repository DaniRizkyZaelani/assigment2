import { useHome } from "./currency.hook";

const Home = () => {
  const { CAD, EUR, IDR, JPY, CHF, GBP } = useHome();

  return (
    <div className="App-header">
      <div className="currency">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAD</td>
              <td>{Number(CAD) + (5 / 100) * Number(CAD)}</td>
              <td>{CAD}</td>
              <td>{Number(CAD) - (5 / 100) * Number(CAD)}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{Number(EUR) + (5 / 100) * Number(EUR)}</td>
              <td>{EUR}</td>
              <td>{Number(EUR) - (5 / 100) * Number(EUR)}</td>
            </tr>
            <tr>
              <td>IDR</td>
              <td>{Number(IDR) + (5 / 100) * Number(IDR)}</td>
              <td>{IDR}</td>
              <td>{Number(IDR) - (5 / 100) * Number(IDR)}</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>{Number(JPY) + (5 / 100) * Number(JPY)}</td>
              <td>{JPY}</td>
              <td>{Number(JPY) - (5 / 100) * Number(JPY)}</td>
            </tr>
            <tr>
              <td>CHF</td>
              <td>{Number(CHF) + (5 / 100) * Number(CHF)}</td>
              <td>{CHF}</td>
              <td>{Number(CHF) - (5 / 100) * Number(CHF)}</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>{Number(GBP) + (5 / 100) * Number(GBP)}</td>
              <td>{GBP}</td>
              <td>{Number(GBP) - (5 / 100) * Number(GBP)}</td>
            </tr>
          </tbody>
        </table>    
      </div>
      <p>Rates are based from 1 USD <br/>
        This application uses API from https://currencyfreaks.com</p>
    </div>
  );
};

export default Home;
