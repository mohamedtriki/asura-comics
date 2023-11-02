import { useEffect } from 'react';

export default function MedRectBTF() {
  useEffect(() => {
    window.ramp.que.push(() => {
      window.ramp.addTag('pwDeskMedRectBtf1');
    });
  }, []);

  return (
    <div className="med-rect-btf">
      <div data-pw-mobi="med_rect_btf" id="pwDeskMedRectBtf1" />
    </div>
  );
}
