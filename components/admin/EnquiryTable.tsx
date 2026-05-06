import type { Enquiry } from '@/types'

export default function EnquiryTable({ enquiries = [] }: { enquiries?: Enquiry[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wider text-muted">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Message</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.length === 0 ? (
            <tr><td colSpan={4} className="p-6 text-center text-muted">No enquiries yet.</td></tr>
          ) : enquiries.map((enquiry) => (
            <tr key={enquiry.id} className="border-t">
              <td className="p-4">{enquiry.name}</td>
              <td className="p-4">{enquiry.phone}</td>
              <td className="p-4">{enquiry.message}</td>
              <td className="p-4 capitalize">{enquiry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
