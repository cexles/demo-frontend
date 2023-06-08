import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

import { orderTypes } from '@/shared/config/order.config';

import ChangeOrderTypeStyles from './ChangeOrderType.module.scss';
import { Props } from './type';

function ChangeOrderType({ current }: Props) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [currentType, setCurrentType] = useState<any>(null);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    setCurrentType({ value: current, label: orderTypes[current].name });
  }, [current]);

  const options = Object.entries(orderTypes).map(([key, value]) => ({
    value: key,
    label: value.name,
  }));

  const changeOrderType = (selected) => {
    router.push(`/order/${selected.value}`);
  };

  return isMounted ? (
    <div className={ChangeOrderTypeStyles.selectWrapper}>
      <Select
        value={currentType}
        options={options}
        isSearchable={false}
        classNamePrefix="operation-select"
        onChange={changeOrderType}
      />
    </div>
  ) : null;
}

export default ChangeOrderType;
