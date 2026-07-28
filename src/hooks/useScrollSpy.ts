import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');
  const idsString = sectionIds.join(',');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const ids = idsString.split(',').filter(Boolean);

      for (let i = ids.length - 1; i >= 0; i--) {
        const sectionId = ids[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [idsString, offset]);

  return activeId;
}
