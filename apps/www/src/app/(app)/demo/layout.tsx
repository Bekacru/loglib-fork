import { PublicDashboardHeader } from "@/components/site-header";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="space-y-8 md:px-16 px-4 min-h-[99vh]  bg-gradient-to-tr dark:from-slate-950 dark:to-slate-950/50 from-white to-slate-200">
                <PublicDashboardHeader />
                <div>{children}</div>
            </main>
        </>
    );
}
