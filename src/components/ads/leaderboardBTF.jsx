import { useEffect } from 'react';

function LeaderboardBTF() {
  useEffect(() => {
    window.ramp.que.push(() => {
      window.ramp.addTag('pwDeskLbBtf1');
    });
  }, []);

  return (
    <div className="leaderboard-btf">
      <div data-pw-desk="leaderboard_btf" id="pwDeskLbBtf1" />
    </div>
  );
}

export default LeaderboardBTF;
