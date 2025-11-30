export default function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img src="/frontend/asset/WhatsApp Image 2025-11-30 at 01.16.52.jpeg" alt="IdentiPI" className="sidebar-logo" />
        <div>
          <h3 style={{ margin: '0 0 2px 0', fontSize: '16px' }}>IdentiPI</h3>
          <p style={{ margin: 0, fontSize: '11px', color: '#6B7280' }}>Identity Network</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <span>Dashboard</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="network-status">
          <div>
            <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: 600, color: '#FFFFFF' }}>Cardano Network</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#CED4E2' }}>Cardano Wallet Connected</p>
          </div>
        </div>

        <button className="btn-secondary" onClick={onLogout} style={{ width: '100%' }}>
          Logout
        </button>
      </div>
    </aside>
  );
}
