'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useRef, useState } from 'react';

const ITEM_HEIGHT = 32;
const BUFFER_ITEMS = 20;
const TOTAL_ITEMS = 500;
const VIEWPORT_HEIGHT = 300;

const ALL_ITEMS = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  value: `item-${i}`,
  label: `Item ${i}`,
}));

export const Pure = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_ITEMS
  );

  const endIndex = Math.min(
    ALL_ITEMS.length,
    Math.ceil((scrollTop + VIEWPORT_HEIGHT) / ITEM_HEIGHT) + BUFFER_ITEMS
  );

  const visibleItems = ALL_ITEMS.slice(startIndex, endIndex);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className='flex items-center justify-center gap-4'>
      <div className='w-full max-w-md'>
        <h2 className='mb-2 text-center text-white'>With Virtualization</h2>

        <Select>
          <SelectTrigger className='cursor-pointer text-white'>
            <SelectValue />
          </SelectTrigger>

          <SelectContent className='w-full'>
            <div
              ref={containerRef}
              onScroll={handleScroll}
              style={{ height: VIEWPORT_HEIGHT }}
              className='relative w-[var(--radix-select-trigger-width)] overflow-auto'
            >
              <div
                className='absolute top-0 left-0 w-full'
                style={{ height: ALL_ITEMS.length * ITEM_HEIGHT }}
              />

              <div
                className='absolute right-0 left-0'
                style={{ top: startIndex * ITEM_HEIGHT }}
              >
                {visibleItems.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className='text-sm'
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </div>
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className='w-full max-w-md'>
        <h2 className='mb-2 text-center text-white'>Without Virtualization</h2>

        <Select>
          <SelectTrigger className='cursor-pointer text-white'>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div className='overflow-auto' style={{ height: VIEWPORT_HEIGHT }}>
              {ALL_ITEMS.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  className='text-sm'
                >
                  {item.label}
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
