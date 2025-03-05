'use client';

import { Pure } from '@/components/pure';
import { TanStack } from '@/components/tanstack';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Options = {
  PURE: 'pure',
  TANSTACK: 'tanstack',
} as const;

export default function Page() {
  return (
    <div className='flex min-h-screen items-center justify-center gap-4 bg-black'>
      <Tabs defaultValue={Options.PURE} className='w-full max-w-md gap-10'>
        <TabsList className='w-full'>
          <TabsTrigger value={Options.PURE} className='cursor-pointer'>
            Pure
          </TabsTrigger>
          <TabsTrigger value={Options.TANSTACK} className='cursor-pointer'>
            TanStack Virtual
          </TabsTrigger>
        </TabsList>
        <TabsContent value={Options.PURE}>
          <Pure />
        </TabsContent>
        <TabsContent value={Options.TANSTACK}>
          <TanStack />
        </TabsContent>
      </Tabs>
    </div>
  );
}
