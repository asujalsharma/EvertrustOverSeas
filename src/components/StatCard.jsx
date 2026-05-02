export default function StatCard({ value, label }) {
  return (
    <div className="card-panel bg-white/75 p-6">
      <div className="font-display text-4xl font-semibold text-evergreen">{value}</div>
      <p className="mt-2 text-sm leading-6 text-ink/65">{label}</p>
    </div>
  )
}
