import { useEffect } from 'react';

function LeaderboardATF() {
  useEffect(() => {
    window.ramp.que.push(() => {
      window.ramp.addTag('pwDeskLbAtf');
    });
  }, []);
  return (
    <div className="leaderboard-atf">
      <div data-pw-desk="leaderboard_atf" id="pwDeskLbAtf" />
    </div>
  );
}

export default LeaderboardATF;
