import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function StockDetail() {
  const [stockData, setStockData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ALPACA_API_ENDPOINT}/stocks/${symbol}/bars?timeframe=1D`, {
          headers: {
            'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET
          }
        });
        setStockData({
          symbol: symbol,
          price: response.data[response.data.length - 1].c,
          change: response.data[response.data.length - 1].c - response.data[0].o,
          changePercent: ((response.data[response.data.length - 1].c - response.data[0].o) / response.data[0].o) * 100
        });
        setChartData(response.data.map(bar => ({
          time: new Date(bar.t).toLocaleTimeString(),
          price: bar.c
        })));
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    fetchData();
  }, [symbol]);

  if (!stockData) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{stockData.symbol}</h1>
      <h2>${stockData.price.toFixed(2)}</h2>
      <p>{stockData.change.toFixed(2)} ({stockData.changePercent.toFixed(2)}%)</p>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
      <div style={{ marginTop: '20px' }}>
        <h3>Buy {stockData.symbol}</h3>
        <form>
          <label>
            Amount:
            <input type="number" name="amount" />
          </label>
          <button type="submit">Buy</button>
        </form>
      </div>
    </div>
  );
}

export default StockDetail;