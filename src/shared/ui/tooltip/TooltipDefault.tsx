import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { Props } from './type';

function TooltipDefault({ content, place, anchorSelect, className }: Props) {
  return (
    <Tooltip anchorSelect={`#${anchorSelect}`} place={place} className={className}>
      {content}
    </Tooltip>
  );
}

export default TooltipDefault;
