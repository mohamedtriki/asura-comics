import { useEffect } from 'react';

function MedRectATF() {
  useEffect(() => {
    window.ramp.que.push(() => {
      window.ramp.addTag('pwDeskMedRectAtf');
    });
  }, []);

  return (
    <div className="med-rect-atf">
      <div data-pw-mobi="med_rect_atf" id="pwDeskMedRectAtf" />
    </div>
  );
}

export default MedRectATF;
