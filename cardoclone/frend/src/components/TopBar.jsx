export default function TopBar({ createdDid }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: 700 }}>Dashboard</h2>
        <p style={{ margin: 0, fontSize: '13px', color: '#CED4E2 ' }}>Manage your decentralized identity and credentials.</p>
      </div>

      <div className="topbar-right">
        <div className="user-chip">
          <div className="avatar">U</div>
          <div className="user-info">
            <div className="user-name">User</div>
            <div className="user-email">user@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
