import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function StockDetail() {
  const [stockData, setStockData] = useState(null);
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ALPACA_API_ENDPOINT}/v2/stocks/${symbol}/bars?timeframe=1D`, {
          headers: {
            'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_API_SECRET
          }
        });
        setStockData(response.data.bars);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  if (!stockData) return <div className="text-center">Loading...</div>;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">{symbol} Stock Data</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="c" stroke="#8884d8" name="Close Price" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StockDetail;