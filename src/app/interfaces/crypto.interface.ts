export interface MarketData {
  current_price: {
    usd: number;
  };
  market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
}

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: MarketData;
  coingecko_rank: number;
  last_updated: string;
}
