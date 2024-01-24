import { FC } from 'react';
import cn from 'classnames';
import { Euro, DollarSign, PoundSterling, TrendingUp, TrendingDown } from 'lucide-react';

import { CurrencyType } from "@/components/Dashboard/types";
import s from './currency.module.scss';

type Props = {
  currency: CurrencyType;
  previewCurrency: CurrencyType;
}

export const Currency: FC<Props> = ({ currency, previewCurrency  }) => {
  const { rate, code, rate_float} = currency;
  const preview_rate_float = previewCurrency?.rate_float || 0
  const rateResult = (rate_float * 1000) - (preview_rate_float * 1000);
  const isEqual = rateResult === 0;
  const isUp = rateResult < 0;
  const isDown = rateResult > 0;

  return (
    <div className={cn(
      s.root,
      {
        [s.valueUp]: isUp,
        [s.valueEqual]: isEqual,
        [s.valueDown]: isDown,
      })}
    >
      <div className={s.codeWrapper}>
        <div className={s.code}>{code}</div>
        {code === 'EUR' && <Euro className={s.symbol} ></Euro>}
        {code === 'USD' && <DollarSign className={s.symbol} />}
        {code === 'GBP' && <PoundSterling className={s.symbol} />}
      </div>
      <div>
        {isUp && <TrendingUp className={cn({[s.valueUp]: isUp})} />}
        {isDown && <TrendingDown className={cn({[s.valueDown]: isDown})} />}
      </div>
      <div>
        {rate}
      </div>
    </div>
  )
}
