
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, TrendingUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ExchangeForm = () => {
  const [tradeType, setTradeType] = useState('market');
  const [buyOrSell, setBuyOrSell] = useState('buy');
  
  return (
    <div className="bg-card rounded-xl p-5 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">BTC</span>
          </div>
          <span className="text-lg font-semibold">Bitcoin / USDT</span>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-white">49,247.52</div>
          <div className="text-crypto-positive text-sm flex items-center">
            <TrendingUp size={14} className="mr-1" />
            +2.38%
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="spot" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="spot" className="font-medium">Spot</TabsTrigger>
          <TabsTrigger value="margin" className="font-medium">Margin</TabsTrigger>
        </TabsList>
        
        <TabsContent value="spot" className="space-y-4">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button 
              variant={buyOrSell === 'buy' ? 'default' : 'outline'} 
              className={`font-semibold ${buyOrSell === 'buy' ? 'bg-crypto-positive hover:bg-crypto-positive/90' : ''}`}
              onClick={() => setBuyOrSell('buy')}
            >
              Buy
            </Button>
            <Button 
              variant={buyOrSell === 'sell' ? 'default' : 'outline'} 
              className={`font-semibold ${buyOrSell === 'sell' ? 'bg-crypto-negative hover:bg-crypto-negative/90' : ''}`}
              onClick={() => setBuyOrSell('sell')}
            >
              Sell
            </Button>
          </div>
          
          <div className="flex bg-muted rounded-lg p-1 mb-4">
            <button 
              className={`flex-1 py-2 text-center rounded ${tradeType === 'market' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('market')}
            >
              Market
            </button>
            <button 
              className={`flex-1 py-2 text-center rounded ${tradeType === 'limit' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('limit')}
            >
              Limit
            </button>
            <button 
              className={`flex-1 py-2 text-center rounded ${tradeType === 'stop' ? 'bg-card shadow-sm' : ''}`}
              onClick={() => setTradeType('stop')}
            >
              Stop
            </button>
          </div>
          
          {tradeType === 'market' && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Price</label>
                    <div className="flex items-center">
                      <span className="text-foreground mr-1">Market</span>
                      <span className="text-muted-foreground">USDT</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Amount</label>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="text-foreground ml-1">23,245.43 USDT</span>
                    </div>
                  </div>
                  <div className="flex items-center border border-input rounded-md overflow-hidden">
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="flex-1 bg-transparent border-0 focus:ring-0 py-3 px-4"
                    />
                    <div className="pr-3 flex items-center gap-2">
                      <button className="text-xs bg-muted px-2 py-1 rounded">25%</button>
                      <span className="text-sm text-muted-foreground">USDT</span>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <div className="grid grid-cols-4 gap-2">
                    <button className="text-xs bg-muted rounded py-1">25%</button>
                    <button className="text-xs bg-muted rounded py-1">50%</button>
                    <button className="text-xs bg-muted rounded py-1">75%</button>
                    <button className="text-xs bg-muted rounded py-1">100%</button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground py-2 border-t border-border">
                  <span>Total</span>
                  <span>0.00 USDT</span>
                </div>
                
                <Button 
                  className={`w-full py-6 text-base font-semibold ${
                    buyOrSell === 'buy' 
                      ? 'bg-crypto-positive hover:bg-crypto-positive/90' 
                      : 'bg-crypto-negative hover:bg-crypto-negative/90'
                  }`}
                >
                  {buyOrSell === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </Button>
              </div>
            </>
          )}
        </TabsContent>
        
        <TabsContent value="margin">
          <div className="h-48 flex items-center justify-center">
            <p className="text-muted-foreground">Margin trading coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExchangeForm;
