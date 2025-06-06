import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Card, CardContent } from "../../../components/ui/card";

export const RadioButtonSection = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [selectedErrorValue, setSelectedErrorValue] = useState("error1");
  const [selectedCardValue, setSelectedCardValue] = useState("card1");

  return (
    <div className="space-y-8">
      {/* Radio Button Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <h3 className="col-span-full font-headers-h3 text-[#002858] mb-4">Radio Button Cards</h3>
        
        <RadioGroup value={selectedCardValue} onValueChange={setSelectedCardValue}>
          {/* Default Card */}
          <Card className="border-[#b9b9bc] hover:border-[#28e9c6] transition-colors duration-200">
            <CardContent className="flex items-center gap-3 p-4">
              <RadioGroupItem value="card1" />
              <label htmlFor="card1" className="text-[#002858] font-body-p1 cursor-pointer">
                Default Card Option
              </label>
            </CardContent>
          </Card>

          {/* Alternative Card */}
          <Card className="border-[#b9b9bc] hover:border-[#28e9c6] transition-colors duration-200">
            <CardContent className="flex items-center gap-3 p-4">
              <RadioGroupItem value="card2" />
              <label htmlFor="card2" className="text-[#002858] font-body-p1 cursor-pointer">
                Alternative Option
              </label>
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="border-[#b9b9bc] hover:border-[#28e9c6] transition-colors duration-200">
            <CardContent className="flex items-center gap-3 p-4">
              <RadioGroupItem value="card3" />
              <label htmlFor="card3" className="text-[#002858] font-body-p1 cursor-pointer">
                Third Option
              </label>
            </CardContent>
          </Card>
        </RadioGroup>
      </div>

      {/* Standard Radio Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <h3 className="col-span-full font-headers-h3 text-[#002858] mb-4">Standard Radio Buttons</h3>
        
        {/* Default States */}
        <div className="space-y-4">
          <h4 className="font-body-p2-action text-[#525356] mb-3">Default Group</h4>
          
          <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="option1" id="option1" />
              <label htmlFor="option1" className="text-[#002858] font-body-p1 cursor-pointer">
                First Option
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="option2" id="option2" />
              <label htmlFor="option2" className="text-[#002858] font-body-p1 cursor-pointer">
                Second Option
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="option3" id="option3" />
              <label htmlFor="option3" className="text-[#002858] font-body-p1 cursor-pointer">
                Third Option
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Disabled States */}
        <div className="space-y-4">
          <h4 className="font-body-p2-action text-[#525356] mb-3">Disabled Group</h4>
          
          <RadioGroup value="disabled2" disabled>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled1" id="disabled1" disabled />
              <label htmlFor="disabled1" className="text-[#898b8f] font-body-p1">
                Disabled Option
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled2" id="disabled2" disabled />
              <label htmlFor="disabled2" className="text-[#898b8f] font-body-p1">
                Disabled Selected
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled3" id="disabled3" disabled />
              <label htmlFor="disabled3" className="text-[#898b8f] font-body-p1">
                Disabled Option
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Error States */}
        <div className="space-y-4">
          <h4 className="font-body-p2-action text-[#525356] mb-3">Error Group</h4>
          
          <RadioGroup value={selectedErrorValue} onValueChange={setSelectedErrorValue}>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="error1" id="error1" variant="error" />
              <label htmlFor="error1" className="text-[#c80809] font-body-p1 cursor-pointer">
                Error Option
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="error2" id="error2" variant="error" />
              <label htmlFor="error2" className="text-[#c80809] font-body-p1 cursor-pointer">
                Error Option
              </label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem value="error3" id="error3" variant="error" />
              <label htmlFor="error3" className="text-[#c80809] font-body-p1 cursor-pointer">
                Error Option
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Horizontal Radio Groups */}
      <div className="space-y-6">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Horizontal Radio Groups</h3>
        
        {/* Default Horizontal */}
        <div className="space-y-3">
          <h4 className="font-body-p2-action text-[#525356]">Size Options</h4>
          <RadioGroup value="medium" className="flex gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="small" id="size-small" />
              <label htmlFor="size-small" className="text-[#002858] font-body-p1 cursor-pointer">
                Small
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="medium" id="size-medium" />
              <label htmlFor="size-medium" className="text-[#002858] font-body-p1 cursor-pointer">
                Medium
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="large" id="size-large" />
              <label htmlFor="size-large" className="text-[#002858] font-body-p1 cursor-pointer">
                Large
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Payment Methods Example */}
        <div className="space-y-3">
          <h4 className="font-body-p2-action text-[#525356]">Payment Methods</h4>
          <RadioGroup value="card" className="flex gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="payment-card" />
              <label htmlFor="payment-card" className="text-[#002858] font-body-p1 cursor-pointer">
                Credit Card
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="paypal" id="payment-paypal" />
              <label htmlFor="payment-paypal" className="text-[#002858] font-body-p1 cursor-pointer">
                PayPal
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="bank" id="payment-bank" />
              <label htmlFor="payment-bank" className="text-[#002858] font-body-p1 cursor-pointer">
                Bank Transfer
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-[#f8f9fa] rounded-lg p-6 border border-[#d0d0d2]">
        <h3 className="font-headers-h3 text-[#002858] mb-4">Interactive Demo</h3>
        <p className="text-[#525356] font-body-p2 mb-4">
          Radio buttons allow users to select only one option from a group. Notice how selecting one option deselects others in the same group.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[#525356]">
          <div>• Single selection only</div>
          <div>• Hover: Border colour change</div>
          <div>• Focus: Ring outline</div>
          <div>• Selected: Filled centre</div>
        </div>
      </div>
    </div>
  );
};