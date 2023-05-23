'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/navigation';

import orderTypes from '@/shared/config/order.config';

import { Props } from './type';

function ChangeOrderType({ current }: Props) {
  const router = useRouter();
  const [currentType, setCurrentType] = useState<any>(null);

  useEffect(() => {
    setCurrentType({ value: current, label: orderTypes[current].name });
  }, [current]);

  const formatOrderTypes = (availableTypes) =>
    Object.entries(availableTypes).map(([key, value]) => ({
      value: key,
      label: value.name,
    }));

  const changeOrderType = (selected) => {
    router.push(`/order/${selected.value}`);
  };

  return (
    <Select
      value={currentType}
      options={formatOrderTypes(orderTypes)}
      isSearchable={false}
      classNamePrefix="operation-select"
      onChange={changeOrderType}
    />
  );
}

export default ChangeOrderType;
