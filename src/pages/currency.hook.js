import axios from "axios";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=f189b155918540168983470bb93979c4`);
      setData(response.data.rates);
    };
    getData();
  }, []);
  
  const CAD = data && data.CAD;
  const EUR = data && data.EUR;
  const IDR = data && data.IDR;
  const JPY = data && data.JPY;
  const CHF = data && data.CHF;
  const GBP = data && data.GBP;

  return {
    CAD,
    EUR,
    IDR,
    JPY,
    CHF,
    GBP,
  };
};
