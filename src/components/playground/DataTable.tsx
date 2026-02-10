import React from 'react';

export default function DataTable({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="group relative border border-white/10 rounded-2xl bg-[#0F0F0F] overflow-hidden hover:border-white/20 transition-colors h-full">


            <div className="p-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-white/10 text-white/40 uppercase tracking-wider text-xs">
                            <th className="pb-3 font-medium">Name</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium text-right">Amount</th>
                            <th className="pb-3 font-medium text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5" style={{ fontFamily: secondaryFont }}>
                        {[
                            { name: "Liam Johnson", status: "Active", amount: "$120.00", date: "Oct 24, 2025" },
                            { name: "Emma Smith", status: "Pending", amount: "$350.50", date: "Oct 22, 2025" },
                            { name: "Noah Williams", status: "Active", amount: "$75.00", date: "Oct 21, 2025" },
                            { name: "Olivia Brown", status: "Cancelled", amount: "$45.00", date: "Oct 19, 2025" },
                        ].map((row, i) => (
                            <tr key={i} className="group/row hover:bg-white/[0.02]">
                                <td className="py-3 font-medium text-white" style={{ fontFamily: 'inherit' }}  >{row.name}</td>
                                <td className="py-3">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${row.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                        row.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                                            'bg-red-500/10 text-red-400'
                                        }`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 text-right font-mono text-white/70"  >{row.amount}</td>
                                <td className="py-3 text-right text-white/40"  >{row.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 text-[10px] text-white/20 uppercase tracking-widest pointer-events-none">
                Data Table
            </div>
        </div>
    );
}
