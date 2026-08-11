import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

export const LeadFormDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="lead-form-dialog"
        data-nosnippet
        className="sm:max-w-[680px] bg-[#0A0B0C] border border-white/10 text-white p-0 overflow-hidden"
      >
        <div className="relative">
          {/* glow header */}
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[120%] pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(149,191,71,0.22), transparent 70%)",
            }}
          />
          <div className="relative px-6 sm:px-8 pt-7 pb-2">
            <DialogHeader className="text-left">
              <DialogTitle className="font-display text-2xl sm:text-3xl font-[650] tracking-[-0.025em] text-white">
                Start Your Project
              </DialogTitle>
              <DialogDescription className="text-white/65 leading-relaxed">
                Brief us on your Shopify project. We respond within 24 hours
                with a tailored next-step plan.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="px-6 sm:px-8 pb-7">
            <LeadForm idPrefix="lead-form" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
