'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState } from 'react';

const ITEM_HEIGHT = 32;
const BUFFER_ITEMS = 20;
const TOTAL_ITEMS = 500;
const VIEWPORT_HEIGHT = 300;

const ALL_ITEMS = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  value: `item-${i}`,
  label: `Item ${i}`,
}));

export const TanStack = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: TOTAL_ITEMS,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: BUFFER_ITEMS,
  });

  return (
    <div className='flex items-center justify-center gap-4'>
      <div className='w-full max-w-md'>
        <h2 className='mb-2 text-center text-white'>With Virtualization</h2>

        <Select open={open} onOpenChange={setOpen}>
          <SelectTrigger className='cursor-pointer text-white'>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div
              ref={parentRef}
              className='relative w-[var(--radix-select-trigger-width)] overflow-auto'
              style={{ height: VIEWPORT_HEIGHT }}
            >
              <div
                className='relative w-full'
                style={{
                  height: `${virtualizer.getTotalSize()}px`,
                }}
              >
                {virtualizer.getVirtualItems().map((virtualItem) => {
                  const item = ALL_ITEMS[virtualItem.index];

                  return (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className='absolute left-0 w-full text-sm'
                      style={{
                        height: `${ITEM_HEIGHT}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                    >
                      {item.label}
                    </SelectItem>
                  );
                })}
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
