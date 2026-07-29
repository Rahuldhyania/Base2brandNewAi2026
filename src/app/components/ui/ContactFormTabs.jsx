'use client';

import { BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScheduleCallForm from '@/components/ui/ScheduleCallForm';
import ProjectContactForm from '@/components/ui/ProjectContactForm';
import { cn } from '@/lib/utils';

export default function ContactFormTabs({ className, defaultTab = 'schedule' }) {
  return (
    <Tabs defaultValue={defaultTab} className={cn('w-full', className)}>
      <TabsList className="mb-4 grid h-auto w-full grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
        <TabsTrigger
          value="schedule"
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/55 transition-all data-[state=active]:bg-[var(--b2b-primary)] data-[state=active]:text-black data-[state=active]:shadow-[0_0_24px_color-mix(in_srgb,var(--b2b-primary)_35%,transparent)]"
        >
          <CalendarDays className="h-4 w-4 shrink-0" />
          Schedule a Call
        </TabsTrigger>
        <TabsTrigger
          value="project"
          className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/55 transition-all data-[state=active]:bg-[var(--b2b-primary)] data-[state=active]:text-black data-[state=active]:shadow-[0_0_24px_color-mix(in_srgb,var(--b2b-primary)_35%,transparent)]"
        >
          <BriefcaseBusiness className="h-4 w-4 shrink-0" />
          Project Brief
        </TabsTrigger>
      </TabsList>

      <TabsContent value="schedule" className="mt-0 focus-visible:outline-none">
        <ScheduleCallForm />
      </TabsContent>

      <TabsContent value="project" className="mt-0 focus-visible:outline-none">
        <ProjectContactForm embedded />
      </TabsContent>
    </Tabs>
  );
}
