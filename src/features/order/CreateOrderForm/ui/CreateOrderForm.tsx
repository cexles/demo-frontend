'use client';

import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { BigNumber, ethers, utils } from 'ethers';
import { formatEther } from '@ethersproject/units';
import { useEthers, useTokenBalance } from '@usedapp/core';

import useCreateOrder from '@/entities/order/api/createOrder/useCreateOrder';
import getTokenApprove from '@/entities/order/api/getTokenApprove/getTokenApprove';
import InputWithSelect from '@/shared/ui/input/InputWithSelect/InputWithSelect';
import InputWithNote from '@/shared/ui/input/InputWithNote/InputWithNote';
import Radio from '@/shared/ui/radio/Radio';
import TooltipDefault from '@/shared/ui/tooltip/TooltipDefault';
import {
  orderExpirationOptions,
  orderPeriodOptions,
  orderTypes,
} from '@/shared/config/order.config';

import CreateOrderFormStyles from './CreateOrderForm.module.scss';
import { OrderData, Props, DCAOrderData, TrailingOrderData } from './type';

function CreateOrderForm({ type }: Props) {
  const { account } = useEthers();
  const currentDateTime = DateTime.now();
  const { state: createOrderState, send: createOrder } = useCreateOrder();
  const [orderData, setOrderData] = useState<OrderData>({
    userAddress: account ?? '',
    baseToken: '0xfDaF650e710cbB5801AA0A152cf4481F70147890',
    targetToken: '0x429c90F2a384dbD7A6113CC642296e914445d66e',
    pairFee: 500,
    slippage: 10000,
    baseAmount: utils.parseEther('0'),
    aimTargetTokenAmount: utils.parseEther('0'),
    minTargetTokenAmount: utils.parseEther('0'),
    expiration: type === 'dca' ? 0 : currentDateTime.plus({ years: 10 }).toUnixInteger(),
    boundOrder: BigNumber.from(0),
    action: orderTypes[type].action,
    data: ethers.constants.HashZero,
  });
  const [DCAData, setDCAData] = useState<DCAOrderData>({
    period: 2628000,
    amountPerPeriod: '0',
  });
  const [trailingData, setTrailingData] = useState<TrailingOrderData>({
    baseAmount: '0',
    fixingPerStep: '0',
    step: 50000,
  });
  const [targetTokenAmount, setTargetTokenAmount] = useState<string>('0');
  const [DCAIntervals, setDCAIntervals] = useState<number>(1);
  const [trailingSwapPercentage, setTrailingSwapPercentage] = useState<number>(25);
  const tokenBalance = useTokenBalance('0xfDaF650e710cbB5801AA0A152cf4481F70147890', account) ?? 0;

  /**
   * useEffect hook for <OrderData> state.
   * Handles the effects related to wallet connection and changes.
   */
  useEffect(() => {
    if (account !== undefined && orderData.userAddress !== account) {
      const updatedOrderData = { ...orderData };
      updatedOrderData.userAddress = account;
      setOrderData(updatedOrderData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  /**
   * useEffect hook for <OrderData> state.
   * Handles the effects related to TargetTokenAmount in different order types.
   */
  useEffect(() => {
    const updatedOrderData = { ...orderData };
    if (orderData.aimTargetTokenAmount !== utils.parseEther(targetTokenAmount)) {
      updatedOrderData.aimTargetTokenAmount = utils.parseEther(targetTokenAmount);
      if (type === 'take-profit' || type === 'stop-loss' || type === 'trailing') {
        updatedOrderData.minTargetTokenAmount = utils.parseEther(
          String(Number(targetTokenAmount) * 0.95),
        );
      }
      if (type === 'dca') {
        updatedOrderData.minTargetTokenAmount = utils.parseEther('0');
      }
    }
    setOrderData(updatedOrderData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetTokenAmount, type]);

  /**
   * useEffect hook for <OrderData> state.
   * Handles the effects related to DCA Intervals and DCA Amount Per Period.
   * Only applicable for DCA (Dollar Cost Averaging) type.
   */
  useEffect(() => {
    if (type === 'dca') {
      const updatedOrderData = { ...orderData };
      if (
        orderData.baseAmount !== utils.parseEther(String(DCAData.amountPerPeriod * DCAIntervals))
      ) {
        updatedOrderData.baseAmount = utils.parseEther(
          String(DCAData.amountPerPeriod * DCAIntervals),
        );
      }
      updatedOrderData.data = ethers.utils.defaultAbiCoder.encode(
        ['uint128', 'uint128'],
        [DCAData.period, ethers.utils.parseUnits(DCAData.amountPerPeriod)],
      );
      setOrderData(updatedOrderData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DCAIntervals, DCAData]);

  /**
   * useEffect hook for managing the <OrderData> state.
   * Handles the effects related to trailing type.
   * Only applicable for trailing type.
   */
  useEffect(() => {
    if (type === 'trailing') {
      const updatedOrderData = { ...orderData };
      const spendAmount = (
        Number(ethers.utils.formatEther(orderData.baseAmount)) *
        (trailingSwapPercentage / 100)
      ).toString();
      updatedOrderData.data = ethers.utils.defaultAbiCoder.encode(
        ['uint128', 'uint128', 'uint24'],
        [orderData.baseAmount.toString(), utils.parseEther(spendAmount), trailingData.step],
      );
      setOrderData(updatedOrderData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trailingSwapPercentage, trailingData]);

  /**
   * Function to handle the creation of an order.
   * Calls the createOrder function with the provided orderData.
   */
  const handleCreateOrder = async () => {
    await createOrder(orderData);
  };

  /**
   * useEffect hook for createOrderState
   * Handles the effects related to unapproved token when calling the handleCreateOrder function.
   */
  useEffect(() => {
    if (createOrderState.status === 'Exception') {
      if (createOrderState.errorCode === -32603) {
        getTokenApprove({
          tokenAddress: orderData.baseToken,
          amount: orderData.baseAmount,
        }).then(() => handleCreateOrder());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createOrderState]);

  /**
   * Function to calculate the target token amount based on the provided event.
   * Updates the target token amount in the state by multiplying the base amount in Ether
   * with the input value from the event, formatted to 2 decimal places.
   * @param event The change event from the input field.
   * @param validatedValue
   */
  const calculateTargetToken = (
    event: React.ChangeEvent<HTMLInputElement>,
    validatedValue: string,
  ) => {
    setTargetTokenAmount(
      (ethers.utils.formatEther(orderData.baseAmount) * Number(validatedValue))
        .toFixed(2)
        .toString(),
    );
  };

  /**
   * Function to calculate the rate slippage based on the provided event.
   * Updates the order data by calculating the minimum target token amount,
   * considering the specified slippage percentage.
   * @param event The change event from the input field.
   * @param validatedValue
   */
  const calculateRateSlippage = (
    event: React.ChangeEvent<HTMLInputElement>,
    validatedValue: string,
  ) => {
    const updatedOrderData = { ...orderData };
    updatedOrderData.minTargetTokenAmount = utils.parseEther(
      String(
        utils.formatEther(orderData.aimTargetTokenAmount) * (1 - Number(validatedValue) / 100),
      ),
    );
    setOrderData(updatedOrderData);
  };

  /**
   * Function to update the order data based on the provided event.
   * Updates the corresponding field in the order data based on the target name of the event.
   * If the target name is 'baseAmount', the value is parsed into Ether and assigned to the field.
   * If the target name is 'boundOrder', the value is converted to a BigNumber and assigned to the field.
   * Otherwise, the value is directly assigned to the field.
   * @param event The change event from the input field.
   * @param validatedValue
   */
  const updateOrderData = (event: React.ChangeEvent<HTMLInputElement>, validatedValue: string) => {
    const updatedOrderData = { ...orderData };
    if (event.target.name === 'baseAmount') {
      updatedOrderData[event.target.name] = utils.parseEther(validatedValue);
    } else if (event.target.name === 'boundOrder') {
      updatedOrderData[event.target.name] = BigNumber.from(validatedValue);
    } else if (event.target.name === 'expiration') {
      updatedOrderData[event.target.name] = Number(event.target.value);
    } else {
      updatedOrderData[event.target.name] = validatedValue;
    }
    setOrderData(updatedOrderData);
  };

  /**
   * Function to update the DCA (Dollar Cost Averaging) data based on the provided event.
   * Updates the corresponding field in the DCA data based on the target name of the event.
   * If the target name is 'order-period', the value is converted to a number and assigned to the field.
   * If the target name is 'amountPerPeriod', the value is directly assigned to the field.
   * If the target name is 'periodNumber', the DCA intervals are updated and the value is converted to a number.
   * @param event The change event from the input field.
   * @param validatedValue
   */
  const updateDcaData = (event: React.ChangeEvent<HTMLInputElement>, validatedValue: string) => {
    const updatedDCAData = { ...DCAData };
    if (event.target.name === 'period') {
      updatedDCAData[event.target.name] = Number(event.target.value);
    } else if (event.target.name === 'amountPerPeriod') {
      updatedDCAData[event.target.name] = validatedValue;
    } else if (event.target.name === 'periodNumber') {
      setDCAIntervals(Number(validatedValue));
    }
    setDCAData(updatedDCAData);
  };

  /**
   * Function to update the trailing data based on the provided event.
   * Updates the corresponding field in the trailing data based on the target name of the event.
   * If the target name is 'trailing-step', the value is multiplied by 10,000 and assigned to the 'step' field.
   * If the target name is 'percentage-amount', the value is converted to a number and assigned to the trailing swap percentage.
   @param event The change event from the input field.
   * @param validatedValue
   */
  const updateTrailingData = (
    event: React.ChangeEvent<HTMLInputElement>,
    validatedValue: string,
  ) => {
    const updatedTrailingData = { ...trailingData };
    if (event.target.name === 'trailing-step') {
      updatedTrailingData.step = Number(validatedValue) * 10000;
    }
    if (event.target.name === 'percentage-amount') {
      setTrailingSwapPercentage(Number(validatedValue));
    }
    setTrailingData(updatedTrailingData);
  };

  return (
    <form>
      <div className={CreateOrderFormStyles.container}>
        {type !== 'dca' ? (
          <div className={CreateOrderFormStyles.inputs}>
            <h4 className={CreateOrderFormStyles.titleWithQuestion}>
              Total amount
              <span id="total-amount" />
              <TooltipDefault
                content="The total amount of tokens that you want to use in this order"
                place="right"
                anchorSelect="total-amount"
                className="total-amount"
              />
            </h4>
            <div className={CreateOrderFormStyles.inputsWrapper}>
              <InputWithSelect
                inputName="baseAmount"
                inputDisabled={false}
                inputNote={`Balance: ${formatEther(tokenBalance)}`}
                selectorName="baseToken"
                selectorDefaultValue="TokenA"
                onChangeInput={updateOrderData}
              />
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button type="button" className={CreateOrderFormStyles.swap} />
              <InputWithSelect
                inputName="aimTargetTokenAmount"
                inputValue={targetTokenAmount}
                inputDisabled
                selectorName="targetToken"
                selectorDefaultValue="TokenB"
                onChangeInput={updateOrderData}
              />
            </div>
          </div>
        ) : (
          ''
        )}
        {type === 'dca' ? (
          <>
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Total amount
                <span id="total-amount" />
                <TooltipDefault
                  content="The total amount of tokens that you want to use in this order"
                  place="right"
                  anchorSelect="total-amount"
                  className="total-amount"
                />
              </h4>
              <div className={CreateOrderFormStyles.inputsWrapper}>
                <InputWithSelect
                  inputName="baseAmount"
                  inputValue={String(DCAData.amountPerPeriod * DCAIntervals)}
                  inputDisabled
                  inputNote={`Balance: ${formatEther(tokenBalance)}`}
                  selectorDefaultValue="TokenA"
                  onChangeInput={updateDcaData}
                />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <div className={CreateOrderFormStyles.swap} />
                <InputWithSelect
                  inputName="expectedAmount"
                  inputValue="0"
                  inputDisabled
                  selectorDefaultValue="TokenB"
                  onChangeInput={updateDcaData}
                />
              </div>
            </div>
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Swap per interval
                <span id="amount-per-period" />
                <TooltipDefault
                  content="The amount of tokens that you want to swap per interval"
                  place="right"
                  anchorSelect="amount-per-period"
                  className="amount-per-period"
                />
              </h4>
              <InputWithSelect
                inputName="amountPerPeriod"
                inputDisabled={false}
                selectorName="baseToken"
                selectorDefaultValue="TokenA"
                onChangeInput={updateDcaData}
              />
            </div>
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Frequency of execution
                <span id="order-period" />
                <TooltipDefault
                  content="How often the order will be executed"
                  place="right"
                  anchorSelect="order-period"
                  className="order-period"
                />
              </h4>
              <div className={CreateOrderFormStyles.inputsWrapper}>
                <Radio options={orderPeriodOptions} name="period" onChangeInput={updateDcaData} />
              </div>
            </div>
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Quantity of intervals
                <span id="quantity-interval" />
                <TooltipDefault
                  content="Number of order executions"
                  place="right"
                  anchorSelect="quantity-interval"
                  className="quantity-interval"
                />
              </h4>
              <InputWithNote
                inputName="periodNumber"
                placeholder="1"
                note=""
                onChangeInput={updateDcaData}
              />
            </div>
          </>
        ) : (
          ''
        )}
        {type !== 'dca' ? (
          <div className={CreateOrderFormStyles.inputs}>
            <h4 className={CreateOrderFormStyles.titleWithQuestion}>
              Trigger price
              <span id="trigger-price" />
              <TooltipDefault
                content="The specific price at which order will trigger"
                place="right"
                anchorSelect="trigger-price"
                className="trigger-price"
              />
            </h4>
            <InputWithNote
              inputName="targetRate"
              placeholder="0"
              note="TokenB"
              onChangeInput={calculateTargetToken}
            />
          </div>
        ) : (
          ''
        )}
        {type === 'trailing' ? (
          <div className={CreateOrderFormStyles.inputs}>
            <h4 className={CreateOrderFormStyles.titleWithQuestion}>
              Percentage of swaps
              <span id="percentage-amount" />
              <TooltipDefault
                content="The percentage of the total amount of tokens to swap on each price step"
                place="right"
                anchorSelect="percentage-amount"
                className="percentage-amount"
              />
            </h4>
            <InputWithNote
              inputName="percentage-amount"
              placeholder={String(trailingSwapPercentage)}
              note="%"
              onChangeInput={updateTrailingData}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      {type !== 'dca' ? (
        <div className={CreateOrderFormStyles.container}>
          <h3 className={CreateOrderFormStyles.title}>Customization</h3>
          {type === 'stop-loss' ? (
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Rate slippage
                <span id="slippage-rate" />
                <TooltipDefault
                  content="The percentage below trigger price at which order can be executed"
                  place="right"
                  anchorSelect="slippage-rate"
                  className="slippage-rate"
                />
              </h4>
              <InputWithNote
                inputName="slippageRate"
                placeholder="5"
                note="%"
                onChangeInput={calculateRateSlippage}
              />
            </div>
          ) : (
            ''
          )}
          {type === 'stop-loss' || type === 'take-profit' ? (
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Bound order
                <span id="bound-order" />
                <TooltipDefault
                  content="You can link it to another order, and one of them will be canceled when the second one is executed"
                  place="right"
                  anchorSelect="bound-order"
                  className="bound-order"
                />
              </h4>
              <InputWithNote
                inputName="boundOrder"
                placeholder=""
                note="Order ID"
                onChangeInput={updateOrderData}
              />
            </div>
          ) : (
            ''
          )}
          {type === 'trailing' ? (
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Price steps
                <span id="trailing-step" />
                <TooltipDefault
                  content="The percentage of increasing the trigger price on each step"
                  place="right"
                  anchorSelect="trailing-step"
                  className="trailing-step"
                />
              </h4>
              <InputWithNote
                inputName="trailing-step"
                placeholder={String(trailingData.step / 10000)}
                note="%"
                onChangeInput={updateTrailingData}
              />
            </div>
          ) : (
            ''
          )}
          {type !== 'dca' ? (
            <div className={CreateOrderFormStyles.inputs}>
              <h4 className={CreateOrderFormStyles.titleWithQuestion}>
                Order expiration
                <span id="order-expiration" />
                <TooltipDefault
                  content="The lifetime of the order. After expiration it will have the expired status"
                  place="right"
                  anchorSelect="order-expiration"
                  className="order-expiration"
                />
              </h4>
              <div className={CreateOrderFormStyles.inputsWrapper}>
                <Radio
                  options={orderExpirationOptions}
                  name="expiration"
                  onChangeInput={updateOrderData}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      <div className={CreateOrderFormStyles.buttonContainer}>
        <button type="button" onClick={handleCreateOrder}>
          Create order
        </button>
      </div>
    </form>
  );
}

export default CreateOrderForm;
