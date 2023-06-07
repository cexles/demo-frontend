import { Metadata } from 'next';

import LayoutOrder from '@/widgets/LayoutOrder/LayoutOrder';
import OrderHistory from '@/widgets/OrderHistory/OrderHistory';
import OrderChart from '@/widgets/OrderChart/OrderChart';

import OrderPageStyles from './OrderPage.module.scss';

export const metadata: Metadata = {
  title: 'Order | Cexles Finance',
  description:
    'Our decentralized trading platform offers a wide range of trading instruments and instant access to DeFi liquidity with automated on-chain order execution.',
  twitter: {
    card: 'summary_large_image',
    title: 'Cexles Finance | The Ultimate Decentralized Trading Platform',
    description:
      'Our decentralized trading platform offers a wide range of trading instruments and instant access to DeFi liquidity with automated on-chain order execution.',
    creator: '@CexlesFinance',
  },
  openGraph: {
    title: 'Cexles Finance | The Ultimate Decentralized Trading Platform',
    description:
      'Our decentralized trading platform offers a wide range of trading instruments and instant access to DeFi liquidity with automated on-chain order execution.',
    url: 'https://cexles.finance/',
    locale: 'en_US',
    type: 'website',
  },
};

function Order({ params }: { params: { type: string } }) {
  return (
    <div className={OrderPageStyles.content}>
      <main className={OrderPageStyles.main}>
        <LayoutOrder type={params.type} />
        <div className={OrderPageStyles.orderAdditional}>
          <OrderChart />
          <OrderHistory />
        </div>
      </main>
    </div>
  );
}

export default Order;
