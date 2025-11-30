import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import StatCard from '../components/StatCard';
import Modal from '../components/Modal';
import '../styles/dashboard.css';

export default function DashboardPage({ onLogout }) {
  const [activeModal, setActiveModal] = useState(null);
  const [didCreated, setDidCreated] = useState(false);
  const [generatedDid, setGeneratedDid] = useState('');
  const [generatedQr, setGeneratedQr] = useState('');

  const generateDid = () => {
    const randomId = Math.random().toString(36).substring(2, 15);
    const newDid = `did:identipi:${randomId}`;
    const randomQr = `QR_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setGeneratedDid(newDid);
    setGeneratedQr(randomQr);
    setDidCreated(true);
  };

  const handleOpenModal = (modalName) => {
    if (modalName === 'did') {
      // Immediately generate DID when opening the modal
      const randomId = Math.random().toString(36).substring(2, 15);
      const newDid = `did:identipi:${randomId}`;
      const randomQr = `QR_${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setGeneratedDid(newDid);
      setGeneratedQr(randomQr);
      setDidCreated(true);
    }
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleApproveRequest = () => {
    console.log('Approved');
    alert('Request approved!');
  };

  const handleRejectRequest = () => {
    console.log('Rejected');
    alert('Request rejected!');
  };

  return (
    <div className="dashboard">
      <Sidebar onLogout={onLogout} />

      <div className="dashboard-main">
        <TopBar createdDid={generatedDid} />

        <div className="dashboard-content">

          <div className="cards-grid">
            <StatCard
              title="Your DID"
              subtitle="View or generate your decentralized identity."
              buttonLabel="Create"
              onClick={() => handleOpenModal('did')}
              createdDid={generatedDid}
            />

            <StatCard
              title="Request VC"
              subtitle="Request verification credential from issuers."
              buttonLabel="Request"
              onClick={() => handleOpenModal('requestvc')}
            />

            <StatCard
              title="Identity Score"
              subtitle="Check your decentralized CIBIL score."
              buttonLabel="View Score"
              onClick={() => handleOpenModal('score')}
            />

            <StatCard
              title="Incoming Requests"
              subtitle="See who wants to verify you."
              buttonLabel="Open"
              onClick={() => handleOpenModal('requests')}
            />
          </div>
        </div>
      </div>

      {/* DID Modal */}
      <Modal
        isOpen={activeModal === 'did'}
        title="Your DID"
        onClose={handleCloseModal}
      >
        <div>
          <p style={{ marginBottom: '16px', color: '#CED4E2' }}>Your decentralized identifier:</p>
          <div className="did-container">
            <span style={{ color: '#F0F9FF', fontWeight: 600 }}>{generatedDid}</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="btn-secondary"
                onClick={() => {
                  navigator.clipboard.writeText(generatedDid);
                  alert('Copied to clipboard!');
                }}
                style={{ padding: '4px 8px', fontSize: '11px' }}
              >
                Copy
              </button>
              <button
                className="btn-qr"
                onClick={() => handleOpenModal('qr')}
                style={{ padding: '4px 8px', fontSize: '16px', cursor: 'pointer' }}
                title="View QR Code"
              >
                📱
              </button>
            </div>
          </div>
          <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '12px' }}>
            Share this DID with verifiers. It uniquely identifies you in the IdentiPI ecosystem.
          </p>
        </div>
      </Modal>

      {/* QR Code Modal */}
      <Modal
        isOpen={activeModal === 'qr'}
        title="DID QR Code"
        onClose={handleCloseModal}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <img 
            src="/frontend/asset/Untitled 1.png" 
            alt="DID QR Code" 
            style={{ width: '200px', height: '200px', borderRadius: '8px', objectFit: 'contain' }}
          />
          <p style={{ fontSize: '12px', color: '#CED4E2', textAlign: 'center' }}>
            Scan this QR code to share your DID with verifiers.
          </p>
        </div>
      </Modal>

      {/* Identity Score Modal */}
      <Modal
        isOpen={activeModal === 'score'}
        title="Identity Score"
        onClose={handleCloseModal}
      >
        <div>
          <div className="score-display">
            <span className="score-number">830</span>
            <span className="score-max">/ 900</span>
          </div>
          <span className="badge badge-success">High Trust</span>

          <h4 style={{ marginTop: '20px', marginBottom: '12px', color: '#FFFFFF', fontWeight: 600 }}>
            Verification Summary
          </h4>
          <ul className="score-list">
            <li>Name matches across credentials</li>
            <li>DOB is consistent</li>
            <li>Issuers are trusted</li>
          </ul>

          <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '16px' }}>
            Your identity score reflects the quality and consistency of your verified credentials.
          </p>
        </div>
      </Modal>

      {/* Request VC Modal */}
      <Modal
        isOpen={activeModal === 'requestvc'}
        title="Request VC"
        onClose={handleCloseModal}
      >
        <div>
          <div className="vc-section">
            <label className="vc-label" htmlFor="issuer-select">Select Issuer</label>
            <select id="issuer-select" className="vc-select" style={{ marginBottom: '16px' }}>
              <option>Government</option>
              <option>University</option>
              <option>Employer</option>
            </select>
          </div>

          <button className="btn-primary" style={{ width: '100%' }} disabled>
            Send Request
          </button>

          <div className="vc-info">
            ℹ️ VC request flow will connect to backend later. For now, requests are simulated.
          </div>
        </div>
      </Modal>

      {/* Incoming Requests Modal */}
      <Modal
        isOpen={activeModal === 'requests'}
        title="Incoming Requests"
        onClose={handleCloseModal}
      >
        <div>
          <table className="requests-table">
            <thead>
              <tr>
                <th>Requester</th>
                <th>Claims</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TrustBank</td>
                <td>Age ≥ 18, Score ≥ 750</td>
                <td>
                  <div className="request-actions">
                    <button className="btn-success" onClick={handleApproveRequest}>
                      Approve
                    </button>
                    <button className="btn-error" onClick={handleRejectRequest}>
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '12px', color: '#6B7280' }}>
            Review and approve or reject verification requests from trusted parties.
          </p>
        </div>
      </Modal>
    </div>
  );
}
