'use client'

import AdminNav from '@/components/AdminNav';
import AdminDashboard from './dashboard/page';

export default function Admin() {
    return (
        <div className="flex max-h-[782px] overflow-y-hidden">
            <AdminNav />
            <div>
                <AdminDashboard />
            </div>
        </div>
    )
}
