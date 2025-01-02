'use client';
import { useEffect, useState } from 'react';

interface LiveTimeProps {
  timezone?: string;
}

export default function LiveTime({ timezone = 'America/New_York' }: LiveTimeProps) {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    // Update immediately
    updateTime();
    // Update every second
    const interval = setInterval(updateTime, 1000);
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [timezone]);

  // Return empty string on server-side or during initial client render
  if (!mounted) {
    return (
      <span className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)]">
        --:--:-- --
      </span>
    );
  }

  return (
    <span className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)]">
      {time}
    </span>
  );
}
