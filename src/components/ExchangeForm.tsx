
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const ExchangeForm = () => {
  const [amount, setAmount] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number[]>([0]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="spot" className="w-full">
        <div className="border-b border-gray-700/30">
          <TabsList className="bg-transparent border-none w-full flex justify-start">
            <TabsTrigger 
              value="spot" 
              className="data-[state=active]:text-crypto-accent data-[state=active]:border-b-2 data-[state=active]:border-crypto-accent rounded-none border-b-2 border-transparent px-6 py-2 font-medium"
            >
              Spot
            </TabsTrigger>
            <TabsTrigger 
              value="swap" 
              className="data-[state=active]:text-crypto-accent data-[state=active]:border-b-2 data-[state=active]:border-crypto-accent rounded-none border-b-2 border-transparent px-6 py-2 font-medium"
            >
              Swap
            </TabsTrigger>
            <TabsTrigger 
              value="seconds" 
              className="data-[state=active]:text-crypto-accent data-[state=active]:border-b-2 data-[state=active]:border-crypto-accent rounded-none border-b-2 border-transparent px-6 py-2 font-medium"
            >
              Seconds
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="spot" className="mt-4">
          <div className="flex items-center mb-4">
            <div className="flex items-center space-x-2">
              <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="BTC" className="w-6 h-6" />
              <div className="font-medium text-lg">BTC</div>
              <div className="text-crypto-positive">+3.32%</div>
            </div>
          </div>
          
          <div className="bg-gray-100/5 rounded-md mb-4">
            <div className="grid grid-cols-2 overflow-hidden rounded-t-md">
              <Button 
                variant="ghost" 
                className="py-3 px-6 border-b-2 border-crypto-accent text-white bg-crypto-accent hover:bg-crypto-accent/90"
              >
                Buy
              </Button>
              <Button 
                variant="ghost" 
                className="py-3 px-6 text-foreground/70 hover:bg-gray-100/10"
              >
                Sell
              </Button>
            </div>
            
            <div className="p-4 border-b border-gray-700/20">
              <div className="flex justify-between items-center text-sm text-foreground/70 mb-2">
                <span>Market price</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">86931.6098</span>
                <span className="text-foreground/70">USDT</span>
              </div>
            </div>
            
            <div className="p-4 border-b border-gray-700/20">
              <div className="flex justify-between items-center text-sm text-foreground/70 mb-2">
                <span>Amount</span>
                <span>BTC</span>
              </div>
              <Input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                className="border-none bg-transparent text-lg focus-visible:ring-0 p-0 h-auto"
                placeholder="0.0000"
              />
            </div>
            
            <div className="p-4">
              <Slider
                defaultValue={[0]}
                max={100}
                step={1}
                value={sliderValue}
                onValueChange={setSliderValue}
                className="my-4"
              />
              <div className="flex justify-between text-xs text-foreground/60">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-700/20">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-foreground/70">Pay</span>
                <span className="font-medium">0 USDT</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/70">Available</span>
                <span className="font-medium">0 USDT</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-crypto-accent hover:bg-crypto-accent/90 py-6 rounded-md">
            Buy
          </Button>
          
          <div className="mt-8">
            <h3 className="font-medium mb-4">Commissioned orders</h3>
            {/* Empty state or orders would go here */}
          </div>
        </TabsContent>
        
        <TabsContent value="swap" className="mt-4">
          <div className="text-center p-8">Swap trading interface coming soon</div>
        </TabsContent>
        
        <TabsContent value="seconds" className="mt-4">
          <div className="text-center p-8">Seconds trading interface coming soon</div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100/5 rounded-md p-4">
            <h3 className="text-lg font-medium text-crypto-accent mb-2">Price (USDT)</h3>
            <div className="space-y-2 mt-4">
              {[
                { price: '86971.4445', amount: '0.0007' },
                { price: '86873.8353', amount: '0.0159' },
                { price: '86960.1530', amount: '0.6732' },
                { price: '86968.1530', amount: '0.0316' },
                { price: '87020.5497', amount: '0.0019' },
                { price: '87077.4833', amount: '0.1938' },
                { price: '86987.9530', amount: '0.1091' },
                { price: '86939.2738', amount: '0.0072' },
                { price: '86895.7156', amount: '0.0007' },
                { price: '87000.5530', amount: '0.1763' }
              ].map((order, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-crypto-accent">{order.price}</span>
                  <span className="text-foreground/70">{order.amount}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100/5 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-center">86931.6098</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeForm;
