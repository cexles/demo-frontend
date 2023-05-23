'use client';

import React from 'react';

import { useAppDispatch, useAppSelector } from '@/appLayer/redux/hooks';
import { changeOrderFormat } from '@/entities/theme/model/slice';

import ChangeOrderFormatStyles from './ChangeOrderFormat.module.scss';

function ChangeOrderFormat() {
  const orderFormat = useAppSelector((state) => state.theme.orderFormat);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${ChangeOrderFormatStyles.switch} ${ChangeOrderFormatStyles.switchOrderFormat}`}
    >
      <div className={ChangeOrderFormatStyles.item} key="chat">
        <input
          className={ChangeOrderFormatStyles.input}
          id="chat"
          type="radio"
          name="switchOrderFormat"
          defaultChecked={orderFormat === 'chat'}
          onChange={() => dispatch(changeOrderFormat('chat'))}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={ChangeOrderFormatStyles.label} htmlFor="chat">
          Chat
        </label>
      </div>
      <div className={ChangeOrderFormatStyles.item} key="form">
        <input
          className={ChangeOrderFormatStyles.input}
          id="form"
          type="radio"
          name="switchOrderFormat"
          defaultChecked={orderFormat === 'form'}
          onChange={() => dispatch(changeOrderFormat('form'))}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={ChangeOrderFormatStyles.label} htmlFor="form">
          Advanced
        </label>
      </div>
    </div>
  );
}

export default ChangeOrderFormat;
