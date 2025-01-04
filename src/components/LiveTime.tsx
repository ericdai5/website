'use client';
import { useEffect, useState } from 'react';

interface LiveTimeProps {
  timezone?: string;
}

export default function LiveTime({ timezone = 'America/New_York' }: LiveTimeProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <span
      suppressHydrationWarning
      className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)]"
    >
      {time}
    </span>
  );
}
