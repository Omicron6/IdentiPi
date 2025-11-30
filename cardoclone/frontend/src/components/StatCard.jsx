export default function StatCard({ title, subtitle, buttonLabel, onClick, createdDid }) {
  return (
    <div className="stat-card card">
      <h3 style={{ marginBottom: '8px', color: '#FFFFFF' }}>{title}</h3>
      <p style={{ marginBottom: '20px', color: '#CED4E2', fontSize: '13px' }}>
        {subtitle}
        {createdDid && (
          <span style={{ display: 'block', marginTop: '8px', color: '#2E8BFF', fontWeight: 600, fontSize: '12px' }}>
            {createdDid}
          </span>
        )}
      </p>
      <button className="btn-primary" onClick={onClick} style={{ width: '100%' }}>
        {buttonLabel}
      </button>
    </div>
  );
}
